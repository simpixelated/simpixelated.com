module.exports = {
  ci: {
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
      assertions: {
        "color-contrast": "off",
        "errors-in-console": "off",
        "image-alt": "off",
        "installable-manifest": "off",
        "maskable-icon": "off",
        "offline-start-url": "off",
        "service-worker": "off",
        "splash-screen": "off",
        "themed-omnibox": "off",
        "unused-javascript": "off",
        "uses-responsive-images": "off",
        "works-offline": "off",
      },
    },
  },
}
