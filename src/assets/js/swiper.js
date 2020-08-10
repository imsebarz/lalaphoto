const createswiper = () => {
  const swiper = new Swiper(".swiper-container", {
    effect: "flip",
    grabCursor: false,
    loop: true,
    zoom: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
