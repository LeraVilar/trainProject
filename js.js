const swiper = new Swiper('.contact__team', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    // allowTouchMove: false,
    watchOverflow: true,
    breakpoints: {
      0: {
        slidesPerView:2.3,
        slidesPerGroup:1,
        centeredSlides: true,
       },
      450: {
          slidesPerView:2.5,
          slidesPerGroup: 1,
      },
      720: {
          slidesPerView: 3,
          slidesPerGroup: 1,
      },
      990: {
          slidesPerView: 4,
          slidesPerGroup: 1,
      },
      1250: {
          slidesPerView: 4,
          slidesPerGroup: 1,
      },
    }
  });
const swiper2 = new Swiper('.swiper2', {
    slidesPerGroup: 1,
    spaceBetween: 30,
    allowTouchMove: false,
    navigation: {
      nextEl: ".custom-next",
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView:2.5,
       },
      450: {
          slidesPerView:2.5,
      },
      720: {
          slidesPerView: 3,
      },
      990: {
          slidesPerView: 4,
      },
      1250: {
          slidesPerView: 4,
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



let wrapperImgs = document.querySelectorAll(".contact__team-wrapperImg");

wrapperImgs.forEach(function(wrapperImg) {
  wrapperImg.addEventListener("click", function() {
    // Удаляем классы "active" у всех "contact__team-item_img" и "contact__team-text" во всех "contact__team-items"
    let items = document.querySelectorAll(".contact__team-item_img, .contact__team-text");
    items.forEach(function(item) {
      item.classList.remove("actives");
    });

    // Получаем родительский блок "contact__team-items" для текущего "contact__team-wrapperImg"
    let parent = wrapperImg.closest(".contact__team-items");

    // Добавляем класс "active" к "contact__team-item_img" и "contact__team-text" внутри текущего "contact__team-items"
    let itemImg = parent.querySelector(".contact__team-item_img");
    let itemText = parent.querySelector(".contact__team-text");
    if (itemImg && itemText) {
      itemImg.classList.add("actives");
      itemText.classList.add("actives");
    }
  });
});





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






