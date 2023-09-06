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
      500: {
          slidesPerView: 3,
          slidesPerGroup: 3,
      },
      990: {
          slidesPerView: 4,
          slidesPerGroup: 4,
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