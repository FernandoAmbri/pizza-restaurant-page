let indexSlide = 1;

showSlide(indexSlide);

function nextSlide(index) {
  showSlide((indexSlide += index));
}

function currentSlide(index) {
  showSlide((indexSlide = index));
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (index < 1) {
    indexSlide = slides.length;
  } else if (index > 6) {
    indexSlide = 1;
  }
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  slides[indexSlide - 1].style.display = "block";
  dots[indexSlide - 1].classList.add("active");
}
