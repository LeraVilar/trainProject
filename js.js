const swiper = new Swiper('.contact__team', {
    loop: true,
    slidesPerView: 4.5,
    spaceBetween: 30,
    loopAdditionalSlides: 10,
    // effect: 'coverflow',
    // watchOverflow: true,
    // coverflowEffect: {
    //   rotate: 0,
    //   slideShadows: false,
    //   depth: 500,
    //   stretch: -50,
    // },
    navigation: {
      nextEl: ".custom-next",
    },
    breakpoints: {
      0: {
        slidesPerView:2.3,
        slidesPerGroup:1,
        centeredSlides: true,
        spaceBetween: 10,
        initialSlide: 1,
        allowTouchMove: true,
       },
      450: {
          slidesPerView:2.5,
          slidesPerGroup: 1,
          centeredSlides: true,
      },
      720: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          centeredSlides: true,
      },
      990: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 20,
          allowTouchMove: false,
      },
      1250: {
          slidesPerView: 4,
          slidesPerGroup: 1,
      },
    }
  });
const swiper2 = new Swiper('.swiper2', {
    slidesPerGroup: 2,
    speed: 1000,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".custom-next",
    },
    breakpoints: {
      0: {
        slidesPerView:2,
        centeredSlides: true,
        spaceBetween: 12,
       },
      450: {
          slidesPerView:2,
      },
      720: {
          slidesPerView: 3,
      },
      990: {
          slidesPerView: 4,
      },
      1250: {
        effect: 'ease',
        freeMode: true,
        loopFillGroupWithBlank: true,
        slidesPerView: 4,
        loopAdditionalSlides: 10,
        slidesPerView: 4,
        allowTouchMove: false,

      },
    },


    
  });


let tab = function () {
  let tabNav = document.querySelectorAll('.accordeon-item'),
      tabContent = document.querySelectorAll('.accordeon-title'),
      closeBtn = document.querySelectorAll('.close'),
      base = document.querySelector('.accordeon-base'),
      tabName;
      
      tabNav.forEach(item => {
          item.addEventListener('click', selectTabNav)
          
      });
      closeBtn.forEach(btn => {
        btn.addEventListener('click', function () {
            console.log('click')
            tabContent.forEach(closeItem => {
              closeItem.classList.remove('active')
              base.classList.add('active')
            })
            tabNav.forEach(closeBlock => {
              closeBlock.classList.remove('active');
            })
        })
    })

      function selectTabNav() {
        base.classList.remove('active');
          tabNav.forEach(item => {
              item.classList.remove('active');
          });
          this.classList.add('active');
          tabName = this.getAttribute('data-tab-name');
          selectTabContent(tabName);
      }

      function selectTabContent(tabName) {
          tabContent.forEach(item => {
              item.classList.contains(tabName) ? item.classList.add('active') : item.classList.remove('active');
          })
      }
}

tab();



let wrapperImgs = document.querySelectorAll(".contact__team-items");

wrapperImgs.forEach(el => {
  el.addEventListener("click", function(e) {
    console.log(e.target.classList.contains('__active'))
    if(!el.classList.contains('__active')) {
      wrapperImgs.forEach(el => {el.classList.remove('__active')})
      el.classList.add('__active')
    }else {
      el.classList.remove('__active')
    }
  })
})



document.addEventListener("DOMContentLoaded", function () {
  const blockCrenge = document.querySelectorAll(".block__crenge")
  blockCrenge.forEach(element => {
    element.addEventListener("mouseenter", function (e) {
      blockCrenge.forEach(element => {
          element.classList.add("__small")
        // }
      })
      e.target.classList.add("__active")
    });
  });
  blockCrenge.forEach(element => {
    element.addEventListener("mouseleave", function (e) {
      blockCrenge.forEach(element => {
          element.classList.remove("__small")
      })
      e.target.classList.remove("__active")
    });
  });

});



const serviceSlides = document.querySelectorAll('.service__page-wrapper')
const serviceContent = document.querySelector('#myTabContent')

serviceSlides.forEach(e => {
  e.addEventListener('click', function() {
    serviceContent.scrollIntoView()
  })
})





const bg = document.querySelector('.main__pages-homes')
const txt = document.querySelector('.main__pages-homesWrapper')

document.addEventListener('scroll', function() {
  if(window.innerWidth < 560) {
    const sizeBG = 155 + (window.scrollY/50)
    const sizeTxt = 0 - (window.scrollY/8)
    bg.style.backgroundSize = sizeBG + '%'
    txt.style.marginBottom = sizeTxt + 'px'
  }else {
    const sizeBG = 101 + (window.scrollY/70)
    const sizeTxt = 0 - (window.scrollY/3.5)
    bg.style.backgroundSize = sizeBG + '%'
    txt.style.marginBottom = sizeTxt + 'px'
  }
})














ymaps.ready(init);
    function init(){ 
        // Creating the map.    
        var myMap = new ymaps.Map("map", {
            controls: [],
            center: [55.76, 37.64],
            zoom: 12
        });
    }
