"use strict"

// скролл тз верхнего меню до нужного места на странице 
// const scrolls = document.querySelectorAll('.menu__item, .started__button-quiz, .gift__button');
// const speed = 800;

// scrolls.forEach(scroll => {
//    scroll.addEventListener("click", function (e) {
//       e.preventDefault();
//       var href = this.data('href');
//       document.querySelector('html, body').animate({
//          scrollTop: ($(`.${href}`).first().offset().top - 100)
//       }, 500);
//    });
// })


// попапы
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let i = 0; i < popupLinks.length; i++) {
      const popupLink = popupLinks[i];
      popupLink.addEventListener("click", function (e) {
         const popupName = popupLink.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
   for (let i = 0; i < popupCloseIcon.length; i++) {
      const el = popupCloseIcon[i];
      el.addEventListener("click", function (e) {
         popupClose(el.closest('.popup'));
         e.preventDefault();
      });
   }
}

function popupOpen(curentPopup) {
   if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
         popupClose(popupActive, false);
      } else {
         bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener("click", function (e) {
         if (!e.target.closest('.popup__content')) {
            popupClose(e.target.closest('.popup'));
         }
      });
   }
}

// при попапах внутри других попапов
function popupClose(popupActive, doUnlock = true) {
   if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
         bodyUnlock();
      }
   }
}

// скрываем скролл, добавляя паддинг body и объектам с position: fixed
function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

   if (lockPadding.length > 0) {
      for (let i = 0; i < lockPadding.length; i++) {
         const el = lockPadding[i];
         el.getElementsByClassName.paddingRight = lockPaddingValue;
      }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

// открываем скролл и убираем паддинг у body и объектов с position: fixed
function bodyUnlock() {
   setTimeout(function () {
      for (let i = 0; i < lockPadding.length; i++) {
         const el = lockPadding[i];
         el.style.paddingRight = '0px';
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

// закрываем попап клавишей Esc
document.addEventListener("keydown", function (e) {
   if (e.key === "Escape") {
      const popupActive = this.document.querySelector('.popup.open');
      popupClose(popupActive);
   }
});

(function () {
   // проверяем поддержку 
   if (!Element.prototype.closest) {
      Element.prototype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
         }
         return null;
      };
   }
})();
(function () {
   // проверяем поддержку 
   if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.mozmatchesSelector ||
         Element.prototype.matchesSelector;
   }
})();

