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

function currSlide(n) {
  showSlides((slideIdx = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIdx = 1;
  }
  if (n < 1) {
    slideIdx = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIdx - 1].style.display = "block";
}
