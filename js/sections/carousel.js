/* ============================= */
/* CAROUSEL: featured projects */
/* ============================= */

(function () {
  const featured = [
    { tag: { es: "01 · ADAS", en: "01 · ADAS" },
      title: { es: "Detección de objetos en RPi", en: "Object detection on RPi" },
      k1: "Stack", v1: "YOLOv8 · ONNX", k2: "FPS", v2: "31" },
    { tag: { es: "02 · Investigación", en: "02 · Research" },
      title: { es: "MCPR 2026 · Springer", en: "MCPR 2026 · Springer" },
      k1: { es: "Área", en: "Area" }, v1: "Computer Vision",
      k2: { es: "Estado", en: "Status" }, v2: { es: "Mayo 2026", en: "May 2026" } },
    { tag: { es: "03 · Edge", en: "03 · Edge" },
      title: { es: "Edge Inference · Hailo-8", en: "Edge Inference · Hailo-8" },
      k1: "Stack", v1: "Embedded",
      k2: { es: "Dominio", en: "Domain" }, v2: "ADAS" },
    { tag: { es: "04 · Industria", en: "04 · Industry" },
      title: { es: "Automatización · Grupo Modelo", en: "Automation · Grupo Modelo" },
      k1: { es: "Ahorro", en: "Saved" }, v1: "5h+/wk",
      k2: { es: "Año", en: "Year" }, v2: "2023" },
    { tag: { es: "05 · Talk", en: "05 · Talk" },
      title: { es: "NEO Congress · Keynote", en: "NEO Congress · Keynote" },
      k1: { es: "Audiencia", en: "Audience" }, v1: { es: "Internacional", en: "International" },
      k2: { es: "Año", en: "Year" }, v2: "2025" },
  ];

  let carouselIdx = 0;
  let perView = 3;
  let autoplayId = null;
  const localize = (v) => typeof v === 'object' ? v[window.AppState.lang] : v;

  function calcPerView() {
    const w = window.innerWidth;
    if (w <= 600) return 1;
    if (w <= 1000) return 2;
    return 3;
  }

  function render() {
    perView = calcPerView();
    const track = document.getElementById('csTrack');
    if (!track) return;
    track.innerHTML = featured.map((c) => `
      <div class="cs-card">
        <div class="cs-tag">${localize(c.tag)}</div>
        <div class="cs-title">${localize(c.title)}</div>
        <div class="cs-meta">
          <div class="cs-meta-row"><span class="cs-meta-k">${localize(c.k1)}</span><span class="cs-meta-v">${localize(c.v1)}</span></div>
          <div class="cs-meta-row"><span class="cs-meta-k">${localize(c.k2)}</span><span class="cs-meta-v">${localize(c.v2)}</span></div>
        </div>
      </div>
    `).join('');

    const totalSlides = Math.max(1, featured.length - perView + 1);
    if (carouselIdx >= totalSlides) carouselIdx = 0;
    const dotsEl = document.getElementById('csDots');
    if (dotsEl) {
      dotsEl.innerHTML = Array.from({ length: totalSlides }, (_, i) =>
        `<button class="cd-dot ${i === carouselIdx ? 'is-active' : ''}" data-i="${i}" aria-label="Slide ${i + 1}"></button>`
      ).join('');
      dotsEl.querySelectorAll('.cd-dot').forEach((d) => {
        d.addEventListener('click', () => {
          carouselIdx = +d.dataset.i;
          updateTrack();
          resetAutoplay();
        });
      });
    }
    updateTrack();
  }

  function updateTrack() {
    const track = document.getElementById('csTrack');
    if (!track) return;
    const cardW = 100 / perView;
    track.style.transform = `translateX(calc(-${carouselIdx * cardW}% - ${carouselIdx * 24}px))`;
    document.querySelectorAll('.cd-dot').forEach((d, i) =>
      d.classList.toggle('is-active', i === carouselIdx));
  }

  function next() {
    const totalSlides = Math.max(1, featured.length - perView + 1);
    carouselIdx = (carouselIdx + 1) % totalSlides;
    updateTrack();
  }

  function prev() {
    const totalSlides = Math.max(1, featured.length - perView + 1);
    carouselIdx = (carouselIdx - 1 + totalSlides) % totalSlides;
    updateTrack();
  }

  function resetAutoplay() {
    if (autoplayId) clearInterval(autoplayId);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    autoplayId = setInterval(next, 3500);
  }

  function pauseAutoplay() {
    if (autoplayId) {
      clearInterval(autoplayId);
      autoplayId = null;
    }
  }

  window.initCarousel = function initCarousel() {
    const prevBtn = document.getElementById('csPrev');
    const nextBtn = document.getElementById('csNext');
    const section = document.getElementById('carousel');
    if (!prevBtn || !nextBtn || !section) return;

    prevBtn.addEventListener('click', () => { prev(); resetAutoplay(); });
    nextBtn.addEventListener('click', () => { next(); resetAutoplay(); });

    // Pausa autoplay en hover y focus para WCAG
    section.addEventListener('mouseenter', pauseAutoplay);
    section.addEventListener('mouseleave', resetAutoplay);
    section.addEventListener('focusin', pauseAutoplay);
    section.addEventListener('focusout', resetAutoplay);

    window.addEventListener('resize', render);
    document.addEventListener('lang:change', render);

    render();
    resetAutoplay();
  };
})();
