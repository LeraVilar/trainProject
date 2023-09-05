const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView:1,
        slidesPerGroup:1,
       },
      450: {
          slidesPerView:1.5,
          slidesPerGroup: 1,
      },
      990: {
          slidesPerView: 2,
          slidesPerGroup: 2,
      },
      1050: {
          slidesPerView: 3,
          slidesPerGroup: 3,
      },
      1250: {
          slidesPerView: 4,
          slidesPerGroup: 4,
      },
    }
  });
const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".custom-next",
    },
    loop: true,
    breakpoints: {
      00: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      400: {
          slidesPerView: 2,
          slidesPerGroup: 1,
      },
      990: {
          slidesPerView: 2.5,
          slidesPerGroup: 1,
      },
      1050: {
          slidesPerView: 3,
          slidesPerGroup: 1,
      },
      1250: {
          slidesPerView: 4,
          slidesPerGroup: 1,
      },
    },


    
  });

  