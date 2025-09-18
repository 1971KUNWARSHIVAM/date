const yesBtn = document.getElementById("yup");
const noBtn = document.getElementById("nope");

let yesScale = 1;
let noScale = 1;

// 💖 Yes button click → instant celebration
yesBtn.addEventListener("click", () => {
  let h2 = document.querySelector("h2");
  h2.classList.add("fullscreen-yes");
  h2.innerText = "YAY! 💖 We're going on a Garba Date! 🪔✨";

  for (let i = 0; i < 30; i++) {
    createHeart();
  }
});

// 👎 No button click → grow Yes, shrink No
noBtn.addEventListener("click", () => {
  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;

  noScale -= 0.1;
  if (noScale > 0) {
    noBtn.style.transform = `scale(${noScale})`;
  } else {
    noBtn.style.display = "none";
  }
});

// 💖 Heart animation
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
