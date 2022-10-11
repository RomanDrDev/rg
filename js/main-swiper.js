// Инициализируем Swiper

let processSwiper = new Swiper('.process__slider', {
   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: 10,
         grid: {
            rows: 2,
            fill: 'row',
         },
      },
      480: {
         slidesPerView: 2,
         spaceBetween: 10,
         grid: {
            rows: 2,
            fill: 'row',
         },
      },
      575: {
         slidesPerView: 2,
         spaceBetween: 20,
         grid: {
            rows: 2,
            fill: 'row',
         },
      },
      640: {
         slidesPerView: 5,
         spaceBetween: 5,
         cssMode: true,
         grid: {
            rows: 2,
            fill: 'row',
         },
      },
      768: {
         slidesPerView: 5,
         spaceBetween: 10,
         cssMode: true,
         grid: {
            rows: 2,
            fill: 'row',
         },
      },
      1024: {
         slidesPerView: 5,
         spaceBetween: 15,
         cssMode: true,
         grid: {
            rows: 2,
            fill: 'row',
         },
      }
   },
   // grid: {
   //    rows: 2,
   //    fill: 'row',
   // },
   autoHeight: false,
   navigation: {
      nextEl: '.swiper-button-next.process__btn-next',
      prevEl: '.swiper-button-prev.process__btn-prev'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   simulateTouch: true,
   grabCursor: true,
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
});

let projectsSwiper = new Swiper('.projects__slider', {
   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: 15,
         grid: {
            rows: 2,
            fill: 'row'
         },
      },
      480: {
         slidesPerView: 2,
         spaceBetween: 20,
         grid: {
            rows: 2,
            fill: 'row'
         },
      },
      575: {
         slidesPerView: 2,
         spaceBetween: 30,
         grid: {
            rows: 2,
            fill: 'row'
         },
      },
      640: {
         slidesPerView: 3,
         spaceBetween: 10,
         cssMode: true,
         grid: {
            rows: 2,
            fill: 'row'
         },
      },
      768: {
         slidesPerView: 3,
         spaceBetween: 30,
         cssMode: true,
         grid: {
            rows: 2,
            fill: 'row'
         },
      },
      1024: {
         slidesPerView: 3,
         spaceBetween: 45,
         cssMode: true,
         grid: {
            rows: 2,
            fill: 'row'
         },
      }
   },
   // grid: {
   //    rows: 2,
   //    fill: 'row'
   // },
   autoHeight: false,
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.projects__btn-next',
      prevEl: '.swiper-button-prev.projects__btn-prev'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   simulateTouch: true,
   grabCursor: true,
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
});


