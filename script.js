(function () {
  'use strict';

  var cards = document.querySelectorAll('.showcase__card');

  if ('IntersectionObserver' in window && cards.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' }
    );
    cards.forEach(function (el) { observer.observe(el); });
  } else {
    cards.forEach(function (el) { el.classList.add('visible'); });
  }

  var heroContent = document.querySelector('.hero__content');
  if (heroContent) {
    window.addEventListener('scroll', function () {
      var scrolled = window.scrollY;
      if (scrolled < window.innerHeight) {
        heroContent.style.transform = 'translateY(' + (scrolled * 0.15) + 'px)';
        heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
      }
    }, { passive: true });
  }
})();
