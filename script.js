const button = document.getElementById("click-btn");
const img = document.getElementById("btn-img");
const counterText = document.getElementById("counter-text");

let clickCount = 0;

// CONFETTI FUNCTION
function launchConfetti(colors, shape) {
  confetti({
    particleCount: 150,
    spread: 90,
    origin: { y: 0.6 },
    colors: colors,
    shapes: [shape],
  });
}

button.addEventListener("click", () => {
  clickCount++;
  counterText.textContent = `Pressed ${clickCount} times!`;

  // BLOCK OF 50
  const currentBlock = Math.floor(clickCount / 50);

  if (currentBlock % 2 === 0) {
    img.src = "images/press_1.png";

    if (clickCount % 50 === 0) {
      launchConfetti(["#00ffcc", "#33ff00"], "star");
    }
  } else {
    img.src = "images/press_2.png";

    if (clickCount % 50 === 0) {
      launchConfetti(["#ff0055", "#ff9900"], "star");
    }
  }
});
