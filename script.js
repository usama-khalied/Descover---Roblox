var swiper = new Swiper(".mySwiper", {
    slidesPerView: 8,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop: true,
    autoplay:true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev" , 
    },
  });