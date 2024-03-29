var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    slidesPerGroup: 1, 
    loop: true,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });