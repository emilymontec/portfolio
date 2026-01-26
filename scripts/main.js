const toggle = document.getElementById("toggleMode");
const body = document.body;
const aurora = document.getElementById("auroraOverlay");

toggle.addEventListener("click", () => {
  aurora.classList.add("active");

  setTimeout(() => {
    body.classList.toggle("full-mode");
  }, 400);
});
