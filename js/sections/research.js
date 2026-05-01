/* ============================= */
/* RESEARCH: lista de papers/talks */
/* ============================= */

(function () {
  function render() {
    const D = window.PORTFOLIO_DATA;
    const lang = window.AppState.lang;
    const list = document.getElementById('researchList');
    if (!D || !list) return;

    list.innerHTML = D.research.map((r) => `
      <div class="research-item">
        <div class="r-type">${r.type}</div>
        <div class="r-year">${r.year}</div>
        <div class="r-main">
          <div class="r-title">${r.title[lang]}</div>
          <div class="r-meta">${r.authors}</div>
        </div>
        <div class="r-venue">${r.venue}</div>
      </div>
    `).join('');
  }

  window.initResearch = function initResearch() {
    if (!document.getElementById('researchList')) return;
    document.addEventListener('lang:change', render);
    render();
  };
})();
