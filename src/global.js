const preferredColorMode =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
const colorModeKey = "theme-ui-color-mode"
const storedColorMode = localStorage.getItem(colorModeKey)
let colorMode = storedColorMode ?? preferredColorMode

document.documentElement.classList.add(colorMode)

const toggle = document.getElementById("toggle-color-mode")
toggle.addEventListener("click", e => {
  colorMode = colorMode === "dark" ? "light" : "dark"
  if (colorMode === "dark") {
    toggle.classList.add("light")
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
  } else {
    toggle.classList.remove("light")
    document.documentElement.classList.add("light")
    document.documentElement.classList.remove("dark")
  }
  localStorage.setItem("theme-ui-color-mode", colorMode)
})
