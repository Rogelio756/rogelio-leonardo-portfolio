// Content data for Rogelio Leonardo Mendez Macias portfolio
// Bilingual (ES/EN), based on real CV data

window.PORTFOLIO_DATA = {
  identity: {
    name: "Rogelio Leonardo Mendez Macias",
    shortName: "Rogelio Mendez",
    initials: "RLM",
    role: {
      es: "Ingeniería Electrónica · Edge AI & Computer Vision",
      en: "Electronics Engineering · Edge AI & Computer Vision",
    },
    location: "Ciudad de México · MX",
    email: "rogelioleonardo18@gmail.com",
    phone: "+52 241 420 5334",
    github: "github.com/Rogelio756",
    linkedin: "linkedin.com/in/rogelio-leonardo-mendez-macias",
  },

  hero: {
    eyebrow: {
      es: "Disponible · Internship Q3 2026",
      en: "Available · Internship Q3 2026",
    },
    headline: {
      es: ["Sistemas de IA en tiempo real,", "construidos al filo del hardware."],
      en: ["Real-time AI systems,", "built at the edge of hardware."],
    },
    sub: {
      es: "Estudiante de Ingeniería Electrónica en UAM. Diseño, optimizo y despliego sistemas de visión por computadora y arquitecturas distribuidas que corren bajo restricciones de hardware. Traduzco problemas técnicos complejos en soluciones funcionales y escalables.",
      en: "Electronics Engineering student at UAM. I design, optimize and deploy computer vision systems and distributed architectures that run under hardware constraints. I translate complex technical problems into functional, scalable solutions.",
    },
    metrics: [
      { value: "3", label: { es: "papers aceptados · 2025–26", en: "papers accepted · 2025–26" } },
      { value: "5h+", label: { es: "trabajo manual / sem. ahorrado", en: "manual work / wk saved" } },
      { value: "RPi 5", label: { es: "edge target principal", en: "primary edge target" } },
    ],
  },

  projects: [
    {
      id: "vrp",
      cmd: "deploy vrp --target=raspi-5 --mode=realtime",
      name: "Vehicular Risk Prediction",
      tagline: {
        es: "Predicción de riesgo vehicular en tiempo real con CV + ML",
        en: "Real-time vehicular risk prediction with CV + ML",
      },
      stack: ["YOLOv8", "PyTorch", "OpenCV", "MQTT", "Python"],
      metrics: [
        { k: "role", v: "Team Lead" },
        { k: "scope", v: "detect+seg+temporal" },
        { k: "year", v: "2025–26" },
      ],
      body: {
        es: "Lideré un equipo en Samsung Innovation Campus para desarrollar un sistema en tiempo real de predicción de riesgo vehicular. Arquitectura que integra detección, segmentación y análisis temporal para toma de decisiones dinámica. Componentes modulares y reusables; evaluación sobre datasets y escenarios reales.",
        en: "Led a team at Samsung Innovation Campus to develop a real-time vehicular risk prediction system. Architecture integrating detection, segmentation and temporal analysis for dynamic decision-making. Modular reusable components; evaluation across real datasets and scenarios.",
      },
      year: "2025–26",
      client: "Samsung Innovation Campus",
    },
    {
      id: "adas",
      cmd: "run adas --microservices --transport=mqtt",
      name: "ADAS Real-Time Edge AI",
      tagline: {
        es: "Asistente al conductor con IA distribuida en el edge",
        en: "Driver assistance with distributed edge AI",
      },
      stack: ["Python μsvc", "MQTT", "REST", "OCR", "ONNX"],
      metrics: [
        { k: "role", v: "Lead SE" },
        { k: "arch", v: "microservices" },
        { k: "year", v: "2025" },
      ],
      body: {
        es: "Sistema ADAS en tiempo real para mejorar la conciencia situacional del conductor. Diseñé e implementé arquitectura distribuida con microservicios en Python, MQTT y REST APIs para procesar datos de percepción en vivo. Pipelines modulares de detección, OCR y procesamiento de eventos. Optimización iterativa para operar bajo restricciones de hardware.",
        en: "Real-time ADAS system to improve driver situational awareness. Designed and implemented a distributed architecture with Python microservices, MQTT and REST APIs to process live perception data. Modular pipelines for detection, OCR and event processing. Iterative optimization to operate under hardware constraints.",
      },
      year: "2025",
      client: "UAM Azcapotzalco",
      video: "https://www.youtube.com/embed/NZGxawmH6Ho",
    },
    {
      id: "modelo",
      cmd: "automate grupo-modelo --pipelines --dashboards",
      name: "Operations Automation",
      tagline: {
        es: "Automatización de flujos operativos en Grupo Modelo (AB InBev)",
        en: "Operational workflow automation at Grupo Modelo (AB InBev)",
      },
      stack: ["Python", "SQL", "Pandas", "Dashboards"],
      metrics: [
        { k: "saved", v: "5h+/wk" },
        { k: "role", v: "Intern" },
        { k: "year", v: "2023" },
      ],
      body: {
        es: "Software Automation Intern. Desarrollé flujos de automatización en Python y SQL que redujeron carga manual en más de 5 horas semanales. Trabajé con equipos de negocio para identificar ineficiencias y traducirlas en soluciones técnicas escalables. Diseñé pipelines de datos y dashboards para soporte de decisiones.",
        en: "Software Automation Intern. Built Python and SQL automation workflows that reduced manual workload by 5+ hours per week. Worked with business teams to identify inefficiencies and translate them into scalable technical solutions. Designed data pipelines and dashboards for decision support.",
      },
      year: "2023",
      client: "Grupo Modelo · AB InBev",
    },
    {
      id: "neo",
      cmd: "present neo-congress --topic=edge-perception",
      name: "NEO Congress Presentation",
      tagline: {
        es: "Arquitectura de sistemas de IA en tiempo real",
        en: "Real-time AI system architecture",
      },
      stack: ["Public Speaking", "Edge AI", "Systems Design"],
      metrics: [
        { k: "format", v: "Keynote" },
        { k: "scope", v: "Internat'l" },
        { k: "year", v: "2025" },
      ],
      body: {
        es: "Presenté arquitectura de sistemas de IA en tiempo real ante audiencia internacional en el NEO International Congress. Comunicación de diseño técnico y resultados a audiencias diversas — habilidad central que aplico en cada entrega de proyecto.",
        en: "Presented real-time AI system architecture to an international audience at the NEO International Congress. Communication of technical design and results to diverse audiences — a core skill applied across every project delivery.",
      },
      year: "2025",
      client: "NEO International Congress",
    },
    {
      id: "robotics",
      cmd: "compete robotics --autonomous --national-finalist",
      name: "National Robotics Finalist",
      tagline: {
        es: "Sistemas de robótica autónoma — finalista nacional",
        en: "Autonomous robotics systems — national finalist",
      },
      stack: ["Embedded C", "Sensors", "Control", "Mechatronics"],
      metrics: [
        { k: "result", v: "Finalist" },
        { k: "level", v: "National" },
        { k: "year", v: "2015–16" },
      ],
      body: {
        es: "Finalista nacional en competencias de robótica autónoma. Punto de origen de mi camino en sistemas embebidos: control en tiempo real, integración sensor-actuador y diseño de comportamiento robusto bajo incertidumbre del mundo real.",
        en: "National finalist in autonomous robotics competitions. Origin point of my path into embedded systems: real-time control, sensor-actuator integration, and designing robust behavior under real-world uncertainty.",
      },
      year: "2015–16",
      client: "National Competition",
    },
  ],

  research: [
    {
      type: "PAPER",
      year: "2025",
      venue: "NEO Conference Proceedings",
      title: {
        es: "ADAS System for Vehicular Perception",
        en: "ADAS System for Vehicular Perception",
      },
      authors: "R. L. Mendez Macias · published",
    },
    {
      type: "PAPER",
      year: "2026",
      venue: "MCPR 2026",
      title: {
        es: "ADAS Embedded Vision System",
        en: "ADAS Embedded Vision System",
      },
      authors: "R. L. Mendez Macias · accepted",
    },
    {
      type: "PAPER",
      year: "2026",
      venue: "MUTVI 2026",
      title: {
        es: "ADAS Project",
        en: "ADAS Project",
      },
      authors: "R. L. Mendez Macias · accepted",
    },
    {
      type: "TALK",
      year: "2025",
      venue: "NEO International Congress",
      title: {
        es: "Arquitectura de sistemas de IA en tiempo real",
        en: "Real-time AI system architecture",
      },
      authors: "Presentación · audiencia internacional",
    },
    {
      type: "PROG",
      year: "2023–26",
      venue: "Samsung Innovation Campus",
      title: {
        es: "Programa de Ingeniería en IoT & IA",
        en: "IoT & AI Engineering Program",
      },
      authors: "3 años · proyecto líder",
    },
  ],

  contact: {
    statement: {
      es: ["¿Tienes un sistema", "que tiene que ver, decidir o reaccionar?"],
      en: ["Got a system", "that needs to see, decide, or react?"],
    },
    sub: {
      es: "Buscando internship Q3 2026. Disponible para proyectos de Edge AI, Computer Vision, sistemas distribuidos y automatización. Comunicación técnica en español e inglés.",
      en: "Seeking Q3 2026 internship. Available for Edge AI, Computer Vision, distributed systems and automation projects. Technical communication in Spanish and English.",
    },
  },

  nav: [
    { id: "hero", label: { es: "Inicio", en: "Index" }, num: "00" },
    { id: "projects", label: { es: "Proyectos", en: "Projects" }, num: "01" },
    { id: "research", label: { es: "Investigación", en: "Research" }, num: "02" },
    { id: "contact", label: { es: "Contacto", en: "Contact" }, num: "03" },
  ],

  skills: {
    programming: ["Python", "C/C++", "Java", "SQL"],
    backend: ["REST APIs", "MQTT", "Event-driven", "Distributed systems"],
    ai: ["OpenCV", "YOLOv8", "PyTorch", "ONNX", "TensorFlow Lite"],
    embedded: ["Raspberry Pi 3/4/5", "Edge AI deployment"],
    tools: ["Docker", "Git", "Linux", "Postman"],
  },

  education: {
    school: "Universidad Autónoma Metropolitana (UAM)",
    degree: {
      es: "Ingeniería Electrónica · B.Sc.",
      en: "B.Sc. Electronics Engineering",
    },
    range: "2018–2026",
    grad: {
      es: "Graduación esperada · Sept 2026",
      en: "Expected graduation · Sept 2026",
    },
  },
};
