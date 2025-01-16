// Get elements
const sliderContainer = document.querySelector(".slider");
const indexButtons = document.querySelectorAll(".index-container > button");
const arrowButtons = document.querySelectorAll("[data-index-change]");
const imgs = document.querySelectorAll("[data-img-url]");

// Initialize variables
let currIndex = 0;

// Function to initialize slider
function initSlider() {
  // Initialize background images
  imgs.forEach((div) => {
    div.style.backgroundImage = `url(./${div.getAttribute("data-img-url")})`;
  });

  // Add event listeners to index buttons
  indexButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      slideToIndex(index);
    });
  });

  // Add event listeners to arrow buttons
  arrowButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const indexChange = +button.getAttribute("data-index-change");
      slideToIndex(currIndex + indexChange);
    });
  });
}

// Function to slide to a specific index
function slideToIndex(nextIndex) {
  if (nextIndex < 0) nextIndex = imgs.length - 1;
  if (nextIndex >= imgs.length) nextIndex = 0;

  // Update index buttons
  indexButtons[currIndex].style.backgroundColor = "";
  indexButtons[nextIndex].style.backgroundColor = "white";

  // Update slider container
  sliderContainer.style.transform = `translateX(-${(nextIndex / imgs.length) * 100}%)`;

  // Update current index
  currIndex = nextIndex;
}

// Initialize slider
initSlider();

// Bonus for automatic slider starts here
// const navContainer = document.querySelector(".nav-container");
// let id;
// let isSliding = false;

// function startAutoSlide() {
//   if (!isSliding) {
//     id = setInterval(() => slideToIndex(currIndex + 1), 2000);
//     isSliding = true;
//   }
// }

// function stopAutoSlide() {
//   clearInterval(id);
//   isSliding = false;
// }

// startAutoSlide();

// // STOP AUTOMATIC SLIDER WHEN USER HOVERS ON THE PAGE STARTS HERE
// navContainer.addEventListener("mouseover", () => stopAutoSlide());
// navContainer.addEventListener("mouseout", () => startAutoSlide());

// document.addEventListener("touchstart", (e) => {
//   if (e.target !== navContainer && !navContainer.contains(e.target))
//     startAutoSlide();
// });
// STOP AUTOMATIC SLIDER WHEN USER HOVERS ON THE PAGE ENDS HERE