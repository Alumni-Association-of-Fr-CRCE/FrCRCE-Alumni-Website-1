import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";
const banner = new Swiper(".banner", {
  speed: 500,
  spaceBetween: 30,
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".banner-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".banner-button-next",
    prevEl: ".banner-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const notablealumni = new Swiper(".notable-alumni", {
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 30,
  //mousewheel: true,
  speed: 500,
  direction: "horizontal",
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

$(window).on("resize", function () {
  if ($(window).width() < 600) {
    notablealumni.params.slidesPerView = 1;
  } else if ($(window).width() > 600 && $(window).width() < 900) {
    notablealumni.params.slidesPerView = 2;
  } else if ($(window).width() > 900 && $(window).width() < 1400) {
    notablealumni.params.slidesPerView = 3;
  } else {
    notablealumni.params.slidesPerView = 4;
  }
  notablealumni.update();
});
