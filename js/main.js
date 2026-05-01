/* ============================= */
/* MAIN: bootstrap del sitio */
/* Espera a que los partials estén montados, luego inicia las secciones */
/* ============================= */

function markActiveNav() {
  const current = document.body.dataset.page;
  if (!current) return;
  document.querySelectorAll('.tb-nav a[data-nav]').forEach((a) => {
    if (a.dataset.nav === current) a.setAttribute('aria-current', 'page');
  });
}

document.addEventListener('partials:ready', () => {
  // Marcar la página actual en la nav
  markActiveNav();

  // Orden importa: idioma primero (aplica i18n al DOM ya montado),
  // después las secciones que sólo existen en ciertas páginas.
  if (window.initLang)     window.initLang();
  if (window.initCarousel) window.initCarousel();
  if (window.initProjects) window.initProjects();
  if (window.initResearch) window.initResearch();
  if (window.initReveal)   window.initReveal();
});
