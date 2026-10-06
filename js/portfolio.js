/**
 * Portfolio Engine - Rogelio Leonardo Méndez Macías (Roy)
 * Edge AI & Embedded Systems Portfolio
 * Handles: Bilingual localization (EN/ES), Click-to-play Video Embeds, 
 * Citation Copying, Mobile Navigation, CV Modal.
 */

(function() {
'use strict';

// I18N_DATA and Citations are sourced from js/content.js (Single Source of Truth)
const I18N_DATA = window.I18N_DATA || {};
const BIBTEX_CITATION = window.BIBTEX_CITATION || '';
const PLAIN_CITATION = window.PLAIN_CITATION || '';

let currentLang = 'en';

function setLanguage(lang) {
  if (!I18N_DATA[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('preferred_lang', lang);

  // Update button classes
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update text nodes with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (I18N_DATA[lang][key] !== undefined) {
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = I18N_DATA[lang][key];
      } else {
        el.textContent = I18N_DATA[lang][key];
      }
    }
  });

  // Update translated attributes (screen-reader labels, image alt text, tooltips)
  const I18N_ATTRS = { 'data-i18n-aria': 'aria-label', 'data-i18n-alt': 'alt', 'data-i18n-title': 'title' };
  Object.entries(I18N_ATTRS).forEach(([dataAttr, attr]) => {
    document.querySelectorAll(`[${dataAttr}]`).forEach(el => {
      const value = I18N_DATA[lang][el.getAttribute(dataAttr)];
      if (value !== undefined) el.setAttribute(attr, value);
    });
  });

  // Update dynamic meta tags
  if (lang === 'es') {
    document.title = "Rogelio Leonardo Mendez Macias · Ingeniero en Visión Computacional Embebida y Edge AI";
  } else {
    document.title = "Rogelio Leonardo Mendez Macias · Embedded Computer Vision & Edge AI Engineer";
  }
}

// Click-to-Play Video Loader
function setupVideoEmbeds() {
  const videoContainers = document.querySelectorAll('.video-container[data-video-id]');
  videoContainers.forEach(container => {
    const videoId = container.getAttribute('data-video-id');
    const thumb = container.querySelector('.video-thumbnail');

    if (thumb && videoId) {
      // Set high quality YouTube thumbnail
      thumb.style.backgroundImage = `url('https://img.youtube.com/vi/${videoId}/hqdefault.jpg')`;

      const playVideo = () => {
        container.innerHTML = `<iframe 
          src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1" 
          title="YouTube Video Player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen>
        </iframe>`;
      };

      thumb.addEventListener('click', playVideo);
      thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          playVideo();
        }
      });
    }
  });
}

// Toast helper
function showToast(text) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Citation copy helper
function setupCitationCopy() {
  const copyBtn = document.getElementById('btn-copy-citation');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(PLAIN_CITATION).then(() => {
        showToast(I18N_DATA[currentLang].toast_copied || "Citation copied!");
      }).catch(() => {
        const temp = document.createElement('textarea');
        temp.value = PLAIN_CITATION;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        showToast(I18N_DATA[currentLang].toast_copied || "Citation copied!");
      });
    });
  }

  const copyBibtexBtn = document.getElementById('btn-copy-bibtex');
  if (copyBibtexBtn) {
    copyBibtexBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(BIBTEX_CITATION).then(() => {
        showToast("BibTeX copied to clipboard!");
      });
    });
  }
}

// CV Modal Handlers
function setupModals() {
  const modalOverlay = document.getElementById('cv-modal');
  const openButtons = document.querySelectorAll('.trigger-cv-modal, a[href="#cv"]');
  const closeButtons = document.querySelectorAll('.close-modal');

  const openModal = (e) => {
    if (e) e.preventDefault();
    if (modalOverlay) modalOverlay.classList.add('open');
  };

  const closeModal = () => {
    if (modalOverlay) modalOverlay.classList.remove('open');
  };

  openButtons.forEach(btn => btn.addEventListener('click', openModal));
  closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('open')) {
      closeModal();
    }
  });
}

