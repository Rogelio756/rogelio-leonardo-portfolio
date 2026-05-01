# Análisis del portafolio web — `portafolio_roy_web`

Análisis enfocado en **estructura y organización**, **diseño y UX** y **SEO y rendimiento**.
Fecha: 2026-04-30.

---

## 1. Mapa del repositorio

```
portafolio_roy_web/
├── README.md          ← prácticamente vacío y con BOM mal codificado
├── index.html         ← versión "vieja" / placeholder (en inglés, 98 líneas)
├── css/style.css      ← estilos del index raíz (303 líneas)
├── js/main.js         ← VACÍO (1 línea)
├── assets/icons/      ← 4 PNGs (layout, microscope, file-text, mail)
└── nuevo/
    ├── index.html     ← versión nueva, completa (~655 líneas con CSS+JS inline)
    └── data.js        ← contenido bilingüe ES/EN
```

> **Hallazgo principal:** conviven dos sitios en el mismo repo. La raíz sirve un placeholder (“Currently building the architecture”) y `/nuevo/` sirve el sitio real. Esto confunde despliegues, SEO y mantenimiento.

---

## 2. Estructura y organización

### Problemas críticos

1. **Dos versiones del sitio.** `/index.html` muestra un placeholder; `/nuevo/index.html` es el sitio real. En producción la URL canónica (`/`) muestra contenido obsoleto.
2. **`/nuevo/index.html` tiene CSS (~245 líneas) y JS (~190 líneas) inline.** Pierdes caching de navegador, dificultas mantener y volver a usar.
3. **`js/main.js` está vacío** pero referenciado desde `index.html` → request inútil.
4. **`README.md` está prácticamente vacío** y comienza con BOM mal codificado (`��#`). En GitHub se ve roto.
5. **No hay `.gitignore`.** Si en algún momento añades `node_modules`, `.env`, dist, etc., entrarán al repo.
6. **No hay favicon** en ninguna de las dos versiones.
7. **Restos de Cloudflare email-protection.** En `/nuevo/index.html` aparecen referencias a `/cdn-cgi/l/email-protection` y a `__cf_email__`, lo que indica que el HTML fue copiado desde un sitio servido por Cloudflare. **Si tu hosting no es Cloudflare con esa función activa, el email NO se decodifica y se ve “[email protected]” a los visitantes.**
8. **Inconsistencia de fechas.** El index raíz dice `© 2026`, el de `/nuevo/` dice `© 2025`. El eyebrow dice "Portafolio · 2025".
9. **Convención de carpetas.** `nuevo/` no es una buena convención. Una rama `redesign` o reemplazar el index raíz directamente sería más limpio.
10. **Carpeta `.git/` tiene objetos sueltos** (no empacados). Normal en repos pequeños, no es bug, sólo nota.

### Recomendaciones

- Decide UNA versión: promueve `/nuevo/index.html` a la raíz y borra el placeholder.
- Extrae a `css/styles.css` y `js/app.js`. Versiona con `?v=hash` para cache busting.
- Añade `.gitignore`, `LICENSE`, `README.md` decente (con screenshots, stack y URL en producción).
- Añade favicon (`favicon.ico`, `apple-touch-icon.png`, `site.webmanifest`).
- Mueve `data.js` a la misma carpeta o renómbralo (`portfolio.data.js`).
- Reemplaza los iconos PNG (`assets/icons/*.png`) por SVG inline o por un set como Lucide / Heroicons. Pesan más y no escalan en pantallas Retina.

---

## 3. Diseño y UX

### Versión raíz (`/index.html`)
- Es un placeholder. Los iconos del topbar van a `href="#"` → no llevan a ningún lado.
- Sin contenido real. Para un visitante que llegue desde LinkedIn la primera impresión es “sitio en construcción”.
- A favor: tipografía Inter, animaciones discretas (`fadeUp`, `expandLine`), buena base CSS limpia.

### Versión nueva (`/nuevo/index.html`)
**Lo bueno**

- Lenguaje visual muy fuerte y diferenciado: paleta navy + dorado, tipografía mono (`Space Mono`) + sans (`DM Sans`).
- Bilingüe ES/EN con toggle real, contenido localizado en `i18n` y `data.js`.
- Microinteracciones cuidadas: pulse del dot, blink del cursor de terminal, hover states, reveal on scroll.
- Carrusel con autoplay + dots + flechas.
- “Terminal interactivo” de proyectos es una idea distintiva y coherente con el perfil técnico.
- `text-wrap: balance/pretty` aplicado en titulares — detalle profesional.
- `aria-label` en botones del carrusel y `lang` actualizado al togglear idioma.

