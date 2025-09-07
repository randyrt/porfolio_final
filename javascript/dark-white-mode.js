const toggleButton = document.getElementById("toggle-button"), 
navbar = document.getElementById("darkness-mode"), lines = document.querySelectorAll("#line-wrapper"), 
body = document.body; let darkmode = localStorage.getItem("dark-mode-cv"); 
const enableDarkMode = () => { body.classList.add("dark-mode"), body.classList.add("transition"), 
navbar.classList.add("darkness-mode"), navbar.classList.remove("lightme-mode"), 
lines.forEach(e => { e.classList.add("line-dark"), e.classList.remove("line-white") }),
body.classList.remove("light-mode"), localStorage.setItem("dark-mode-cv", "enabled") }, 
disableDarkMode = () => { body.classList.add("light-mode"),
body.classList.add("transition"), 
navbar.classList.remove("darkness-mode"), 
navbar.classList.add("lightme-mode"), 
lines.forEach(e => { e.classList.remove("line-dark"), 
e.classList.add("line-white") }), body.classList.remove("dark-mode"), 

localStorage.setItem("dark-mode-cv", "disabled") }; "enabled" === darkmode && enableDarkMode(), 
toggleButton.addEventListener("click", () => { "disabled" === (darkmode = localStorage.getItem("dark-mode-cv")) ? enableDarkMode() : disableDarkMode() });
