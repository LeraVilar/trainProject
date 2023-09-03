const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
  });
const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: ".custom-next",
    },
    loop: true,
  });

// let parent = document.querySelector('.container');
// let menuItem = parent.querySelectorAll('.menu__item');

// parent.addEventListener('click', (event) => {
//   // Отлавливаем элемент в родители на который мы нажали
//   let target = event.target;
  
//   // Проверяем тот ли это элемент который нам нужен
//   if(target.classList.contains('menu__item')) {
//     for(let i = 0; i < menuItem.length; i++) {
//       // Убираем у других
//       menuItem[i].classList.remove('active');
//     }
//     // Добавляем тому на который нажали
//     target.classList.add('active');
//   }
  
// });

// parent.addEventListener('click', (event) => {
//   let target = event.target;
//   if(document.getElementsByClassName('menu__item1 active').length > 0) {
//     document.getElementsByClassName('menu__content1')[0].classList.add('active');
//   }
//   if(document.getElementsByClassName('menu__item1 active').length < 1) {
//     document.getElementsByClassName('menu__content1')[0].classList.remove('active');
//   }
// });
// parent.addEventListener('click', (event) => {
//   let target = event.target;
//   if(document.getElementsByClassName('menu__item2 active').length > 0) {
//     document.getElementsByClassName('menu__content2')[0].classList.add('active');
//   }
//   if(document.getElementsByClassName('menu__item2 active').length < 1) {
//     document.getElementsByClassName('menu__content2')[0].classList.remove('active');
//   }
// });
// parent.addEventListener('click', (event) => {
//   let target = event.target;
//   if(document.getElementsByClassName('menu__item3 active').length > 0) {
//     document.getElementsByClassName('menu__content3')[0].classList.add('active');
//   }
//   if(document.getElementsByClassName('menu__item3 active').length < 1) {
//     document.getElementsByClassName('menu__content3')[0].classList.remove('active');
//   }
// });
// parent.addEventListener('click', (event) => {
//   let target = event.target;
//   if(document.getElementsByClassName('menu__item4 active').length > 0) {
//     document.getElementsByClassName('menu__content4')[0].classList.add('active');
//   }
//   if(document.getElementsByClassName('menu__item4 active').length < 1) {
//     document.getElementsByClassName('menu__content4')[0].classList.remove('active');
//   }
// });
