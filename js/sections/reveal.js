/* ============================= */
/* REVEAL: animación on scroll con IntersectionObserver */
/* ============================= */

(function () {
  window.initReveal = function initReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // No anima nada — todas las secciones quedan visibles
      document.querySelectorAll('section').forEach((s) => s.classList.add('is-in'));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach((s) => {
      s.classList.add('reveal');
      io.observe(s);
    });
  };
})();
