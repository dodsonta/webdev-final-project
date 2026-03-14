window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

let slideIdx = 1;
showSlides(slideIdx);

function changeSlide(n) {
  showSlides((slideIdx += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let counter = document.getElementById("carousel-counter");
  if (n > slides.length) {
    slideIdx = 1;
  }
  if (n < 1) {
    slideIdx = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    if (i == slideIdx - 1) {
      slides[i].style.display = "block";
      slides[i].setAttribute("aria-hidden", "false");
    } else {
      slides[i].style.display = "none";
      slides[i].setAttribute("aria-hidden", "true");
    }
  }
  counter.textContent = `${slideIdx} / ${slides.length}`;
}

let carousel = document.getElementById("highlights-carousel");
carousel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    changeSlide(-1);
  } else if (event.key === "ArrowRight") {
    changeSlide(1);
  }
});
