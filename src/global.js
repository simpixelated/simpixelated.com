if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  // document.body.classList.add('dark')
  document.getElementById("toggle-dark").checked = true
}

document.getElementById("toggle-dark").addEventListener("change", e => {
  console.log(e.target.checked)
  if (e.target.checked === true) {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.add("light")
    document.documentElement.classList.remove("dark")
  }
})
