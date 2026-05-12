export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      howWeWork: "Cómo trabajamos",
      caseStudies: "Casos de éxito",
      aboutUs: "Sobre nosotros",
      contact: "Contacto",
      openMenu: "Abrir menú",
    },
    hero: {
      h1Line1: "Construimos empresas",
      h1Emphasis: "más eficientes, rápidas",
      h1Line3: "y escalables",
      tagline: "Construyendo las empresas del futuro.",
      sub: "Automatización, IA y Data para transformar tu negocio",
      ctaPrimary: "Reserva una llamada",
      ctaSecondary: "Descubre cómo",
      scroll: "SCROLL",
      videoError:
        "No se pudo reproducir el vídeo. Normalmente es por un códec no compatible (p. ej. H.265) o un archivo dañado.",
      videoHint: "Prueba abriéndolo directamente en:",
    },
    page2: {
      familiarTitle: "¿Te resulta familiar?",
      familiarSub:
        "La mayoría de empresas pierden dinero cada día por no optimizar sus operaciones",
      painPoints: {
        manual: {
          title: "Procesos manuales",
          text: "Tareas repetitivas que consumen el tiempo de tu equipo",
        },
        disconnected: {
          title: "Herramientas desconectadas",
          text: "Falta de integración entre tus sistemas y plataformas",
        },
        timeLoss: {
          title: "Pérdida de tiempo",
          text: "Horas perdidas en tareas que podrían ser automáticas",
        },
        slowDecisions: {
          title: "Decisiones lentas",
          text: "Falta de datos en tiempo real para tomar mejores decisiones",
        },
      },
    },
    solution: {
      badge: "La solución",
      title1: "Transformamos tu empresa",
      title2Prefix: "con",
      title2Emphasis: "tecnología inteligente",
      sub:
        "Implementamos sistemas que hacen tu negocio más eficiente, rápido y escalable",
      cards: {
        automation: {
          title: "Automatización de procesos",
          text:
            "Eliminamos tareas manuales y repetitivas para que tu equipo se enfoque en lo importante",
        },
        integration: {
          title: "Integración de herramientas",
          text: "Conectamos todas tus plataformas para que trabajen como un solo sistema",
        },
        data: {
          title: "Sistemas basados en datos",
          text: "Construimos infraestructuras que te dan información en tiempo real",
        },
        ai: {
          title: "Inteligencia artificial",
          text:
            "Implementamos IA para predecir, optimizar y mejorar tus procesos de negocio",
        },
      },
      imgLeftAlt: "Tecnología y automatización",
      imgRightAlt: "IA aplicada al negocio",
    },
    services: {
      title: "Nuestros servicios",
      sub: "Tres pilares tecnológicos para transformar tu negocio",
      cards: {
        automation: {
          title: "Automatización",
          description:
            "Automatizamos tus procesos de negocio para que tu equipo pueda enfocarse en crecer, no en tareas repetitivas.",
          bullets: [
            "Ahorro de hasta 40% del tiempo operativo",
            "Reducción de errores humanos",
            "Flujos de trabajo optimizados",
            "ROI visible en semanas",
          ],
        },
        ai: {
          title: "Inteligencia Artificial",
          description:
            "Implementamos IA práctica que mejora tus procesos, predice resultados y optimiza decisiones de negocio.",
          bullets: [
            "Predicción de ventas y demanda",
            "Atención al cliente automatizada",
            "Análisis de comportamiento",
            "Optimización de recursos",
          ],
        },
        data: {
          title: "Data & Sistemas",
          description:
            "Diseñamos infraestructuras de datos que convierten información en decisiones estratégicas en tiempo real.",
          bullets: [
            "Dashboards en tiempo real",
            "Integración de múltiples fuentes",
            "Reportes automatizados",
            "Data pipeline escalable",
          ],
        },
      },
    },
    results: {
      title1: "Resultados que impactan",
      title2: "tu cuenta de resultados",
      sub: "Nuestros clientes ven mejoras medibles en semanas, no meses",
      cards: [
        { value: "40%", label: "Más eficiencia", description: "Reducción promedio en tiempo operativo" },
        { value: "20h", label: "Ahorro de tiempo", description: "Semanales recuperadas por empleado" },
        { value: "10x", label: "Mejor toma de decisiones", description: "Más rápido acceso a datos críticos" },
        { value: "∞", label: "Escalabilidad", description: "Crecimiento sin límites operativos" },
      ],
    },
    about: {
      badge: "SOBRE NOSOTROS",
      title: "Quiénes somos",
      p1:
        "En Growcom actuamos como growth partner para marcas de ecommerce que buscan crecimiento inmediato con estructura, control y rentabilidad.",
      p2:
        "Trabajamos junto a los equipos de cada marca para diseñar y ejecutar sistemas de crecimiento 360º que integran adquisición, conversión y retención dentro de una misma estrategia operativa.",
      p3:
        "Nuestro enfoque se basa en la creación de valor, la toma de decisiones basada en datos y la implementación de procesos accionables desde el primer momento.",
      p4:
        "Colaboramos principalmente con marcas de salud, bienestar y suplementación que ya cuentan con tracción y necesitan escalar de forma predecible sin depender de freelancers, agencias tradicionales o acciones aisladas.",
    },
    howItWorksSection: {
      title: "Cómo trabajamos",
      sub: "Un proceso simple, transparente y orientado a resultados",
      cards: [
        {
          number: "01",
          title: "Análisis del negocio",
          description:
            "Estudiamos tus procesos actuales, identificamos ineficiencias y detectamos oportunidades de automatización.",
          bullets: [
            "Auditoría de procesos",
            "Mapeo de herramientas",
            "Análisis de flujos de trabajo",
            "Identificación de quick wins",
          ],
          imageAlt: "Análisis de datos en oficina",
        },
        {
          number: "02",
          title: "Diseño de sistemas",
          description:
            "Diseñamos la arquitectura tecnológica perfecta para tu negocio, priorizando resultados rápidos y escalabilidad.",
          bullets: [
            "Arquitectura técnica",
            "Integraciones necesarias",
            "Roadmap de implementación",
            "Definición de métricas",
          ],
          imageAlt: "Diseño de sistema en tablet",
        },
        {
          number: "03",
          title: "Implementación y optimización",
          description:
            "Implementamos, testeamos y optimizamos continuamente para garantizar el máximo rendimiento de tus sistemas.",
          bullets: [
            "Desarrollo e integración",
            "Testing y validación",
            "Formación del equipo",
            "Optimización continua",
          ],
          imageAlt: "Portátil con código",
        },
      ],
    },
    aboutSection: {
      title: "Sobre nosotros",
      intro:
        "Growcom nace de tres socios que comenzaron juntos en la universidad y se desarrollaron en entornos multinacionales y diferentes países. Con esa experiencia, decidimos crear un proyecto con un objetivo claro: transformar cómo operan las empresas desde dentro, usando la última tecnología del mercado. Nos implicamos al máximo en cada cliente para que el cambio se note desde el primer día.",
      bannerAlt: "Equipo directivo en reunión",
      bannerQuote:
        "Creemos que cualquier empresa puede operar como una gran compañía, si está bien construida desde dentro y preparada para escalar en un entorno que no deja de cambiar.",
      team: [
        { name: "Manuel Franco", role: "Co-fundador & Co-CEO" },
        { name: "José Lora-Tamayo", role: "Co-fundador & Co-CEO" },
        { name: "Aitor Bernal", role: "Co-fundador & CTO" },
      ],
      backgroundButton: "Ver nuestro background",
      backgroundTag: "Perfil del socio",
      closeBackground: "Cerrar",
      backgrounds: [
        {
          name: "Manuel Franco",
          role: "Co-fundador & Co-CEO",
          summary:
            "Manuel lidera la visión comercial y estratégica de Growcom. Ha desarrollado su experiencia en el sector financiero, dando soporte a la implementación de nuevas tecnologías, incluida la IA aplicada a fondos de inversión, para mejorar la eficiencia operativa y la toma de decisiones.",
          highlights: [
            "Experiencia en el sector financiero y operaciones de inversión",
            "Soporte en implementación de nuevas tecnologías e IA",
            "Enfoque en eficiencia operativa y toma de decisiones basada en datos",
          ],
        },
        {
          name: "José Lora-Tamayo",
          role: "Co-fundador & Co-CEO",
          summary:
            "José coordina la ejecución end-to-end con clientes y equipos. Cuenta con experiencia en empresas multinacionales y con un MBA en una de las universidades más prestigiosas de Estados Unidos. Además, su trayectoria como atleta de alto rendimiento refuerza un estilo de liderazgo basado en disciplina, exigencia y foco en resultados.",
          highlights: [
            "Experiencia profesional en empresas multinacionales",
            "MBA en una universidad de referencia en Estados Unidos",
            "Trayectoria como atleta de alto rendimiento",
            "Liderazgo orientado a ejecución, disciplina y resultados",
          ],
        },
        {
          name: "Aitor Bernal",
          role: "Co-fundador & CTO",
          summary:
            "Aitor, CTO de Growcom e ingeniero informático, lidera la arquitectura tecnológica. Su trayectoria combina producto digital, datos e integración de sistemas para construir soluciones robustas y escalables.",
          highlights: [
            "Ingeniero informático especializado en arquitectura de software",
            "Definición de arquitectura técnica y decisiones de stack",
            "Integración de datos, automatización e IA aplicada",
          ],
        },
      ],
      missionTitle: "Nuestra misión",
      missionText:
        "Nuestro objetivo es simple pero ambicioso: hacer que cada empresa, independientemente de su tamaño o presupuesto, pueda competir con las mismas herramientas y capacidades tecnológicas que utilizan las corporaciones más grandes del mundo. La transformación digital no es un privilegio, es un derecho empresarial.",
    },
    successStories: {
      titleLine1: "Empresas que ya están",
      titleHighlight: "ganando con Growcom",
      sub: "Casos reales de empresas que multiplicaron su eficiencia",
      testimonials: [
        {
          quote:
            '"Trabajar con Growcom nos ha ayudado a ordenar y automatizar procesos clave del día a día. Ahora el equipo va mucho más rápido y podemos centrarnos en hacer crecer la marca."',
          name: "Luis Tejera",
          role: "Co-Fundador de Fammante",
          initial: "L",
        },
        {
          quote:
            '"Nos ayudaron a automatizar la operativa interna del despacho con muchísimo detalle. Gracias a eso hemos podido escalar mejor y dar más estabilidad a nuestros clientes más importantes."',
          name: "Iñigo Gómez",
          role: "CEO - Gómez Berruezo Abogados",
          initial: "I",
        },
        {
          quote:
            '"La automatización con IA que implementamos con Growcom ha sido un antes y un después. Hoy damos un servicio mucho mejor y, además, el equipo trabaja con menos carga y más tranquilidad."',
          name: "Roberto Gangutia",
          role: "Director General - Asesoría Velar",
          initial: "R",
        },
      ],
      clientsTitle: "Clientes con los que trabajamos",
    },
    urgencyCta: {
      badge: "⚠ IMPORTANTE",
      titleLine1: "Si tu empresa no está optimizada,",
      titleHighlight: "estás perdiendo dinero",
      sub:
        "Cada día que pasa sin automatización es dinero que dejas sobre la mesa. Hablemos y descubre cuánto puedes ahorrar.",
      button: "Reserva una llamada gratuita",
      bullets: [
        "30 minutos de consultoría gratis",
        "Análisis de optimización incluido",
        "Sin compromiso",
      ],
    },
    howItWorks: {
      badge: "¿CÓMO FUNCIONA?",
      title: "Los Tres Pasos",
      steps: [
        {
          number: "1",
          title: "paso 1",
          description:
            "Captación de atención, ya sea orgánica o mediante tráfico pagado, dirigida a un embudo de ventas apoyado en contenido de alto valor y creatividades virales.",
          items: ["Embudo De Venta Alto Valor", "Captación De Trafico", "Creatividades Virales"],
        },
        {
          number: "2",
          title: "paso 2",
          description:
            "Creación de un sistema para convertir esa atención en ventas, utilizando ofertas de adquisición ganadoras.",
          items: ["Oferta De Adquisición Ganadora", "Sistema De Conversion De Trafico"],
        },
        {
          number: "3",
          title: "paso 3",
          description:
            "Desarrollo de un proceso posventa para aumentar el valor de vida de cada cliente mediante el uso de marketing por email.",
          items: ["Dominio De Marketing Por Email", "Resultados Garantizados"],
        },
      ],
    },
    calendly: {
      title: "¿Listo para escalar?",
      sub: "Selecciona una hora a continuación para hablar de tu estrategia de crecimiento.",
    },
    footer: {
      rights: "© 2026 Growcom. Todos los derechos reservados.",
      instagram: "Instagram",
    },
  },
  en: {
    nav: {
      services: "Services",
      howWeWork: "How we work",
      caseStudies: "Case studies",
      aboutUs: "About us",
      contact: "Contact",
      openMenu: "Open menu",
    },
    hero: {
      h1Line1: "We build businesses",
      h1Emphasis: "more efficient, faster",
      h1Line3: "and scalable",
      tagline: "Building the companies of the future.",
      sub: "Automation, AI and Data to transform your business",
      ctaPrimary: "Book a call",
      ctaSecondary: "Discover how",
      scroll: "SCROLL",
      videoError:
        "Could not play the video. This is usually due to an unsupported codec (e.g. H.265) or a corrupted file.",
      videoHint: "Try opening it directly at:",
    },
    page2: {
      familiarTitle: "Does this feel familiar?",
      familiarSub:
        "Most companies lose money every day by not optimizing their operations",
      painPoints: {
        manual: { title: "Manual processes", text: "Repetitive tasks that consume your team’s time" },
        disconnected: {
          title: "Disconnected tools",
          text: "Lack of integration between your systems and platforms",
        },
        timeLoss: { title: "Time loss", text: "Hours wasted on tasks that could be automated" },
        slowDecisions: {
          title: "Slow decisions",
          text: "Lack of real-time data to make better decisions",
        },
      },
    },
    solution: {
      badge: "The solution",
      title1: "We transform your company",
      title2Prefix: "with",
      title2Emphasis: "intelligent technology",
      sub: "We implement systems that make your business more efficient, faster and scalable",
      cards: {
        automation: {
          title: "Process automation",
          text: "We eliminate manual and repetitive tasks so your team focuses on what matters",
        },
        integration: {
          title: "Tool integration",
          text: "We connect all your platforms so they work as one system",
        },
        data: {
          title: "Data-driven systems",
          text: "We build infrastructures that give you real-time information",
        },
        ai: {
          title: "Artificial intelligence",
          text: "We implement AI to predict, optimize and improve your business processes",
        },
      },
      imgLeftAlt: "Technology and automation",
      imgRightAlt: "AI applied to business",
    },
    services: {
      title: "Our services",
      sub: "Three technology pillars to transform your business",
      cards: {
        automation: {
          title: "Automation",
          description:
            "We automate your business processes so your team can focus on growth, not repetitive tasks.",
          bullets: [
            "Up to 40% operational time saved",
            "Reduced human errors",
            "Optimized workflows",
            "ROI visible in weeks",
          ],
        },
        ai: {
          title: "Artificial Intelligence",
          description:
            "We implement practical AI that improves processes, predicts outcomes and optimizes decisions.",
          bullets: [
            "Sales and demand forecasting",
            "Automated customer support",
            "Behavior analysis",
            "Resource optimization",
          ],
        },
        data: {
          title: "Data & Systems",
          description:
            "We design data infrastructures that turn information into real-time strategic decisions.",
          bullets: [
            "Real-time dashboards",
            "Multiple-source integrations",
            "Automated reports",
            "Scalable data pipeline",
          ],
        },
      },
    },
    results: {
      title1: "Results that impact",
      title2: "your bottom line",
      sub: "Our clients see measurable improvements in weeks, not months",
      cards: [
        { value: "40%", label: "More efficiency", description: "Average reduction in operational time" },
        { value: "20h", label: "Time saved", description: "Weekly hours recovered per employee" },
        { value: "10x", label: "Better decisions", description: "Faster access to critical data" },
        { value: "∞", label: "Scalability", description: "Growth without operational limits" },
      ],
    },
    about: {
      badge: "ABOUT US",
      title: "Who we are",
      p1:
        "At Growcom we act as a growth partner for ecommerce brands seeking immediate growth with structure, control and profitability.",
      p2:
        "We work alongside each brand’s teams to design and execute 360° growth systems that integrate acquisition, conversion and retention within one operational strategy.",
      p3:
        "Our approach is based on value creation, data-driven decision-making and implementing actionable processes from day one.",
      p4:
        "We mainly collaborate with health, wellness and supplementation brands that already have traction and need to scale predictably without relying on freelancers, traditional agencies or isolated actions.",
    },
    howItWorksSection: {
      title: "How we work",
      sub: "A simple, transparent process focused on results",
      cards: [
        {
          number: "01",
          title: "Business analysis",
          description:
            "We study your current processes, identify inefficiencies, and detect automation opportunities.",
          bullets: [
            "Process audit",
            "Tools mapping",
            "Workflow analysis",
            "Quick wins identification",
          ],
          imageAlt: "Office data analysis",
        },
        {
          number: "02",
          title: "Systems design",
          description:
            "We design the perfect technology architecture for your business, prioritizing fast results and scalability.",
          bullets: [
            "Technical architecture",
            "Required integrations",
            "Implementation roadmap",
            "Metrics definition",
          ],
          imageAlt: "Tablet system design",
        },
        {
          number: "03",
          title: "Implementation and optimization",
          description:
            "We implement, test, and continuously optimize to guarantee maximum performance from your systems.",
          bullets: [
            "Development and integration",
            "Testing and validation",
            "Team training",
            "Continuous optimization",
          ],
          imageAlt: "Laptop with code",
        },
      ],
    },
    aboutSection: {
      title: "About us",
      intro:
        "Growcom was founded by three partners who started together at university and later developed their careers in multinational environments across different countries. With that experience, we decided to build a project with a clear objective: transform how companies operate from within by using the latest technology available in the market.\n\nWe fully commit to every client so the change is noticeable from day one.",
      bannerAlt: "Leadership team meeting",
      bannerQuote:
        "We believe any company can operate like a large enterprise when it is built correctly from within and prepared to scale in an ever-changing environment.",
      team: [
        { name: "Manuel Franco", role: "Co-founder & Co-CEO" },
        { name: "José Lora-Tamayo", role: "Co-founder & Co-CEO" },
        { name: "Aitor Bernal", role: "Co-founder & CTO" },
      ],
      backgroundButton: "View our background",
      backgroundTag: "Partner profile",
      closeBackground: "Close",
      backgrounds: [
        {
          name: "Manuel Franco",
          role: "Co-founder & Co-CEO",
          summary:
            "Manuel leads Growcom's commercial and strategic vision. He has built experience in the financial sector, supporting the implementation of new technologies, including AI applied to investment funds, to improve operational efficiency and decision-making.",
          highlights: [
            "Experience in the financial sector and investment operations",
            "Support in implementing new technologies and applied AI",
            "Focus on operational efficiency and data-driven decision-making",
          ],
        },
        {
          name: "José Lora-Tamayo",
          role: "Co-founder & Co-CEO",
          summary:
            "José coordinates end-to-end execution with clients and teams. He has professional experience in multinational companies and holds an MBA from one of the most prestigious universities in the United States. In addition, his background as a high-performance athlete strengthens a leadership style based on discipline, high standards, and results.",
          highlights: [
            "Professional experience in multinational companies",
            "MBA from a leading university in the United States",
            "Background as a high-performance athlete",
            "Execution-focused leadership with discipline and results",
          ],
        },
        {
          name: "Aitor Bernal",
          role: "Co-founder & CTO",
          summary:
            "Aitor, Growcom's CTO and a computer engineer, leads the technology architecture. His background combines digital product, data and systems integration to build robust, scalable solutions.",
          highlights: [
            "Computer engineer specialized in software architecture",
            "Technical architecture definition and stack decisions",
            "Data integration, automation and applied AI",
          ],
        },
      ],
      missionTitle: "Our mission",
      missionText:
        "Our goal is simple yet ambitious: make sure every company, regardless of size or budget, can compete with the same technological tools and capabilities used by the world's largest corporations. Digital transformation is not a privilege, it is a business right.",
    },
    successStories: {
      titleLine1: "Companies already",
      titleHighlight: "winning with Growcom",
      sub: "Real cases of businesses that multiplied their efficiency",
      testimonials: [
        {
          quote:
            '"Working with Growcom helped us structure and automate key day-to-day processes. Our team now moves much faster and we can focus on growing the brand."',
          name: "Luis Tejera",
          role: "Co-Founder - Fammante",
          initial: "L",
        },
        {
          quote:
            '"They helped us automate our internal law-firm operations with great attention to detail. That allowed us to scale better and provide more consistency to our most important clients."',
          name: "Iñigo Gómez",
          role: "CEO - Gómez Berruezo Abogados",
          initial: "I",
        },
        {
          quote:
            '"The AI automation we implemented with Growcom has been a turning point. We now deliver a much better service and our team works with less pressure and better quality of life."',
          name: "Roberto Gangutia",
          role: "Managing Director - Asesoria Velar",
          initial: "R",
        },
      ],
      clientsTitle: "Clients we work with",
    },
    urgencyCta: {
      badge: "⚠ IMPORTANT",
      titleLine1: "If your company is not optimized,",
      titleHighlight: "you are losing money",
      sub:
        "Every day without automation is money left on the table. Let's talk and discover how much you can save.",
      button: "Book a free call",
      bullets: [
        "30-minute free consultation",
        "Optimization analysis included",
        "No commitment",
      ],
    },
    howItWorks: {
      badge: "HOW IT WORKS",
      title: "The Three Steps",
      steps: [
        {
          number: "1",
          title: "step 1",
          description:
            "Attention capture (organic or paid traffic) directed to a sales funnel supported by high-value content and viral creatives.",
          items: ["High-value sales funnel", "Traffic acquisition", "Viral creatives"],
        },
        {
          number: "2",
          title: "step 2",
          description:
            "Build a system to convert that attention into sales using winning acquisition offers.",
          items: ["Winning acquisition offer", "Traffic conversion system"],
        },
        {
          number: "3",
          title: "step 3",
          description:
            "Post-purchase process to increase customer lifetime value using email marketing.",
          items: ["Email marketing mastery", "Guaranteed results"],
        },
      ],
    },
    calendly: {
      title: "Ready to scale?",
      sub: "Pick a time below to talk about your growth strategy.",
    },
    footer: {
      rights: "© 2026 Growcom. All rights reserved.",
      instagram: "Instagram",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.es;
