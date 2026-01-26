const toggle = document.getElementById("toggleMode");
const overlay = document.getElementById("modeOverlay");
const body = document.body;

toggle.addEventListener("click", () => {
  overlay.classList.add("active");

  setTimeout(() => {
    body.classList.toggle("full-mode");

    const isFull = body.classList.contains("full-mode");
    localStorage.setItem("mode", isFull ? "full" : "basic");

    overlay.classList.remove("active");
  }, 800);
});

// Persistencia al cargar
if (localStorage.getItem("mode") === "full") {
  body.classList.add("full-mode");
}
