// const yesBtn = document.getElementById("yup");
// const noBtn = document.getElementById("nope");

// let size = 1; // initial scale

// noBtn.addEventListener("click", () => {
//   size += 0.2; // grow 20% each click
//   yesBtn.style.transform = `scale(${size})`;
//   yesBtn.style.transition = "transform 0.3s ease";
// });
// const yesBtn = document.getElementById("yup");
// const noBtn = document.getElementById("nope");

// let yesSize = 1; // initial scale for yes button
// let noSize = 1;  // initial scale for no button

// noBtn.addEventListener("click", () => {
//   // Grow YES
//   yesSize += 0.2;
//   yesBtn.style.transform = `scale(${yesSize})`;
//   yesBtn.style.transition = "transform 0.3s ease";

//   // Shrink NO
//   noSize -= 0.1;
//   if (noSize > 0) { // don't let it go negative
//     noBtn.style.transform = `scale(${noSize})`;
//     noBtn.style.transition = "transform 0.3s ease";
//   } else {
//     noBtn.style.display = "none"; // completely vanish if too small
//   }
// });
// const yesBtn = document.getElementById("yup");
// const noBtn = document.getElementById("nope");

// let yesGrow = 1; 
// let noShrink = 1;

// noBtn.addEventListener("click", () => {
//   // Grow Yes
//   yesGrow += 0.2;
//   yesBtn.style.transform = `scale(${yesGrow})`;

//   // Shrink No
//   noShrink -= 0.05; // shrink slightly
//   if (noShrink > 0) {
//     noBtn.style.transform = `scale(${noShrink}) translateX(-${yesGrow * 10}px)`;
//   } else {
//     noBtn.style.display = "none";
//   }
// });
const yesBtn = document.getElementById("yup");
const noBtn = document.getElementById("nope");

let yesScale = 1;
let noScale = 1;
let clickCount = 0;

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
    let h2=document.querySelector("h2");
    h2.classList.add("fullscreen-yes");
    h2.innerText="YAY! 💖 We're going on a Garba Date! 🪔✨";
    // yesBtn.textContent = "YAY! 💖 We're going on a Garba Date! 🪔✨";

    // Confetti hearts
    for (let i = 0; i < 30; i++) {
      createHeart();
    }
  }
});

// Function to create falling hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s"; // 2-5s fall
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