// Mobile Menu Navigation
function setupMobileNav() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }
}

// Email copy helper
function setupEmailCopy() {
  const copyEmailBtn = document.getElementById('btn-copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = "rogelioleonardo18@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast(currentLang === 'es' ? "¡Correo copiado: rogelioleonardo18@gmail.com!" : "Copied email: rogelioleonardo18@gmail.com!");
      });
    });
  }
}

// Projects Compact Deck & Spotlight Modal Controller
function setupProjectsCarousel() {
  const miniCards = document.querySelectorAll('.project-mini-card');
  const overlay = document.getElementById('project-detail-overlay');
  const modalBody = document.getElementById('project-modal-body');
  const closeBtn = document.getElementById('project-detail-close-btn');
  const backdrop = document.getElementById('project-detail-backdrop');
  const fullStore = document.getElementById('project-full-store');
  const prevBtn = document.getElementById('carousel-prev-btn');
  const nextBtn = document.getElementById('carousel-next-btn');
  const currentIndexEl = document.getElementById('carousel-current-index');
  const totalCountEl = document.getElementById('carousel-total-count');

  if (!miniCards.length || !overlay || !modalBody || !fullStore) return;

  let currentActiveIndex = 0;
  const totalCards = miniCards.length;

  if (totalCountEl) {
    totalCountEl.textContent = String(totalCards).padStart(2, '0');
  }

  function openProjectModal(index) {
    if (index < 0) index = 0;
    if (index >= totalCards) index = totalCards - 1;
    currentActiveIndex = index;

    if (currentIndexEl) {
      currentIndexEl.textContent = String(currentActiveIndex + 1).padStart(2, '0');
    }

    // Get project card template from store
    const fullCard = document.getElementById(`project-full-${index}`);
    if (!fullCard) return;

    // Clone and inject into modal body
    modalBody.innerHTML = '';
    const clonedCard = fullCard.cloneNode(true);
    clonedCard.style.display = 'block';
    modalBody.appendChild(clonedCard);

    // Re-initialize video handlers inside the cloned card
    setupVideoEmbeds();

    // Re-apply current language translations to cloned elements
    if (I18N_DATA[currentLang]) {
      clonedCard.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N_DATA[currentLang][key] !== undefined) {
          if (el.getAttribute('data-i18n-html') === 'true') {
            el.innerHTML = I18N_DATA[currentLang][key];
          } else {
            el.textContent = I18N_DATA[currentLang][key];
          }
        }
      });
    }

    // Show overlay with transition
    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Update active state in mini cards
    miniCards.forEach((c, idx) => {
      if (idx === index) {
        c.style.borderColor = 'var(--accent-cyan)';
      } else {
        c.style.borderColor = '';
      }
    });

    if (prevBtn) prevBtn.disabled = currentActiveIndex === 0;
    if (nextBtn) nextBtn.disabled = currentActiveIndex === totalCards - 1;
  }

  function closeProjectModal() {
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalBody.innerHTML = '';
  }

  // Click on Mini Cards
  miniCards.forEach((card, idx) => {
    card.addEventListener('click', () => {
      openProjectModal(idx);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProjectModal(idx);
      }
    });
  });

  // Close triggers
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }
  if (backdrop) {
    backdrop.addEventListener('click', closeProjectModal);
  }

  // Prev / Next Navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (overlay.classList.contains('active')) {
        openProjectModal(currentActiveIndex - 1);
      } else {
        openProjectModal(0);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (overlay.classList.contains('active')) {
        openProjectModal(currentActiveIndex + 1);
      } else {
        openProjectModal(0);
      }
    });
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowLeft' && currentActiveIndex > 0) {
      openProjectModal(currentActiveIndex - 1);
    } else if (e.key === 'ArrowRight' && currentActiveIndex < totalCards - 1) {
      openProjectModal(currentActiveIndex + 1);
    }
  });
}

