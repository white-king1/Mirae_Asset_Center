const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-icon");

// Toggle the menu on checkbox change
menuToggle.addEventListener("change", () => {
  navLinks.classList.toggle("show");
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !navLinks.contains(e.target) &&
    !menuIcon.contains(e.target) &&
    e.target !== menuToggle
  ) {
    navLinks.classList.remove("show");
    menuToggle.checked = false;
  }
});