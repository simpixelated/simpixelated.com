const preferredColorMode =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
const colorModeKey = "theme-ui-color-mode"
const storedColorMode = localStorage.getItem(colorModeKey)
let colorMode = storedColorMode ?? preferredColorMode

document.documentElement.classList.add(colorMode)

document.getElementById("toggle-color-mode").addEventListener("click", e => {
  colorMode = colorMode === "dark" ? "light" : "dark"
  if (colorMode === "dark") {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.add("light")
    document.documentElement.classList.remove("dark")
  }
  localStorage.setItem("theme-ui-color-mode", colorMode)
})
