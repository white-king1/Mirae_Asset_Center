const imgs = document.querySelectorAll("[data-img-url]");
imgs.forEach((div) => {
  div.style.backgroundImage = `url(./${div.getAttribute("data-img-url")})`;
});

const slider = document.querySelector(".slider");
const indexButtons = document.querySelectorAll(".index-container > button");
const arrowButtons = document.querySelectorAll("[data-index-change]");
let currIndex = 0;

function slide(nextIndex) {
  if (nextIndex < 0) nextIndex = imgs.length - 1;
  if (nextIndex >= imgs.length) nextIndex = 0;
  indexButtons[currIndex].style.backgroundColor = "";
  indexButtons[nextIndex].style.backgroundColor = "white";
  slider.style.transform = `translateX(-${(nextIndex / imgs.length) * 100}%)`;
  currIndex = nextIndex;
}

indexButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    slide(index);
  });
});

arrowButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const indexChange = +button.getAttribute("data-index-change");
    slide(currIndex + indexChange);
  });
});

// Bonus for automatic slider starts here
const navContainer = document.querySelector(".nav-container");
let id;
let isSliding = false;

function startAutoSlide() {
  if (!isSliding) {
    id = setInterval(() => slide(currIndex + 1), 2000);
    isSliding = true;
  }
}

function stopAutoSlide() {
  clearInterval(id);
  isSliding = false;
}

startAutoSlide();

// STOP AUTOMATIC SLIDER WHEN USER HOVERS ON THE PAGE STARTS HERE
navContainer.addEventListener("mouseover", () => stopAutoSlide());
navContainer.addEventListener("mouseout", () => startAutoSlide());

document.addEventListener("touchstart", (e) => {
  if (e.target !== navContainer && !navContainer.contains(e.target))
    startAutoSlide();
});
//STOP AUTOMATIC SLIDER WHEN USER HOVERS ON THE PAGE ENDS HERE

// Bonus for automatic slider  ends here