let reportsSwiper = new Swiper('.reports__slider', {
   breakpoints: {
      320: {
         slidesPerView: 3,
         spaceBetween: 10
      },
      480: {
         slidesPerView: 3,
         spaceBetween: 10
      },
      575: {
         slidesPerView: 3,
         spaceBetween: 20
      },
      640: {
         slidesPerView: 6,
         spaceBetween: 5
      },
      768: {
         slidesPerView: 6,
         spaceBetween: 10
      },
      1024: {
         slidesPerView: 6,
         spaceBetween: 20
      }
   },
   watchOverflow: true,
   navigation: {
      nextEl: '.swiper-button-next.reports__btn-next',
      prevEl: '.swiper-button-prev.reports__btn-prev'
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   cssMode: true,
   simulateTouch: true,
   touchRatio: 2,
   grabCursor: true,
});


let imageSlidermaktama = new Swiper('.image-slider_maktama', {
   autoHeight: false,
   slidesPerView: 1,
   watchOverflow: true,
   preloadImages: false,
   lazy: {
      loadPrevNext: true,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
   initialSlide: 0,
   // Превью
   thumbs: {
      swiper: {
         el: '.image-mini-slider_maktama',
         slidesPerView: 6,
         spaceBetween: 8,
         breakpoints: {
            320: {
               spaceBetween: 3
            },
            480: {
               spaceBetween: 3
            },
            575: {
               spaceBetween: 3
            },
            640: {
               spaceBetween: 4
            },
            768: {
               spaceBetween: 5
            },
         }
      }
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   simulateTouch: true,
   grabCursor: true,
   cssMode: true,
});

let imageSliderbulgar = new Swiper('.image-slider_bulgar', {
   autoHeight: false,
   slidesPerView: 1,
   watchOverflow: true,
   preloadImages: false,
   lazy: {
      loadPrevNext: true,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
   initialSlide: 0,
   // Превью
   thumbs: {
      swiper: {
         el: '.image-mini-slider_bulgar',
         slidesPerView: 6,
         spaceBetween: 8,
         breakpoints: {
            320: {
               spaceBetween: 3
            },
            480: {
               spaceBetween: 3
            },
            575: {
               spaceBetween: 3
            },
            640: {
               spaceBetween: 4
            },
            768: {
               spaceBetween: 5
            },
         }
      }
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   simulateTouch: true,
   grabCursor: true,
   cssMode: true,
});

let imageSlideralma = new Swiper('.image-slider_alma', {
   autoHeight: false,
   slidesPerView: 1,
   watchOverflow: true,
   preloadImages: false,
   lazy: {
      loadPrevNext: true,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
   initialSlide: 0,
   // Превью
   thumbs: {
      swiper: {
         el: '.image-mini-slider_alma',
         slidesPerView: 6,
         spaceBetween: 8,
         breakpoints: {
            320: {
               spaceBetween: 3
            },
            480: {
               spaceBetween: 3
            },
            575: {
               spaceBetween: 3
            },
            640: {
               spaceBetween: 4
            },
            768: {
               spaceBetween: 5
            },
         }
      }
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   simulateTouch: true,
   grabCursor: true,
   cssMode: true,
});

let imageSliderurslana = new Swiper('.image-slider_urslana', {
   autoHeight: false,
   slidesPerView: 1,
   watchOverflow: true,
   preloadImages: false,
   lazy: {
      loadPrevNext: true,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
   initialSlide: 0,
   // Превью
   thumbs: {
      swiper: {
         el: '.image-mini-slider_urslana',
         slidesPerView: 6,
         spaceBetween: 8,
         breakpoints: {
            320: {
               spaceBetween: 3
            },
            480: {
               spaceBetween: 3
            },
            575: {
               spaceBetween: 3
            },
            640: {
               spaceBetween: 4
            },
            768: {
               spaceBetween: 5
            },
         }
      }
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   simulateTouch: true,
   grabCursor: true,
   cssMode: true,
});


let imageSlidershugan = new Swiper('.image-slider_shugan', {
   autoHeight: false,
   slidesPerView: 1,
   watchOverflow: true,
   preloadImages: false,
   lazy: {
      loadPrevNext: true,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
   initialSlide: 0,
   // Превью
   thumbs: {
      swiper: {
         el: '.image-mini-slider_shugan',
         slidesPerView: 6,
         spaceBetween: 8,
         breakpoints: {
            320: {
               spaceBetween: 3
            },
            480: {
               spaceBetween: 3
            },
            575: {
               spaceBetween: 3
            },
            640: {
               spaceBetween: 4
            },
            768: {
               spaceBetween: 5
            },
         }
      }
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   simulateTouch: true,
   grabCursor: true,
   cssMode: true,
});

let imageSliderfiesta = new Swiper('.image-slider_fiesta', {
   autoHeight: false,
   slidesPerView: 1,
   watchOverflow: true,
   preloadImages: false,
   lazy: {
      loadPrevNext: true,
   },
   watchSlidesProgress: true,
   watchSlidesVisibility: true,
   initialSlide: 0,
   // Превью
   thumbs: {
      swiper: {
         el: '.image-mini-slider_fiesta',
         slidesPerView: 6,
         spaceBetween: 8,
         breakpoints: {
            320: {
               spaceBetween: 3
            },
            480: {
               spaceBetween: 3
            },
            575: {
               spaceBetween: 3
            },
            640: {
               spaceBetween: 4
            },
            768: {
               spaceBetween: 5
            },
         }
      }
   },
   keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
   },
   mousewheel: {
      sensitivity: 1,
   },
   simulateTouch: true,
   grabCursor: true,
   cssMode: true,
});