// Scroll spy for active navigation item
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}

// ==========================================================================
// ANIMATED PCB CIRCUIT BOARD BACKGROUND (Canvas)
// Tron Legacy-style cyan-blue glow (#00D9FF) with blue traces (#165C8C)
// ==========================================================================
function setupCircuitBackground() {
  const canvas = document.getElementById('circuit-bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrameId = null;
  let lastTime = 0;
  let isReducedMotion = false;

  // Circuit Data structures
  let traces = [];
  let particles = [];

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  isReducedMotion = mediaQuery.matches;

  // Reduced motion keeps the effect alive but calmer: slower pulses, half of them, no flicker.
  // Many Windows laptops and phones report this preference by default (battery saver,
  // "Animation effects" off), so freezing the canvas would hide the effect for most visitors.
  const REDUCED_SPEED = 0.4;

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', (e) => {
      isReducedMotion = e.matches;
    });
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    initCircuitNetwork();
  }

  function initCircuitNetwork() {
    traces = [];
    particles = [];

    // Density of channels based on width
    const isMobile = width < 768;
    const channelStep = isMobile ? 55 : 68;
    const numChannels = Math.floor(width / channelStep);

    // Generate PCB traces
    for (let c = 0; c <= numChannels; c++) {
      const baseChannelX = c * channelStep + (channelStep * 0.2);
      const traceType = Math.random();

      if (traceType > 0.12) { // 88% of channels get traces
        const isBundle = Math.random() < 0.4 && !isMobile;
        const bundleCount = isBundle ? 2 : 1;
        const bundleSpacing = 14;

        const startY = Math.random() < 0.35 ? 0 : Math.random() * (height * 0.28);
        const totalHeight = height - startY;

        // Generate right-angle polyline points (Tron Manhattan geometry)
        const numBends = 2 + Math.floor(Math.random() * 4); // 2 to 5 right-angle jogs
        const bendYInterval = totalHeight / (numBends + 1);

        const jogs = [];
        let currOffset = 0;
        for (let b = 1; b <= numBends; b++) {
          const bendY = startY + b * bendYInterval + (Math.random() - 0.5) * (bendYInterval * 0.45);
          const jogDistance = (Math.random() < 0.5 ? 1 : -1) * (18 + Math.floor(Math.random() * 3) * 18);
          currOffset += jogDistance;
          jogs.push({ y: bendY, offset: currOffset });
        }
        const endY = startY + totalHeight + 40;

        for (let bIdx = 0; bIdx < bundleCount; bIdx++) {
          const offsetX = bIdx * bundleSpacing;
          const points = [];

          let currX = baseChannelX + offsetX;
          let currY = startY;

          points.push({ x: currX, y: currY });

          for (let j = 0; j < jogs.length; j++) {
            const jog = jogs[j];
            // Vertical segment down to bend Y
            points.push({ x: currX, y: jog.y });
            // Horizontal 90-degree step
            currX = baseChannelX + offsetX + jog.offset;
            points.push({ x: currX, y: jog.y });
            currY = jog.y;
          }

          // Final segment down to end pad
          points.push({ x: currX, y: endY });

          // Compute segment lengths
          let totalLen = 0;
          const segments = [];
          for (let p = 0; p < points.length - 1; p++) {
            const p1 = points[p];
            const p2 = points[p + 1];
            const len = Math.hypot(p2.x - p1.x, p2.y - p1.y);
            segments.push({
              p1,
              p2,
              len,
              startDist: totalLen
            });
            totalLen += len;
          }

          // Tron Legacy energy pulses: continuous traveling light trails
          const numPulses = 1 + (Math.random() < 0.55 ? 1 : 0);
          const pulses = [];
          for (let i = 0; i < numPulses; i++) {
            const pulseTrailLength = 55 + Math.random() * 65;
            pulses.push({
              dist: (i * (totalLen / numPulses)) + Math.random() * 50, // Staggered starting points & timing
              speed: 40 + Math.random() * 45, // Tron energy trail speed
              length: pulseTrailLength,
              alpha: 0.85 + Math.random() * 0.15,
              width: 2.0 + Math.random() * 0.8,
              delay: Math.random() * 2.0, // Asynchronous start delay
              cooldown: 0
            });
          }

          traces.push({
            points,
            segments,
            totalLen,
            pulses,
            hasTerminalPad: Math.random() < 0.85,
            padRadius: 3.8 + Math.random() * 1.5,
            lineWidth: 1.2 + (Math.random() < 0.3 ? 0.6 : 0),
            colorAlpha: 0.45 + Math.random() * 0.25
          });
        }
      }
    }

    // Secondary horizontal cross-bus traces
    const numCross = isMobile ? 4 : 10;
    for (let i = 0; i < numCross; i++) {
      const y = Math.random() * height;
      const startX = Math.random() * (width * 0.65);
      const len = 70 + Math.random() * 160;
      const points = [
        { x: startX, y: y },
        { x: startX + len, y: y }
      ];
      const segments = [{
        p1: points[0],
        p2: points[1],
        len: len,
        startDist: 0
      }];
      traces.push({
        points,
        segments,
        totalLen: len,
        pulses: [{
          dist: Math.random() * len,
          speed: 30 + Math.random() * 35,
          length: 45,
          alpha: 0.8,
          width: 1.8,
          delay: Math.random() * 1.5,
          cooldown: 0
        }],
        hasTerminalPad: true,
        padRadius: 3.5,
        lineWidth: 1.0,
        colorAlpha: 0.4
      });
    }

    // Ambient floating Tron micro-particles (ion drift)
    const particleCount = isMobile ? 16 : 28;
    for (let p = 0; p < particleCount; p++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: 1.0 + Math.random() * 2.2,
        speedY: 0.18 + Math.random() * 0.38,
        speedX: (Math.random() - 0.5) * 0.15,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.25 + Math.random() * 0.55,
        pulseSpeed: 0.02 + Math.random() * 0.03
      });
    }
  }

  function getPointAlongPolyline(segments, totalLen, dist) {
    if (dist <= 0) return segments[0].p1;
    if (dist >= totalLen) return segments[segments.length - 1].p2;

    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      if (dist <= seg.startDist + seg.len) {
        const segDist = dist - seg.startDist;
        const ratio = seg.len === 0 ? 0 : segDist / seg.len;
        return {
          x: seg.p1.x + (seg.p2.x - seg.p1.x) * ratio,
          y: seg.p1.y + (seg.p2.y - seg.p1.y) * ratio
        };
      }
    }
    return segments[segments.length - 1].p2;
  }

  // Draw smooth polyline segment between distance d1 and d2
  function drawSubPolyline(ctx, segments, totalLen, dStart, dEnd) {
    if (dStart >= dEnd || dEnd <= 0 || dStart >= totalLen) return;

    const clampedStart = Math.max(0, dStart);
    const clampedEnd = Math.min(totalLen, dEnd);

    ctx.beginPath();
    let started = false;

    for (let i = 0; i < segments.length; i++) {
      const seg = segments[i];
      const segStartDist = seg.startDist;
      const segEndDist = seg.startDist + seg.len;

      // Check if current segment intersects [clampedStart, clampedEnd]
      if (segEndDist >= clampedStart && segStartDist <= clampedEnd) {
        const localStart = Math.max(0, clampedStart - segStartDist);
        const localEnd = Math.min(seg.len, clampedEnd - segStartDist);

        const r1 = seg.len === 0 ? 0 : localStart / seg.len;
        const r2 = seg.len === 0 ? 0 : localEnd / seg.len;

        const pStart = {
          x: seg.p1.x + (seg.p2.x - seg.p1.x) * r1,
          y: seg.p1.y + (seg.p2.y - seg.p1.y) * r1
        };
        const pEnd = {
          x: seg.p1.x + (seg.p2.x - seg.p1.x) * r2,
          y: seg.p1.y + (seg.p2.y - seg.p1.y) * r2
        };

        if (!started) {
          ctx.moveTo(pStart.x, pStart.y);
          started = true;
        }
        ctx.lineTo(pEnd.x, pEnd.y);
      }
    }

    ctx.stroke();
  }

  function drawCircuitLayer(dt) {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw Unlit Base Traces (#165C8C blue)
    ctx.lineCap = 'square';
    ctx.lineJoin = 'miter';

    for (let i = 0; i < traces.length; i++) {
      const trace = traces[i];
      const pts = trace.points;
      if (pts.length < 2) continue;

      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let p = 1; p < pts.length; p++) {
        ctx.lineTo(pts[p].x, pts[p].y);
      }
      // Base trace line: bright enough to read on low-contrast laptop/phone screens
      ctx.strokeStyle = `rgba(22, 92, 140, ${trace.colorAlpha})`;
      ctx.lineWidth = trace.lineWidth;
      ctx.stroke();

      // Draw junction node pads & solder terminals in deep/mid blue
      for (let p = 0; p < pts.length; p++) {
        const pt = pts[p];
        const isEnd = (p === 0 || p === pts.length - 1);
        if (isEnd && trace.hasTerminalPad) {
          // Terminal Pad (Outer Ring + Core)
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, trace.padRadius, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(34, 118, 178, 0.85)';
          ctx.lineWidth = 1.2;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, trace.padRadius * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 217, 255, 0.4)';
          ctx.fill();
        } else if (!isEnd && (isReducedMotion ? (i + p) % 6 === 0 : Math.random() < 0.18)) {
          // Small Via Node
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(34, 118, 178, 0.7)';
          ctx.fill();
        }
      }
    }

    // 2. Draw Tron Legacy Energy Pulses & Light Trails (#00D9FF Cyan-Blue)
    ctx.shadowColor = '#00D9FF';
    ctx.shadowBlur = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'miter';

    for (let i = 0; i < traces.length; i++) {
      const trace = traces[i];
      for (let p = 0; p < trace.pulses.length; p++) {
        if (isReducedMotion && (i + p) % 2 === 1) continue;
        const pulse = trace.pulses[p];

        if (pulse.delay > 0) {
          pulse.delay -= dt;
          continue;
        }

        // Advance pulse distance along trace geometry
        pulse.dist += pulse.speed * dt;

        // When pulse finishes its track, fade out and re-arm with asynchronous delay
        if (pulse.dist - pulse.length > trace.totalLen) {
          pulse.dist = 0;
          pulse.delay = Math.random() * 2.5; // Random pause before next energy flow
          pulse.speed = 35 + Math.random() * 45; // Vary speed on next run
          continue;
        }

        const headDist = pulse.dist;
        const tailDist = Math.max(0, pulse.dist - pulse.length);

        if (headDist <= 0 || tailDist >= trace.totalLen) continue;

        // Calculate opacity fade as pulse reaches start/end of path
        let opacityMultiplier = 1.0;
        if (headDist < 40) {
          opacityMultiplier = Math.max(0.1, headDist / 40);
        } else if (headDist > trace.totalLen - 40) {
          opacityMultiplier = Math.max(0.1, (trace.totalLen - headDist) / 40);
        }

        // Draw multiple gradient segments for light trail fading effect
        const numTrailSteps = 3;
        const stepLen = pulse.length / numTrailSteps;

        for (let s = 0; s < numTrailSteps; s++) {
          const sStart = Math.max(0, pulse.dist - (numTrailSteps - s) * stepLen);
          const sEnd = Math.max(0, pulse.dist - (numTrailSteps - s - 1) * stepLen);
          if (sStart >= sEnd) continue;

          const stepAlpha = (0.2 + (s + 1) * 0.25) * pulse.alpha * opacityMultiplier;
          ctx.strokeStyle = `rgba(0, 217, 255, ${stepAlpha})`;
          ctx.lineWidth = pulse.width * (0.65 + s * 0.15);

          drawSubPolyline(ctx, trace.segments, trace.totalLen, sStart, sEnd);
        }

        // Bright energy head along right-angle path
        const clampedHeadDist = Math.min(headDist, trace.totalLen);
        const headPt = getPointAlongPolyline(trace.segments, trace.totalLen, clampedHeadDist);

        ctx.beginPath();
        ctx.arc(headPt.x, headPt.y, pulse.width + 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * opacityMultiplier})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(headPt.x, headPt.y, pulse.width + 3.0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${0.45 * opacityMultiplier})`;
        ctx.fill();
      }
    }

    ctx.shadowBlur = 0; // Reset shadow for performance

    // 3. Draw Floating Micro-Particles (Soft Ambient Ion Drift)
    for (let i = 0; i < particles.length; i++) {
      const part = particles[i];
      const drift = isReducedMotion ? REDUCED_SPEED : 1;
      part.y -= part.speedY * drift;
      part.phase += part.pulseSpeed * drift;
      part.x += Math.sin(part.phase) * part.speedX * drift;

      if (part.y < -10) {
        part.y = height + 10;
        part.x = Math.random() * width;
      }
      if (part.x < -10) part.x = width + 10;
      if (part.x > width + 10) part.x = -10;

      const currentAlpha = part.alpha * (0.5 + 0.5 * Math.sin(part.phase));
      ctx.beginPath();
      ctx.arc(part.x, part.y, part.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 217, 255, ${currentAlpha})`;
      ctx.fill();
    }
  }

  function loop(currentTime) {
    if (!lastTime) lastTime = currentTime;
    let dt = Math.min((currentTime - lastTime) / 1000, 0.1); // Clamp dt to prevent jumping
    if (isReducedMotion) dt *= REDUCED_SPEED;
    lastTime = currentTime;

    if (!document.hidden) {
      drawCircuitLayer(dt);
    }

    animationFrameId = requestAnimationFrame(loop);
  }

  // Handle Resize with Debounce
  let resizeTimeout = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      resize();
    }, 150);
  }, { passive: true });

  // Handle Visibility change
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      lastTime = performance.now();
    }
  });

  // Initial setup
  resize();
  lastTime = performance.now();
  animationFrameId = requestAnimationFrame(loop);
}

// Scroll Reveal: fade cards up as they enter the viewport, staggered within each grid
function setupScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const targets = document.querySelectorAll(
    '.section-head, .about-card, .skill-category-card, .project-mini-card, ' +
    '.citation-card, .award-item, .exp-card, .edu-card, .contact-card'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      observer.unobserve(el);
      // Drop the stagger delay once revealed so hover transitions stay instant
      setTimeout(() => { el.style.transitionDelay = ''; }, 1200);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => {
    const kind = el.classList[0];
    const siblings = [...el.parentElement.children].filter(c => c.classList.contains(kind));
    const index = Math.min(siblings.indexOf(el), 5);
    if (index > 0) el.style.transitionDelay = `${index * 70}ms`;
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Check stored language or default to en
  const savedLang = localStorage.getItem('preferred_lang') || 'en';
  
  // Set up language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.lang;
      setLanguage(selected);
    });
  });

  setLanguage(savedLang);
  setupCircuitBackground();
  setupProjectsCarousel();
  setupVideoEmbeds();
  setupCitationCopy();
  setupModals();
  setupMobileNav();
  setupEmailCopy();
  setupScrollSpy();
  setupScrollReveal();
});

})();
