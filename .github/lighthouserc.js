module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "uses-responsive-images": "warn",
        "is-crawlable": "off",
        "uses-rel-preconnect": "warn", // flags Netlify scripts on deploy preview
        "csp-xss": "warn",
        deprecations: "warn",
      },
    },
    settings: {
      budgets: [
        {
          timings: [
            {
              metric: "interactive",
              budget: 3000,
            },
            {
              metric: "first-meaningful-paint",
              budget: 2000,
            },
          ],
          resourceSizes: [
            {
              resourceType: "total",
              budget: 500,
            },
          ],
        },
      ],
    },
  },
}
