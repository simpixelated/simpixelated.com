module.exports = function () {
  return {
    // should be Netlify build context
    // "It can be production, deploy-preview, branch-deploy, or dev."
    // https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
    context: process.env.CONTEXT,
  }
}
