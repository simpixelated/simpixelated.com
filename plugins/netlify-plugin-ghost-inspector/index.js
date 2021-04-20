const ghostInspectorClient = require("ghost-inspector")
const { updateGithubStatus } = require("./github")

module.exports = {
  onPreBuild: async () => {
    // Only run this in PR deploys
    if (process.env.CONTEXT !== "deploy-preview") {
      console.log(`Not in deploy-preview. Skipping Ghost Inspector tests.`)
      return
    }

    if (process.env.GITHUB_API_TOKEN) {
      // Add pending status so PR authors know a Ghost Inspector check is pending
      await updateGithubStatus({
        auth: process.env.GITHUB_API_TOKEN,
        sha: process.env.COMMIT_REF,
        state: "pending",
        description: "Waiting for Netlify deploy to complete",
      })
    }
  },
  onSuccess: async ({ utils }) => {
    // Only run this in PR deploys
    if (process.env.CONTEXT !== "deploy-preview") {
      console.log(`Not in deploy-preview. Skipping Ghost Inspector tests.`)
      return
    }

    // Check to make sure we have a public URL to test against
    const deployUrl = process.env.DEPLOY_PRIME_URL
    if (!deployUrl) {
      console.log(`No deployUrl. Skipping Ghost Inspector tests.`)
      return
    }

    // Check to ensure we have our API key
    const ghostInspectorApiKey = process.env.GHOST_INSPECTOR_API_KEY
    if (!ghostInspectorApiKey) {
      return utils.build.failPlugin(
        `Missing env variable for GHOST_INSPECTOR_API_KEY`
      )
    }
    const GhostInspector = ghostInspectorClient(ghostInspectorApiKey)

    // Check to ensure we have our Suite ID
    const suiteId = process.env.GHOST_INSPECTOR_SUITE
    if (!suiteId) {
      return utils.build.failPlugin(
        `Missing env variable for GHOST_INSPECTOR_SUITE`
      )
    }

    try {
      console.log(`👻 Starting Ghost Inspector E2E tests on ${deployUrl} ...`)

      // Make API request to Ghost Inspector API
      const [results, passing] = await GhostInspector.executeSuite(suiteId, {
        startUrl: deployUrl,
      })

      if (!passing) {
        const testResult = results.map(({ name, passing }) => {
          return { name, passing }
        })

        // Send a failure status to the GitHub commit
        if (process.env.GITHUB_API_TOKEN) {
          await updateGithubStatus({
            auth: process.env.GITHUB_API_TOKEN,
            sha: process.env.COMMIT_REF,
            state: "failure",
            target_url: `https://app.ghostinspector.com/suites/${suiteId}`,
            description: "At least one test failed",
          })
        }

        return utils.build.failPlugin(
          `🚫 At least one Ghost Inspector test failed. Visit [https://app.ghostinspector.com/suites/${suiteId}](https://app.ghostinspector.com/suites/${suiteId}) for details. Failed tests:
          ${testResult}`
        )
      }

      console.log(`✅ All Ghost Inspector tests passed!`)

      if (process.env.GITHUB_API_TOKEN) {
        // Send a success status to the Github commit
        await updateGithubStatus({
          auth: process.env.GITHUB_API_TOKEN,
          sha: process.env.COMMIT_REF,
          state: "success",
          target_url: `https://app.ghostinspector.com/suites/${suiteId}`,
          description: `All tests passed!`,
        })
      }

      return utils.status.show({
        title: `Ghost Inspector E2E tests`,
        summary: `✅ All tests passed`,
        text: `Visit https://app.ghostinspector.com/suites/${suiteId} for test results`,
      })
    } catch (error) {
      return utils.build.failPlugin(error.message)
    }
  },
}
