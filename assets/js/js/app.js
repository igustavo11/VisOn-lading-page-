const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 50,
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    slidesPerGroup: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 2,
      },
    }
  });