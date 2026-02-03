const toggle = document.getElementById("toggleMode");
const body = document.body;
const aurora = document.getElementById("auroraOverlay");

toggle.addEventListener("click", () => {
  // Toggle logic
  const isFullMode = body.classList.toggle("full-mode");

  if (isFullMode) {
    toggle.textContent = "Back to the surface";
    aurora.classList.add("active");
    body.classList.remove("returning-to-basic");
  } else {
    toggle.textContent = "Go deeper";
    aurora.classList.remove("active");
    body.classList.add("returning-to-basic");
    
    // Remove the returning class after animation completes
    setTimeout(() => {
      body.classList.remove("returning-to-basic");
    }, 800);
  }
});
