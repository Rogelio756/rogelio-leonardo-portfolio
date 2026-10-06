/**
 * Portfolio Content Data & Localized Dictionaries (EN/ES)
 * Rogelio Leonardo Méndez Macías (Roy)
 * Single Source of Truth for text content and translations
 */

(function() {
  const I18N_DATA = {
  en: {
    // Topbar & Nav
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_publications: "Publications",
    nav_awards: "Awards",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_cv: "CV",

    // Hero
    hero_status: "EDGE NPU DEPLOYED",
    hero_title: "Rogelio Leonardo Mendez Macias",
    hero_alias: "",
    hero_subtitle: "Embedded Computer Vision & Edge AI Engineer",
    hero_tagline: "INT8 Quantization & NPU Deployment (Hailo-8, IMX500) · YOLOv8 · PyTorch · ONNX · ADAS & Autonomous Systems",
    badge_1: "Published Author (Springer LNCS)",
    badge_2: "1st Place National Hackathon (IBM-judged)",
    badge_3: "Falling Walls Lab Finalist",
    cta_download_cv: "Download CV",
    cta_view_projects: "View Projects",

    // Telemetry Box
    telemetry_title: "HARDWARE PIPELINE METRICS",
    telemetry_status: "SYSTEM OPTIMAL",
    metric_hailo_val: "30–58",
    metric_hailo_unit: "FPS",
    metric_hailo_label: "Hailo-8 Edge Perception",
    metric_lat_val: "230",
    metric_lat_unit: "ms",
    metric_lat_label: "End-to-End Latency",
    metric_comp_val: "88%",
    metric_comp_unit: "INT8",
    metric_comp_label: "Model Compression",
    metric_ocr_val: ">93%",
    metric_ocr_unit: "Acc.",
    metric_ocr_label: "Central OCR Precision",
    telemetry_footnote: "Verified in hardware benchmarks & Springer LNCS peer-reviewed paper",

    // Section Titles
    sec_about_label: "PROFILE // BACKGROUND",
    sec_about_title: "About Me",
    sec_skills_label: "SYSTEM ARCHITECTURE // TOOLCHAIN",
    sec_skills_title: "Technical Skills",
    sec_projects_label: "APPLIED RESEARCH & EMBEDDED DEPLOYMENTS",
    sec_projects_title: "Featured Projects",
    sec_publications_label: "PEER-REVIEWED SCIENTIFIC RESEARCH",
    sec_publications_title: "Publications",
    sec_awards_label: "HONORS // HACKATHONS // CONGRESSES",
    sec_awards_title: "Awards & Recognition",
    sec_experience_label: "INDUSTRY // TRACK RECORD",
    sec_experience_title: "Professional Experience",
    sec_education_label: "ACADEMIC BACKGROUND // PROGRAMS",
    sec_education_title: "Education",
    sec_contact_label: "COMMUNICATIONS // CONNECT",
    sec_contact_title: "Get In Touch",

    // About Content
    about_p1: "Electronics Engineering student at UAM Azcapotzalco (graduating Dec 2026), specializing in embedded computer vision and edge AI for real-time perception systems. My research on on-device vehicle perception was peer-reviewed and published in Springer LNCS at MCPR 2026, and I recently won 1st place in a national AI hackathon judged by IBM. My background in control theory and queueing theory shapes how I design real-time embedded systems, not just how I train models. Currently a finalist at Falling Walls Lab, competing to represent Mexico.",
    about_hl_1: "Specialized in Edge AI, NPU Deployment & Real-time Vision",
    about_hl_2: "Springer LNCS Author & 1st Place National Hackathon Winner",
    about_hl_3: "Strong engineering foundation in Control & Queueing Theory",

    // Skills Categories
    cat_1_title: "Edge AI & Model Optimization",
    cat_2_title: "Embedded Systems & MLOps",
    cat_3_title: "Systems Fundamentals (differentiator)",
    cat_4_title: "Languages & Tools",

    // Projects Common Labels
    lbl_prob_sol: "Problem & Architecture:",
    lbl_stack: "Stack & Hardware:",
    lbl_result: "Key Results:",
    lbl_links: "Links & Artifacts:",
    btn_watch_demo: "Watch Live Demo",
    btn_live_demo: "Live Demo",
    btn_view_github: "View on GitHub",
    btn_watch_pres: "Presentation Video",
    btn_watch_video: "Watch Video",

    // Mini Cards Labels (EN)
    mini_p1_badge: "PROJECT 01 // THESIS & SPRINGER",
    mini_p1_title: "Cognitive ADAS System",
    mini_p1_sub: "Hailo-8 NPU · Distributed Perception · OCR & LLM",
    mini_p2_badge: "PROJECT 02 // 1ST PLACE IBM HACKATHON",
    mini_p2_title: "FloodSense",
    mini_p2_sub: "XGBoost & IBM watsonx / Granite · Real-time Hydrology",
    mini_p3_badge: "PROJECT 03 // SAMSUNG INNOVATION CAMPUS",
    mini_p3_title: "AI Road Risk Intelligence",
    mini_p3_sub: "RiskLSTM & YOLOv8 · BDD100K / BDDA · Temporal Modeling",
    mini_p4_badge: "PROJECT 04 // SAMSUNG INNOVATION 2024",
    mini_p4_title: "IoT Plant-Care System",
    mini_p4_sub: "Dual-MCU & Telemetry · Horticulture Automation",
    mini_cta_explore: "Explore Project & Video",
    mini_cta_live: "Explore Project & Demo",

    // Project 1
    p1_title: "Cognitive ADAS System (Thesis, UAM Azcapotzalco, 2025-2026)",
    p1_prob: "Three-layer distributed architecture for vehicle perception — edge perception on Hailo-8 (30-58 FPS), central OCR layer (>93% precision), and an LLM+TTS cognitive layer, coordinated over an MQTT backbone.",
    p1_res: "230ms end-to-end latency, 88% model compression, zero operational failures. This project is the basis of a peer-reviewed publication in Springer LNCS (MCPR 2026) and of a Falling Walls Lab finalist pitch.",

    // Project 2
    p2_title: "FloodSense",
    p2_prob: "Real-time hydrological intelligence system built in 48 hours for a national AI hackathon. 3-agent architecture: an XGBoost flood classifier, a risk regressor, and an alert-generation layer powered by IBM watsonx/Granite.",
    p2_res: "ROC-AUC 0.86 (classifier), R²=0.999 (regressor); covers 532 zones across 16 Mexico City boroughs with 6-hour anticipation, trained on 591,706 historical flood records from CONAGUA (1877-2024). Won 1st place (IBM-judged) and was selected for ADIP I+D+i incubation.",

    // Project 3
    p3_title: "AI-Powered Road Risk Intelligence (Samsung Innovation Campus, 2025-2026 cohort)",
    p3_prob: "A 5-stage pipeline for road risk modeling built with a 3-person team split across detection, segmentation, and temporal risk modeling.",
    p3_res: "Individually designed and validated the RiskLSTM strategy — Pearson r=0.916 on 61,345 BDD100K images plus 925 real-world BDDA dashcam clips.",

    // Project 4
    p4_title: "IoT Plant-Care System for Horticulture (Samsung Innovation Campus, 2024 cohort)",
    p4_prob: "An IoT system for horticultural plant care, built with a cross-institutional team including classmates from IPN (Instituto Politécnico Nacional).",
    p4_res: "Presented in front of Samsung's senior leadership and submitted to the Santander Reto Universitario challenge.",

    // Publication
    pub_badge: "SPRINGER LNCS · MCPR 2026",
    pub_note: "Presented at MCPR 2026 (18th Mexican Conference on Pattern Recognition, organized by INAOE), Ciudad Juárez, Chihuahua, June 2026.",
    pub_copy_btn: "Copy Citation",
    pub_springer_btn: "Read on Springer",
    pub_talk_btn: "MUTVI 2026 Talk",
    pub_copied_btn: "Copied!",

    // Awards Items
    award_1: "<strong>Finalist, Falling Walls Lab (Mexico City)</strong> — competing to represent Mexico, presenting the ADAS project",
    award_2: "<strong>1st Place, Hackathon Concienc.IA 2026</strong> (Young AI Leaders CDMX Hub × Tec de Monterrey CCM, IBM-judged) — FloodSense",
    award_3: "<strong>MUTVI Recognition</strong> — UAM International Multidisciplinary Colloquium on Information Visualization, oral presentation \"El copiloto que nunca duerme\" · <a href=\"https://youtu.be/nesc0EuF2kk\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"award-link\">Watch talk ↗</a>",
    award_4: "<strong>Presenter, NEO International Congress (2025)</strong> — distributed AI architecture and real-time perception pipelines",
    award_5: "<strong>Presented IoT project in front of Samsung senior executive leadership</strong> — Santander Reto Universitario (2024)",

    // Experience
    exp_company: "Grupo Modelo (AB InBev)",
    exp_role: "Data Engineering & Process Digitalization Intern",
    exp_date: "May – Nov 2023",
    exp_desc: "Built Python + SQL automation pipelines that reduced reporting workload by 5+ hours/week; self-initiated a PPE-detection computer vision prototype for industrial safety, beyond assigned scope.",

    // Education
    edu_1_title: "B.Sc. Electronics Engineering",
    edu_1_inst: "Universidad Autónoma Metropolitana — Azcapotzalco, Mexico City",
    edu_1_meta: "Expected: December 2026",
    edu_1_spec: "Specialization: Edge AI, Computer Vision, Embedded Systems.",
    edu_2_title: "Samsung Innovation Campus",
    edu_2_inst: "Samsung Electronics & SIC Mexico",
    edu_2_meta: "Two cohorts (2024 and 2025-2026)",
    edu_2_spec: "Applied Deep Learning, Computer Vision pipelines, IoT & embedded architectures.",

    // Contact
    contact_sub: "Available for embedded vision engineering, edge AI research collaborations, and full-time engineering roles starting late 2026.",
    contact_cv_btn: "Download CV (PDF)",
    contact_copy_email: "Copy Email",

    // Modals & Notices
    cv_modal_title: "Curriculum Vitae (PDF)",
    cv_modal_desc: "Rogelio Leonardo Mendez Macias — Embedded Computer Vision & Edge AI Engineer.",
    cv_modal_btn_en: "Download English CV",
    cv_modal_btn_es: "Download Spanish CV",
    cv_modal_preview: "Preview PDF in New Window",
    toast_copied: "Copied to clipboard!"
  },

  es: {
    // Topbar & Nav
    nav_about: "Acerca de",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_publications: "Publicaciones",
    nav_awards: "Reconocimientos",
    nav_experience: "Experiencia",
    nav_education: "Educación",
    nav_contact: "Contacto",
    nav_cv: "CV",

    // Hero
    hero_status: "EDGE NPU DESPLEGADA",
    hero_title: "Rogelio Leonardo Mendez Macias",
    hero_alias: "",
    hero_subtitle: "Ingeniero en Visión Computacional Embebida y Edge AI",
    hero_tagline: "Cuantización INT8 y Despliegue en NPUs (Hailo-8, IMX500) · YOLOv8 · PyTorch · ONNX · ADAS y Sistemas Autónomos",
    badge_1: "Autor Publicado (Springer LNCS)",
    badge_2: "1.er Lugar Hackathon Nacional (Juez IBM)",
    badge_3: "Finalista Falling Walls Lab",
    cta_download_cv: "Descargar CV",
    cta_view_projects: "Ver Proyectos",

    // Telemetry Box
    telemetry_title: "MÉTRICAS DE HARDWARE & DESPLIEGUE",
    telemetry_status: "SISTEMA ÓPTIMO",
    metric_hailo_val: "30–58",
    metric_hailo_unit: "FPS",
    metric_hailo_label: "Percepción Edge Hailo-8",
    metric_lat_val: "230",
    metric_lat_unit: "ms",
    metric_lat_label: "Latencia End-to-End",
    metric_comp_val: "88%",
    metric_comp_unit: "INT8",
    metric_comp_label: "Compresión de Modelo",
    metric_ocr_val: ">93%",
    metric_ocr_unit: "Prec.",
    metric_ocr_label: "Precisión OCR Central",
    telemetry_footnote: "Verificado en banco de hardware y publicación arbitrada en Springer LNCS",

    // Section Titles
    sec_about_label: "PERFIL // TRAYECTORIA",
    sec_about_title: "Acerca de Mí",
    sec_skills_label: "ARQUITECTURA DE SISTEMAS // HERRAMIENTAS",
    sec_skills_title: "Habilidades Técnicas",
    sec_projects_label: "INVESTIGACIÓN APLICADA Y DESPLIEGUE EMBEBIDO",
    sec_projects_title: "Proyectos Destacados",
    sec_publications_label: "INVESTIGACIÓN CIENTÍFICA ARBITRADA",
    sec_publications_title: "Publicaciones",
    sec_awards_label: "DISTINCIONES // HACKATHONS // CONGRESOS",
    sec_awards_title: "Premios y Reconocimientos",
    sec_experience_label: "INDUSTRIA // EXPERIENCIA",
    sec_experience_title: "Experiencia Profesional",
    sec_education_label: "FORMACIÓN ACADÉMICA // PROGRAMAS",
    sec_education_title: "Educación",
    sec_contact_label: "COMUNICACIÓN // ENLACES",
    sec_contact_title: "Contacto",

    // About Content
    about_p1: "Estudiante de Ingeniería Electrónica en la UAM Azcapotzalco (egreso dic 2026), especializado en visión computacional embebida y edge AI para sistemas de percepción en tiempo real. Mi investigación sobre percepción vehicular en el dispositivo fue arbitrada y publicada en Springer LNCS en MCPR 2026, y recientemente gané el primer lugar en un hackathon nacional de IA juzgado por IBM. Mi formación en teoría de control y teoría de colas define cómo diseño sistemas embebidos en tiempo real, no solo cómo entreno modelos. Actualmente soy finalista en Falling Walls Lab, compitiendo por representar a México.",
    about_hl_1: "Especialista en Edge AI, Despliegue en NPUs y Visión en Tiempo Real",
    about_hl_2: "Autor en Springer LNCS y Ganador de 1.er Lugar en Hackathon Nacional",
    about_hl_3: "Sólida formación en Teoría de Control y Teoría de Colas",

    // Skills Categories
    cat_1_title: "Edge AI & Optimización de Modelos",
    cat_2_title: "Sistemas Embebidos & MLOps",
    cat_3_title: "Fundamentos de Sistemas (Diferenciador)",
    cat_4_title: "Lenguajes & Herramientas",

    // Projects Common Labels
    lbl_prob_sol: "Problema y Arquitectura:",
    lbl_stack: "Stack y Hardware:",
    lbl_result: "Resultados Clave:",
    lbl_links: "Enlaces y Materiales:",
    btn_watch_demo: "Ver Demo en Vivo",
    btn_live_demo: "Demo en Vivo",
    btn_view_github: "Ver en GitHub",
    btn_watch_pres: "Video de Presentación",
    btn_watch_video: "Ver Video",

    // Mini Cards Labels (ES)
    mini_p1_badge: "PROYECTO 01 // TESIS & SPRINGER",
    mini_p1_title: "Sistema ADAS Cognitivo",
    mini_p1_sub: "NPU Hailo-8 · Percepción Distribuida · OCR & LLM",
    mini_p2_badge: "PROYECTO 02 // 1.ER LUGAR HACKATHON IBM",
    mini_p2_title: "FloodSense",
    mini_p2_sub: "XGBoost & IBM watsonx / Granite · Hidrología en Tiempo Real",
    mini_p3_badge: "PROYECTO 03 // SAMSUNG INNOVATION CAMPUS",
    mini_p3_title: "Inteligencia de Riesgo Vial con IA",
    mini_p3_sub: "RiskLSTM & YOLOv8 · BDD100K / BDDA · Modelado Temporal",
    mini_p4_badge: "PROYECTO 04 // SAMSUNG INNOVATION 2024",
    mini_p4_title: "Sistema IoT de Cuidado de Plantas",
    mini_p4_sub: "Doble MCU & Telemetría · Automatización Hortícola",
    mini_cta_explore: "Explorar Proyecto y Video",
    mini_cta_live: "Explorar Proyecto y Demo",

    // Project 1
    p1_title: "Sistema ADAS Cognitivo (Tesis, UAM Azcapotzalco, 2025-2026)",
    p1_prob: "Arquitectura distribuida en tres capas para percepción vehicular — percepción en el borde con Hailo-8 (30-58 FPS), capa OCR central (>93% precisión), y una capa cognitiva LLM+TTS coordinadas mediante un backbone MQTT.",
    p1_res: "Latencia end-to-end de 230ms, 88% de compresión de modelo, cero fallos operacionales. Este proyecto es la base de una publicación arbitrada en Springer LNCS (MCPR 2026) y de la propuesta finalista en Falling Walls Lab.",

    // Project 2
    p2_title: "FloodSense",
    p2_prob: "Sistema de inteligencia hidrológica en tiempo real desarrollado en 48 horas para un hackathon nacional de IA. Arquitectura de 3 agentes: clasificador de inundaciones XGBoost, regresor de riesgo y capa generadora de alertas con IBM watsonx/Granite.",
    p2_res: "ROC-AUC 0.86 (clasificador), R²=0.999 (regresor); cobertura de 532 zonas en las 16 alcaldías de la CDMX con 6 horas de anticipación, entrenado con 591,706 registros históricos de inundación de CONAGUA (1877-2024). Ganador del 1.er lugar (evaluado por IBM) y seleccionado para incubación ADIP I+D+i.",

    // Project 3
    p3_title: "Inteligencia de Riesgo Vial con IA (Samsung Innovation Campus, cohorte 2025-2026)",
    p3_prob: "Pipeline de 5 etapas para modelado de riesgo vial desarrollado con un equipo de 3 personas distribuido en detección, segmentación y modelado temporal de riesgo.",
    p3_res: "Diseñé y validé individualmente la estrategia RiskLSTM — coeficiente de Pearson r=0.916 en 61,345 imágenes de BDD100K más 925 clips reales de dashcam BDDA.",

    // Project 4
    p4_title: "Sistema IoT de Cuidado de Plantas para Horticultura (Samsung Innovation Campus, cohorte 2024)",
    p4_prob: "Sistema IoT para el cuidado hortícola de plantas, desarrollado en equipo interinstitucional incluyendo compañeros del IPN (Instituto Politécnico Nacional).",
    p4_res: "Presentado ante el liderazgo ejecutivo sénior de Samsung y postulado al desafío Santander Reto Universitario.",

    // Publication
    pub_badge: "SPRINGER LNCS · MCPR 2026",
    pub_note: "Presentado en MCPR 2026 (18.ª Conferencia Mexicana sobre Reconocimiento de Patrones, organizada por el INAOE), Ciudad Juárez, Chihuahua, junio 2026.",
    pub_copy_btn: "Copiar Cita",
    pub_springer_btn: "Leer en Springer",
    pub_talk_btn: "Ponencia MUTVI 2026",
    pub_copied_btn: "¡Copiado!",

    // Awards Items
    award_1: "<strong>Finalista, Falling Walls Lab (Ciudad de México)</strong> — compitiendo por representar a México, presentando el proyecto ADAS",
    award_2: "<strong>1.er Lugar, Hackathon Concienc.IA 2026</strong> (Young AI Leaders CDMX Hub × Tec de Monterrey CCM, evaluación IBM) — FloodSense",
    award_3: "<strong>Reconocimiento MUTVI</strong> — Coloquio Internacional Multidisciplinario de Visualización de Información de la UAM, ponencia oral \"El copiloto que nunca duerme\" · <a href=\"https://youtu.be/nesc0EuF2kk\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"award-link\">Ver ponencia ↗</a>",
    award_4: "<strong>Ponente, Congreso Internacional NEO (2025)</strong> — arquitectura de IA distribuida y pipelines de percepción en tiempo real",
    award_5: "<strong>Presentación de proyecto IoT ante la alta dirección ejecutiva de Samsung</strong> — Santander Reto Universitario (2024)",

    // Experience
    exp_company: "Grupo Modelo (AB InBev)",
    exp_role: "Becario de Ingeniería de Datos y Digitalización de Procesos",
    exp_date: "Mayo – Noviembre 2023",
    exp_desc: "Desarrollé pipelines de automatización con Python y SQL que redujeron la carga de reportes en más de 5 horas/semana; inicié por iniciativa propia un prototipo de visión artificial para detección de EPP en seguridad industrial, más allá del alcance asignado.",

    // Education
    edu_1_title: "Licenciatura en Ingeniería Electrónica",
    edu_1_inst: "Universidad Autónoma Metropolitana — Azcapotzalco, Ciudad de México",
    edu_1_meta: "Egreso previsto: Diciembre 2026",
    edu_1_spec: "Especialización: Edge AI, Visión Computacional, Sistemas Embebidos.",
    edu_2_title: "Samsung Innovation Campus",
    edu_2_inst: "Samsung Electronics & SIC México",
    edu_2_meta: "Dos cohortes (2024 y 2025-2026)",
    edu_2_spec: "Deep Learning aplicado, pipelines de Visión Artificial, IoT y arquitecturas embebidas.",

    // Contact
    contact_sub: "Disponible para ingeniería en visión embebida, colaboraciones de investigación en Edge AI y oportunidades laborales de tiempo completo a partir de finales de 2026.",
    contact_cv_btn: "Descargar CV (PDF)",
    contact_copy_email: "Copiar Correo",

    // Modals & Notices
    cv_modal_title: "Curriculum Vitae (PDF)",
    cv_modal_desc: "Rogelio Leonardo Mendez Macias — Ingeniero en Visión Computacional Embebida y Edge AI.",
    cv_modal_btn_en: "Descargar CV en Inglés",
    cv_modal_btn_es: "Descargar CV en Español",
    cv_modal_preview: "Ver PDF en Nueva Pestaña",
    toast_copied: "¡Copiado al portapapeles!"
  }
};

const BIBTEX_CITATION = `@inproceedings{mendez2026embedded,
  author    = {M{\\'e}ndez-Mac{\\'\\i}as, Rogelio Leonardo and Villegas-Cortez, Juan and Ferreyra Ram{\\'\\i}rez, Axel and Z{\\'u}{\\~n}iga-L{\\'o}pez, Arturo and Cordero-S{\\'a}nchez, Salvador},
  title     = {Embedded System for Vehicle Environment Perception and License Plate Recognition (LPR) Using Computer Vision and Deep Learning},
  booktitle = {Pattern Recognition. MCPR 2026},
  series    = {Lecture Notes in Computer Science},
  volume    = {16623},
  pages     = {247--258},
  publisher = {Springer, Cham},
  year      = {2026},
  doi       = {10.1007/978-3-032-28393-1_22}
}`;

const PLAIN_CITATION = `Méndez-Macías, R.L., Villegas-Cortez, J., Ferreyra Ramírez, A., Zúñiga-López, A., Cordero-Sánchez, S. "Embedded System for Vehicle Environment Perception and License Plate Recognition (LPR) Using Computer Vision and Deep Learning." In: Pattern Recognition. MCPR 2026, Lecture Notes in Computer Science, vol. 16623. Springer, Cham (2026), pp. 247–258. DOI: https://doi.org/10.1007/978-3-032-28393-1_22`;

// Attach to window for global browser access
  window.I18N_DATA = I18N_DATA;
  window.BIBTEX_CITATION = BIBTEX_CITATION;
  window.PLAIN_CITATION = PLAIN_CITATION;
})();
