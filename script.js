function startCountdown(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      display.textContent = "00:00";
    }
  }, 1000);
}

window.onload = function () {
  const fifteenMinutes = 60 * 15;
  const display = document.getElementById("countdown");
  startCountdown(fifteenMinutes, display);
};

function trackLeadOnce() {
  if (!localStorage.getItem("leadTracked")) {
    if (typeof fbq === "function") {
      fbq("track", "PageView");
      fbq("track", "Lead");
    }
    localStorage.setItem("leadTracked", "true");
  }
}
// Bloquear clique direito
document.addEventListener("contextmenu", e => e.preventDefault());

// Bloquear teclas: F12, Ctrl+Shift+I, Ctrl+Shift+C, Ctrl+Shift+J, Ctrl+U
document.addEventListener("keydown", e => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toUpperCase() === "U")
  ) {
    e.preventDefault();
  }
});

