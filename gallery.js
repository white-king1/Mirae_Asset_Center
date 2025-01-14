const $ = (selector) => {
  return document.querySelector(selector);
};

let currentImageIndex = 2;
let totalImages = 8;

function next() {
  if ($(".hide")) {
    $(".hide").remove();
  }

  /* Step */

  if ($(".prev")) {
    $(".prev").classList.add("hide");
    $(".prev").classList.remove("prev");
  }

  $(".act").classList.add("prev");
  $(".act").classList.remove("act");

  $(".next").classList.add("act");
  $(".next").classList.remove("next");

  /* New Next */

  $(".new-next").classList.remove("new-next");

  currentImageIndex = ((currentImageIndex + 1) % totalImages) + 1;
  const addedEl = document.createElement("li");
  addedEl.innerHTML = `<img src="assets/image${currentImageIndex}.png" alt="Image ${currentImageIndex}">`;
  $(".list").appendChild(addedEl);
  addedEl.classList.add("next", "new-next");
}

function prev() {
  $(".new-next").remove();

  /* Step */

  $(".next").classList.add("new-next");

  $(".act").classList.add("next");
  $(".act").classList.remove("act");

  $(".prev").classList.add("act");
  $(".prev").classList.remove("prev");

  /* New Prev */

  $(".hide").classList.add("prev");
  $(".hide").classList.remove("hide");

  currentImageIndex =
    currentImageIndex === 1 ? totalImages : currentImageIndex - 1;
  const addedEl = document.createElement("li");
  addedEl.innerHTML = `<img src="assets/image${currentImageIndex}.png" alt="Image ${currentImageIndex}">`;
  $(".list").insertBefore(addedEl, $(".list").firstChild);
  addedEl.classList.add("hide");
}

function init() {
  for (let i = 3; i <= 5; i++) {
    const addedEl = document.createElement("li");
    addedEl.innerHTML = `<img src="assets/image${i}.png" alt="Image ${i}">`;
    $(".list").appendChild(addedEl);
    if (i === 4) {
      addedEl.classList.add("next");
    } else if (i === 5) {
      addedEl.classList.add("next", "new-next");
    }
  }
}

slide = (element) => {
  /* Next slide */

  if (element.classList.contains("next")) {
    next();

    /* Previous slide */
  } else if (element.classList.contains("prev")) {
    prev();
  }
};

const slider = $(".list"),
  swipe = new Hammer($(".swipe"));

init();

slider.onclick = (event) => {
  if (event.target.tagName === "IMG") {
    slide(event.target.parentNode);
  }
};

swipe.on("swipeleft", (ev) => {
  next();
});

swipe.on("swiperight", (ev) => {
  prev();
});
