const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;
console.log(totalSlides);

const nextBtn = document.getElementById("carousel-button-next");

const previousBtn = document.getElementById("carousel-button-prev");

nextBtn.addEventListener("click", moveToNextSlide);
previousBtn.addEventListener("click", moveToPrevSlide);

function moveToNextSlide() {
  console.log("moving to the next slide!");
  switch (slidePosition) {
    case 0: {
      slidePosition++;
      console.log(slides[0]);
      slides[0].classList.remove("carousel-item-visible");
      slides[slidePosition].classList.add("carousel-item-visible");
      break;
    }
    case 1: {
      slidePosition++;
      slides[1].classList.remove("carousel-item-visible");
      slides[slidePosition].classList.add("carousel-item-visible");
      break;
    }
    case 2: {
      slidePosition = 0;
      slides[2].classList.remove("carousel-item-visible");
      slides[slidePosition].classList.add("carousel-item-visible");
      break;
    }

    default: {
      break;
    }
  }
}

function moveToPrevSlide() {
  switch (slidePosition) {
    case 2: {
      slidePosition--;
      slides[2].classList.remove("carousel-item-visible");
      slides[slidePosition].classList.add("carousel-item-visible");
      break;
    }
    case 1: {
      slidePosition--;
      slides[1].classList.remove("carousel-item-visible");
      slides[slidePosition].classList.add("carousel-item-visible");
      break;
    }
    case 0: {
      slidePosition = 2;
      slides[0].classList.remove("carousel-item-visible");
      slides[slidePosition].classList.add("carousel-item-visible");
      break;
    }

    default: {
      break;
    }
  }
}
