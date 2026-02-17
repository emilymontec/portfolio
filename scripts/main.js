const toggle = document.getElementById("toggleMode");
const body = document.body;
const aurora = document.getElementById("auroraOverlay");

if (toggle) {
  toggle.addEventListener("click", () => {
    const isFullMode = body.classList.toggle("full-mode");

    if (isFullMode) {
      toggle.textContent = "Back to the surface";
      if (aurora) aurora.classList.add("active");
      body.classList.remove("returning-to-basic");
    } else {
      toggle.textContent = "Go deeper";
      if (aurora) aurora.classList.remove("active");
      body.classList.add("returning-to-basic");

      setTimeout(() => {
        body.classList.remove("returning-to-basic");
      }, 800);
    }
  });
}

// About se carga directamente como iframe, sin JS adicional
