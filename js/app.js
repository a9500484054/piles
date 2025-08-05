document.addEventListener('DOMContentLoaded', function() {

  // // Показать лоадер
  // document.getElementById('loader').style.display = 'flex';

  // Скрыть лоадер после загрузки
  window.addEventListener('load', function() {
    document.querySelector('.loader').style.display = 'none';
  });


  const burger = document.querySelector('.menu-burger');
  const menu = document.querySelector('.header__menu');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  document.body.appendChild(overlay);

  burger.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });

  overlay.addEventListener('click', function() {
    burger.classList.remove('active');
    menu.classList.remove('active');
    this.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });

  // Закрытие меню при клике на ссылку (для мобильной версии)
  const menuLinks = document.querySelectorAll('.header__menu-link');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 992) {
        burger.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
    });
  });

  // Добавляем класс no-scroll в CSS
  const style = document.createElement('style');
  style.innerHTML = `
    .no-scroll {
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);



  // Initialize Swiper
  const swiper = new Swiper('.services-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    }
  });

  // Popup functionality
  const serviceCards = document.querySelectorAll('.service-card');
  const popups = document.querySelectorAll('.popup');
  const closeButtons = document.querySelectorAll('.popup__close');
  
  serviceCards.forEach(card => {
    card.addEventListener('click', function() {
      const popupId = this.getAttribute('data-popup');
      const popup = document.getElementById(`popup-${popupId}`);
      popup.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });
  
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      this.closest('.popup').classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close popup when clicking outside content
  popups.forEach(popup => {
    popup.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });


  const reviewsSwiper = new Swiper('.reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }
  });
  
 const portfolioSwiper = new Swiper('.portfolio-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

});


