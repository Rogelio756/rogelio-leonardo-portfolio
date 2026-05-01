/* ============================= */
/* PROJECTS: terminal interactivo + detalle */
/* ============================= */

(function () {
  let currentProj = 0;

  function render() {
    const D = window.PORTFOLIO_DATA;
    const lang = window.AppState.lang;
    const list = document.getElementById('termList');
    const detail = document.getElementById('projDetail');
    if (!D || !list || !detail) return;

    list.innerHTML = D.projects.map((p, i) => `
      <button class="terminal-line ${i === currentProj ? 'is-active' : ''}" data-i="${i}">
        <span class="t-prompt">$</span>
        <span class="t-cmd">${p.cmd}</span>
        <span class="t-arrow">${i === currentProj ? '▸' : ''}</span>
      </button>
    `).join('') + `<div class="t-cursor"><span class="t-prompt">$</span><span class="t-blink">_</span></div>`;

    list.querySelectorAll('.terminal-line').forEach((b) => {
      b.addEventListener('click', () => {
        currentProj = +b.dataset.i;
        render();
      });
    });

    const p = D.projects[currentProj];
    detail.innerHTML = `
      <div class="td-head">
        <div class="td-name">${p.name}</div>
        <div class="td-year">${p.year}</div>
      </div>
      <div class="td-tagline">${p.tagline[lang]}</div>
      <p class="td-body">${p.body[lang]}</p>
      <div class="td-stack">${p.stack.map((s) => `<span class="chip">${s}</span>`).join('')}</div>
      <div class="td-metrics">${p.metrics.map((m) => `<div class="td-metric"><div class="td-metric-v">${m.v}</div><div class="td-metric-k">${m.k}</div></div>`).join('')}</div>
      ${p.video ? `
        <div class="td-video">
          <div class="td-video-chrome">
            <span>demo · ${p.id}.mp4</span>
            <span class="td-video-tag">live recording</span>
          </div>
          <div class="td-video-frame">
            <iframe src="${p.video}"
                    title="${p.name} demo"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
          </div>
        </div>` : ''}
      <div class="td-client"><span class="td-client-k">CTX</span><span>${p.client}</span></div>
    `;
  }

  window.initProjects = function initProjects() {
    if (!document.getElementById('termList')) return;
    document.addEventListener('lang:change', render);
    render();
  };
})();
