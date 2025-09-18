const yesBtn = document.getElementById("yup");
const noBtn = document.getElementById("nope");

let yesScale = 1;
let noScale = 1;
let clickCount = 0;

// 💖 Yes button click → bloom hearts once
yesBtn.addEventListener("click", () => {
  for (let i = 0; i < 15; i++) {
    createHeart();
  }
});

noBtn.addEventListener("click", () => {
  clickCount++;

  // Grow Yes
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  // Shrink No
  noScale -= 0.1;
  if (noScale > 0) {
    noBtn.style.transform = `scale(${noScale})`;
  } else {
    noBtn.style.display = "none";
  }

  // After 9 clicks → fullscreen takeover
  if (clickCount === 9) {
    let h2 = document.querySelector("h2");
    h2.classList.add("fullscreen-yes");
    h2.innerText = "YAY! 💖 We're going on a Garba Date! 🪔✨";

    for (let i = 0; i < 30; i++) {
      createHeart();
    }
  }
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
