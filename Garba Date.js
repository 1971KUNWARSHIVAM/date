const yesBtn = document.getElementById("yup");
const noBtn = document.getElementById("nope");

let yesScale = 1;
let noScale = 1;
let clickCount = 0;
yesBtn.addEventListener("click",()=>{
  let h2=document.querySelector("h2");
    h2.classList.add("fullscreen-yes");
    h2.innerText="YAY! 💖 We're going on a Garba Date! 🪔✨";
    // yesBtn.textContent = "YAY! 💖 We're going on a Garba Date! 🪔✨";

    // Confetti hearts
    for (let i = 0; i < 30; i++) {
      createHeart();
    }
})
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


// const yesBtn = document.getElementById("yup");
// const noBtn = document.getElementById("nope");

// let yesWidth = yesBtn.offsetWidth;
// let yesHeight = yesBtn.offsetHeight;
// let noWidth = noBtn.offsetWidth;
// let noHeight = noBtn.offsetHeight;
// let clickCount = 0;
// yesBtn.addEventListener("click",()=>{
//   let h2 = document.querySelector("h2");
//     h2.classList.add("fullscreen-yes");
//     h2.innerText = "YAY! 💖 We're going on a Garba Date! 🪔✨";

//     // Falling hearts
//     for (let i = 0; i < 30; i++) {
//       createHeart();
//     }
// });
// noBtn.addEventListener("click", () => {
//   clickCount++;

//   // Grow YES button (width + height increase)
//   yesWidth += 30;
//   yesHeight += 15;
//   yesBtn.style.width = yesWidth + "px";
//   yesBtn.style.height = yesHeight + "px";
//   yesBtn.style.transition = "all 0.3s ease";

//   // Shrink NO button (width + height decrease)
//   noWidth -= 10;
//   noHeight -= 5;
//   if (noWidth > 40 && noHeight > 20) {
//     noBtn.style.width = noWidth + "px";
//     noBtn.style.height = noHeight + "px";
//     noBtn.style.transition = "all 0.3s ease";
//   } else {
//     noBtn.style.display = "none";
//   }

//   // After 9 clicks → fullscreen message
//   if (clickCount === 9) {
//     let h2 = document.querySelector("h2");
//     h2.classList.add("fullscreen-yes");
//     h2.innerText = "YAY! 💖 We're going on a Garba Date! 🪔✨";

//     // Falling hearts
//     for (let i = 0; i < 30; i++) {
//       createHeart();
//     }
//   }
// });

// // Falling hearts function
// function createHeart() {
//   const heart = document.createElement("div");
//   heart.classList.add("heart");
//   heart.textContent = "💖";
//   heart.style.left = Math.random() * 100 + "vw";
//   heart.style.animationDuration = 2 + Math.random() * 3 + "s";
//   document.body.appendChild(heart);

//   setTimeout(() => {
//     heart.remove();
//   }, 5000);
// }