**Problemas de UX/accesibilidad**

1. **Sin fallback `<noscript>`.** El sitio depende 100% de JS (los proyectos se renderizan con `data.js`). Sin JS la página queda vacía → mal para SEO y accesibilidad.
2. **`prefers-reduced-motion` no se respeta.** Tienes pulse infinito, blink y reveal on scroll. Debes desactivarlas para usuarios con esa preferencia.
3. **Contraste insuficiente** en varios textos:
   - `rgba(230, 237, 243, 0.5)` y `0.55` sobre `--navy` (#0A1628) están en el límite de WCAG AA para texto pequeño. Súbelo a `0.7` o sube el tamaño.
4. **Iframe de YouTube sin `loading="lazy"` ni `sandbox`.** Carga ~500 KB inmediatamente y bloquea el LCP del hero.
5. **Autoplay del carrusel sin pausa al hover ni al focus.** Accesibilidad WCAG 2.2.2 dice que cualquier movimiento >5s debe poder pausarse.
6. **Botón `lang-toggle`** muestra el idioma destino (“EN” cuando estás en español). Es convención común pero conviene un `aria-label` claro tipo `aria-label="Cambiar a inglés"`.
7. **Email obfuscado por Cloudflare.** Si no estás detrás de Cloudflare, el `[email protected]` no se reemplaza y el `mailto:` queda roto.
8. **`<a href="#">` en versión raíz** sin manejar el comportamiento → scrollea al top y modifica la URL.
9. **Carrusel con `transform: translateX(calc(-X% - Ypx))`** es frágil cuando cambia `perView` por resize. Probarlo a 599px ↔ 600px y a 1000px ↔ 1001px.
10. **`min-height: 100vh`** en hero da problemas en mobile (la barra de URL móvil suma alto). Considera `100svh` (small viewport).
11. **`backdrop-filter: blur(12px)`** sin fallback → en navegadores que no soportan, la topbar queda traslúcida sobre contenido y el texto no se lee.
12. **Falta foco visible** en algunos elementos interactivos (terminal-line, cs-card). Usuarios de teclado pierden referencia.
13. **Skip link ausente.** Recomendado un `<a class="skip" href="#hero">Skip to content</a>`.

---

## 4. SEO y rendimiento

### SEO — meta tags faltantes (críticos)

Ambas versiones carecen de:

- `<meta name="description">` — bloqueador para snippets en Google.
- Open Graph: `og:title`, `og:description`, `og:image`, `og:url`, `og:type` — sin esto los previews en LinkedIn/WhatsApp/Slack salen feos.
- Twitter cards (`twitter:card`, `twitter:image`).
- `<link rel="canonical">`.
- `<meta name="author">`, `<meta name="keywords">` (keywords ya pesa poco, pero author sí ayuda).
- JSON-LD `Person` con tu nombre, alumnOf, sameAs (LinkedIn, GitHub, ORCID), jobTitle. Ideal para Knowledge Panel.
- Falta `robots.txt` y `sitemap.xml`.
- Index raíz declara `lang="en"` pero el sitio es bilingüe → debe haber `<link rel="alternate" hreflang="es">` y `hreflang="en"`.

### Rendimiento

1. **CSS y JS inline en `/nuevo/index.html`.** ~245 líneas de CSS y ~190 líneas de JS dentro del HTML. El navegador no puede cachearlos entre páginas y aumenta el HTML inicial.
2. **YouTube iframe en hero.** Es un costo enorme para el LCP/FCP. Alternativa: usar [`lite-youtube-embed`](https://github.com/paulirish/lite-youtube-embed) o un poster + click-to-play.
3. **Google Fonts** se carga bien con `preconnect` y `display=swap` ✓. Pero pides 5 pesos de Inter y 4 pesos combinados de DM Sans + Space Mono → si sólo usas 2-3 pesos por fuente, recórtalo.
4. **Iconos PNG** (`assets/icons/*.png`) sirven 4 imágenes para 4 íconos de 20px. Reemplazar por SVG inline ahorra requests y peso, y mejora pixel-perfect en HiDPI.
5. **Sin `<link rel="preload">`** para fuentes críticas o para la imagen del hero.
6. **Sin compresión Brotli/Gzip declarada** (depende del hosting — si usas GitHub Pages, Netlify o Vercel viene por defecto).
7. **Sin Service Worker / PWA** — opcional pero gratis con Vite/Workbox y mejora la experiencia repetida.
8. **`overflow-x: hidden` en body** suele tapar bugs de layout. Mejor encontrar el desbordamiento y arreglarlo.
9. **Animaciones JS por `IntersectionObserver` ✓** correcto.
10. **Imágenes** — no hay imágenes propias. Cuando agregues screenshots de proyectos, usa WebP/AVIF + `loading="lazy"` + `width`/`height`.

### Métricas estimadas (Lighthouse, mobile, sin optimizar)

| Métrica | Estimación actual | Objetivo |
|---|---|---|
| Performance | 70-80 | 95+ |
| Accesibilidad | 80-85 | 95+ |
| Best Practices | 85-90 | 100 |
| SEO | 60-70 (sin description ni OG) | 100 |

---

## 5. Lista priorizada de acciones

### P0 — bloqueadores (hoy)
1. Decidir y dejar UNA versión del sitio. Promueve `/nuevo/index.html` a la raíz.
2. Quitar el email obfuscado por Cloudflare; reemplazarlo por `mailto:` real o por un decode JS propio.
3. Añadir `<meta name="description">` y bloque Open Graph.
4. Añadir favicon.
5. Reescribir `README.md`.

### P1 — mejoras altas (esta semana)
6. Extraer CSS y JS inline de `/nuevo/index.html` a archivos.
7. Reemplazar iframe YouTube por lite-embed o poster click-to-play.
8. Añadir `loading="lazy"` y `referrerpolicy="no-referrer"` al iframe restante.
9. JSON-LD Person + `hreflang` ES/EN.
10. Respetar `prefers-reduced-motion`.
11. Pausar autoplay del carrusel en hover/focus.
12. `100svh` en hero, foco visible en interactivos.

### P2 — pulido (cuando puedas)
13. Convertir iconos PNG a SVG inline o pack de Lucide.
14. `robots.txt` + `sitemap.xml`.
15. Recortar pesos de Google Fonts a los necesarios.
16. Añadir skip link, `noscript` y mejor contraste en textos secundarios.
17. Dashboard mínimo con `aria-live` para anunciar cambio de idioma.
18. Cache busting en assets (`?v=hash`).

---

## 6. Snippets listos para pegar

### Bloque `<head>` recomendado para `/nuevo/index.html`

```html
<meta name="description" content="Rogelio Mendez — Edge AI & Computer Vision Engineer. Sistemas de visión artificial desplegados en hardware embebido (Raspberry Pi, Hailo-8). Papers en MCPR 2026.">
<meta name="author" content="Rogelio Leonardo Mendez Macias">
<link rel="canonical" href="https://tu-dominio.com/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Rogelio Mendez · Edge AI & Computer Vision Engineer">
<meta property="og:description" content="Sistemas de IA al filo del hardware. Visión artificial desplegada en Raspberry Pi 5 y Hailo-8.">
<meta property="og:image" content="https://tu-dominio.com/og-image.png">
<meta property="og:url" content="https://tu-dominio.com/">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Rogelio Mendez · Edge AI">
<meta name="twitter:description" content="Sistemas de IA al filo del hardware.">
<meta name="twitter:image" content="https://tu-dominio.com/og-image.png">

<!-- Hreflang -->
<link rel="alternate" hreflang="es" href="https://tu-dominio.com/">
<link rel="alternate" hreflang="en" href="https://tu-dominio.com/?lang=en">

<!-- Favicon -->
<link rel="icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">

<!-- JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rogelio Leonardo Mendez Macias",
  "jobTitle": "Edge AI & Computer Vision Engineer",
  "url": "https://tu-dominio.com",
  "sameAs": [
    "https://www.linkedin.com/in/rogelio-leonardo-mendez-macias",
    "https://github.com/Rogelio756",
    "https://orcid.org/0009-0007-9163-3549"
  ],
  "alumniOf": "Universidad Autónoma Metropolitana"
}
</script>
```

### `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Iframe YouTube optimizado

```html
<iframe src="https://www.youtube-nocookie.com/embed/NZGxawmH6Ho?rel=0&modestbranding=1"
        title="ADAS UAM demo"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowfullscreen></iframe>
```

---

**TL;DR:** El sitio nuevo es estéticamente fuerte y conceptualmente coherente con el perfil. Los bloqueadores reales son: dos versiones conviviendo, ausencia de meta tags SEO, email roto por Cloudflare obfuscation, y CSS/JS inline. Resolviendo los 5 puntos P0 el portafolio queda listo para compartir en LinkedIn, aplicaciones y previews.
