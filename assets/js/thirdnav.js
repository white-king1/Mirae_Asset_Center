let slideIndex = 1;
  showSlides(slideIndex);

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides1");
    const dots_new = document.getElementsByClassName("dot_b");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots_new.length; i++) {
      dots_new[i].className = dots_new[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots_new[slideIndex - 1].className += " active";
  }