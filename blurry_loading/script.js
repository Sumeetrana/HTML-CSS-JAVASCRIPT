const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);
let blur = 30;
function blurring() {
  load++;

  loadText.innerHTML = load + "%";
  if (load >= 100) {
    clearInterval(int);
  }

  loadText.style.opacity = (1 - load / 100) / 1;
  bg.style.filter = `blur(${blur}px)`;
  blur = 29 / (30 * (load / 100));
}
