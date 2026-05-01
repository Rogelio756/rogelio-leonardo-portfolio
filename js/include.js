/* ============================= */
/* INCLUDE: carga partials por <div data-include="..."> */
/* ============================= */

(async function includePartials() {
  const slots = document.querySelectorAll('[data-include]');

  await Promise.all([...slots].map(async (slot) => {
    const url = slot.dataset.include;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      // Usar un wrapper temporal para parsear y reemplazar el slot
      const tpl = document.createElement('template');
      tpl.innerHTML = html.trim();
      slot.replaceWith(tpl.content);
    } catch (err) {
      console.error('[include]', url, err);
      slot.outerHTML = `<!-- include failed: ${url} -->`;
    }
  }));

  // Notificar al resto de la app que ya está listo el DOM
  document.dispatchEvent(new CustomEvent('partials:ready'));
})();
