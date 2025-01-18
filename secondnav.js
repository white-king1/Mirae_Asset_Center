const gap = 16;
const carousel = document.getElementById("carousel");
const content = document.getElementById("content");
const dots = document.querySelectorAll(".dot");
const items = content.children;
let width = carousel.offsetWidth;

// Update active dot based on scroll position
function updateActiveDot() {
  const index = Math.round(carousel.scrollLeft / (width + gap));
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Scroll to the corresponding item when a dot is clicked
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    carousel.scrollTo({
      left: index * (width + gap),
      behavior: "smooth"
    });
  });
});

// Update dot on scroll
carousel.addEventListener("scroll", updateActiveDot);

// Handle window resize
window.addEventListener("resize", () => {
  width = carousel.offsetWidth;
});
