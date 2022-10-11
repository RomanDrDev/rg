const quizButtonNext = document.querySelectorAll('.quiz__next');
if (quizButtonNext.length > 0) {
   for (let i = 0; i < quizButtonNext.length; i++) {
      const el = quizButtonNext[i];
      el.addEventListener("click", function (e) {
         const currentSlide = el.parentElement.parentElement.parentElement;
         const nextStep = +currentSlide.getAttribute('data-step') + 1;
         currentSlide.classList.remove('active__step');
         const nextSlide = document.querySelector('.step-' + nextStep);
         if (nextSlide.classList.contains('quiz__result')) {
            let quizBoxElement = document.querySelector('.quiz__box');
            quizBoxElement.style.display = 'none';
         }
         nextSlide.classList.add('active__step');
      });
   }
}

const quizButtonPrev = document.querySelectorAll('.quiz__prev');
if (quizButtonPrev.length > 0) {
   for (let i = 0; i < quizButtonPrev.length; i++) {
      const el = quizButtonPrev[i];
      el.addEventListener("click", function (e) {
         const currentSlide = el.parentElement.parentElement.parentElement;
         const prevStep = +currentSlide.getAttribute('data-step') - 1;
         currentSlide.classList.remove('active__step');
         const prevSlide = document.querySelector('.step-' + prevStep);
         prevSlide.classList.add('active__step');
      });
   }
}