/* ============================= */
/* I18N: diccionario ES/EN + aplicar al DOM + persistencia */
/* ============================= */

window.I18N = {
  topRole:    { es: "Edge AI · Computer Vision", en: "Edge AI · Computer Vision" },
  navProjects:{ es: "Proyectos", en: "Projects" },
  navResearch:{ es: "Investigación", en: "Research" },
  navAbout:   { es: "Sobre mí", en: "About" },
  navContact: { es: "Contacto", en: "Contact" },

  /* HERO */
  eyebrow:    { es: "Disponible · Internship Q3 2026", en: "Available · Internship Q3 2026" },
  hl1:        { es: "Sistemas de IA", en: "AI systems" },
  hl2:        { es: 'al filo del <span class="hl-accent">hardware.</span>',
                en: 'at the edge of <span class="hl-accent">hardware.</span>' },
  heroSub:    { es: "Diseño y despliego visión artificial bajo restricciones reales de hardware.",
                en: "I design and deploy computer vision under real hardware constraints." },
  ctaProjects:{ es: "Ver proyectos", en: "View projects" },
  ctaCV:      { es: "Descargar CV", en: "Download CV" },
  ctaEmail:   { es: "Contacto", en: "Contact" },
  demoStatus: { es: "▶ inference · onnx · int8", en: "▶ inference · onnx · int8" },
  m1:         { es: "papers aceptados<br>2025–26", en: "papers accepted<br>2025–26" },
  m2:         { es: "trabajo manual / sem<br>ahorrado · ABInBev", en: "manual work / wk<br>saved · ABInBev" },
  m3:         { es: "edge target<br>principal", en: "primary edge<br>target" },
  m4:         { es: "años · Samsung<br>Innovation Campus", en: "years · Samsung<br>Innovation Campus" },

  /* CARRUSEL */
  cstag:      { es: "Proyectos destacados", en: "Featured projects" },
  cstitle:    { es: "Sistemas en producción.", en: "Systems in production." },

  /* CTA GRID (landing) */
  ctagTag:    { es: "Explorar", en: "Explore" },
  ctagTitle:  { es: "Cuatro caminos. Elige el que te interesa.", en: "Four paths. Pick the one you care about." },
  cta1Title:  { es: "Proyectos", en: "Projects" },
  cta1Desc:   { es: "Sistemas embebidos en producción con métricas reales.",
                en: "Embedded systems in production with real metrics." },
  cta2Title:  { es: "Investigación", en: "Research" },
  cta2Desc:   { es: "Papers, talks y trabajo académico en CV embebida.",
                en: "Papers, talks and academic work in embedded CV." },
  cta3Title:  { es: "Sobre mí", en: "About me" },
  cta3Desc:   { es: "Quién soy, qué stack uso, cómo trabajo.",
                en: "Who I am, what stack I use, how I work." },
  cta4Title:  { es: "Contacto", en: "Contact" },
  cta4Desc:   { es: "Disponible para internships y colaboraciones.",
                en: "Open for internships and collaborations." },

  /* PROJECTS PAGE */
  s1n:        { es: "01 / Proyectos", en: "01 / Projects" },
  s1t:        { es: "Sistemas embebidos que ven, deciden y reaccionan.",
                en: "Embedded systems that see, decide, and react." },
  s1l:        { es: "Cada proyecto resuelve un problema operativo real bajo restricciones de hardware. Selecciona uno para ver el detalle.",
                en: "Each project solves a real operational problem under hardware constraints. Select one to see the detail." },
  termHint:   { es: "// Selecciona un proyecto para ver el detalle ↓",
                en: "// Select a project to view details ↓" },

  /* ABOUT PAGE */
  abt:        { es: "Sobre mí", en: "About me" },
  abr:        { es: "Edge AI & Computer Vision Engineer", en: "Edge AI & Computer Vision Engineer" },
  abp1:       { es: "Diseño y despliego sistemas de visión artificial que corren en hardware embebido real — no en servidores en la nube. Mi trabajo se mide en milisegundos de latencia y frames por segundo, no en demos de Colab.",
                en: "I design and deploy computer vision systems that run on real embedded hardware — not on cloud servers. My work is measured in milliseconds of latency and frames per second, not in Colab demos." },
  abp2:       { es: "Fuera del laboratorio soy <em>músico</em>. Esa dualidad no es accidental — la misma precisión que aplico al diseño de pipelines de inferencia la aplico cuando subo a un escenario. Entro a un cuarto y algo cambia.",
                en: "Outside the lab I'm a <em>musician</em>. That duality isn't accidental — the same precision I apply to inference pipeline design I apply when I step on stage. I walk into a room and something shifts." },
  sc1:        { es: "Stack principal", en: "Primary stack" },
  sc2:        { es: "Investigación publicada", en: "Published research" },
  sc3:        { es: "Hardware de despliegue", en: "Deployment hardware" },
  sc4:        { es: "Ingeniería Electrónica", en: "Electronics Engineering" },
  pgAboutNum: { es: "03 / Sobre mí", en: "03 / About" },
  pgAboutTitle:{es: "Ingeniero electrónico, músico, builder.", en: "Electronics engineer, musician, builder." },
  pgAboutLede:{ es: "Una mirada al perfil detrás del código.",
                en: "A look at the person behind the code." },

  /* RESEARCH PAGE */
  s2n:        { es: "02 / Investigación", en: "02 / Research" },
  s2t:        { es: "Comunicar lo que se construye.", en: "Communicating what gets built." },
  s2l:        { es: "Publicaciones y presentaciones donde el trabajo técnico se traduce a audiencias diversas — académicas e industriales.",
                en: "Publications and talks where technical work translates to diverse audiences — academic and industry." },

  /* CONTACT PAGE */
  cs1:        { es: "¿Tienes un sistema", en: "Got a system" },
  cs2:        { es: "que tiene que ver, decidir o reaccionar?", en: "that needs to see, decide, or react?" },
  csub:       { es: "Buscando internship Q3 2026. Disponible para proyectos de Edge AI, Computer Vision, sistemas distribuidos y automatización. Comunicación técnica en español e inglés.",
                en: "Seeking Q3 2026 internship. Available for Edge AI, Computer Vision, distributed systems and automation projects. Technical communication in Spanish and English." },
  pgContactNum:{es: "04 / Contacto", en: "04 / Contact" },
  pgContactTitle:{es: "Hablemos.", en: "Let's talk." },
  pgContactLede:{es: "La forma más rápida es por email. También funciono bien en LinkedIn.",
                 en: "Fastest way is email. LinkedIn works too." },

  /* BREADCRUMB */
  crumbHome:  { es: "Inicio", en: "Home" },
};

/* ----- estado ----- */
const STORAGE_KEY = 'rlm-lang';
const initialLang = (() => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch (_) {}
  return 'es';
})();

window.AppState = window.AppState || { lang: initialLang };

/* ----- helpers ----- */
window.applyLang = function applyLang() {
  const lang = window.AppState.lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const k = el.getAttribute('data-i18n');
    if (window.I18N[k]) el.innerHTML = window.I18N[k][lang];
  });
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'es' ? 'EN' : 'ES';
};

window.initLang = function initLang() {
  const toggle = document.getElementById('langToggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    window.AppState.lang = window.AppState.lang === 'es' ? 'en' : 'es';
    try { localStorage.setItem(STORAGE_KEY, window.AppState.lang); } catch (_) {}
    window.applyLang();
    document.dispatchEvent(new CustomEvent('lang:change'));
  });
  window.applyLang();
};
