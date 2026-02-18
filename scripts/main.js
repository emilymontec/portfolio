const toggle = document.getElementById("toggleMode");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("full-mode");
  });
}
