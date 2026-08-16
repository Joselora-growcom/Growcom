import { landingEn, landingEs } from "./landing";

export type Lang = "es" | "en";

export const translations = {
  es: {
    nav: {
      services: "Servicios",
      howWeWork: "Cómo trabajamos",
      caseStudies: "Casos de éxito",
      aboutUs: "Sobre nosotros",
      contact: "Contáctanos",
      openMenu: "Abrir menú",
    },
    hero: {
      h1Line1: "Construimos empresas",
      h1Emphasis: "más eficientes, rápidas",
      h1Line3: "y escalables",
      tagline: "Construyendo las empresas del futuro.",
      sub: "Automatización, IA y Data para transformar tu negocio",
      contentBadge: "Automatización · IA · Data",
      ctaPrimary: "Contáctanos",
      ctaSecondary: "Descubre cómo",
      scrollMouseLabel: "Bajar a la siguiente sección",
      videoError:
        "No se pudo reproducir el vídeo. Normalmente es por un códec no compatible (p. ej. H.265) o un archivo dañado.",
      videoHint: "Prueba abriéndolo directamente en:",
    },
    page2: {
      familiarBadge: "El reto habitual",
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
      badge: "Servicios",
      titleLine1: "Nuestros",
      titleHighlight: "servicios",
      sub: "Tres pilares tecnológicos para transformar tu negocio",
      exploreAi: "Explorar inteligencia artificial",
      exploreAutomation: "Explorar automatización",
      exploreData: "Explorar data y sistemas",
      viewMore: "Ver más",
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
      sub: "De la auditoría al despliegue: un enfoque de ingeniería, con entregables claros y automatizaciones que aguantan el día a día.",
      cards: [
        {
          number: "01",
          title: "Análisis del negocio",
          description:
            "Mapeamos sistemas reales (CRM, ERP, email, hojas de cálculo) y medimos tiempos de ciclo para priorizar automatizaciones con ROI.",
          rail: ["Inventario", "Disparadores", "Cuellos de botella", "Priorización"],
          bullets: [
            "Qué programas usáis hoy y cómo están conectados",
            "Formularios, avisos automáticos y tareas que se repiten cada día",
            "En qué pasos se pierde tiempo y qué errores se repiten",
            "Qué automatizar primero: lo que más impacto da con menos esfuerzo",
          ],
          imageAlt: "Análisis de datos en oficina",
        },
        {
          number: "02",
          title: "Diseño de sistemas",
          description:
            "Diseñamos los flujos operativos verificando que cada proceso quede correctamente estructurado, resulte rentable y aporte eficiencia a la organización.",
          rail: ["Diseño", "Revisión", "Rentabilidad", "Validación"],
          bullets: [
            "Definimos el flujo integral antes de su desarrollo e implantación",
            "Verificamos que la operativa quede ordenada, clara y documentada",
            "Evaluamos la rentabilidad del flujo para la empresa",
            "Garantizamos su eficiencia y el ahorro efectivo de tiempo y recursos",
          ],
          imageAlt: "Diseño de sistema en tablet",
        },
        {
          number: "03",
          title: "Implementación y optimización",
          description:
            "Implementamos el flujo y prestamos soporte mensual para mantener los procesos activos. Ante cualquier incidencia o imprevisto, respondemos con agilidad para su resolución.",
          rail: ["Implementación", "Soporte", "Mantenimiento", "Incidencias"],
          bullets: [
            "Implantamos el flujo en los sistemas de su organización",
            "Soporte mensual para asegurar la continuidad operativa",
            "Mantenimiento activo de los flujos automatizados",
            "Gestión ágil de errores e imprevistos operativos",
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
      teamEyebrow: "Equipo fundador",
      teamHeading: "Quiénes somos",
      teamSub:
        "Tres perfiles complementarios. Una misma obsesión: transformar operaciones con tecnología.",
      heroChips: ["3 socios fundadores", "Multinacional", "Tecnología aplicada"],
      team: [
        { name: "Manuel Franco", role: "Co-fundador & Co-CEO" },
        { name: "José Lora-Tamayo", role: "Co-fundador & Co-CEO" },
        { name: "Manuel Lora-Tamayo", role: "Co-fundador & Transformación Digital" },
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
          name: "Manuel Lora-Tamayo",
          role: "Co-fundador & Transformación Digital",
          summary:
            "Manuel ha desarrollado su carrera en consultoras digitales, liderando proyectos de transformación digital de gran envergadura para clientes de alta relevancia en el mercado. Su trabajo se centra en liderar iniciativas impulsadas por inteligencia artificial que redefinen procesos, elevan la eficiencia operativa y aceleran el crecimiento de organizaciones complejas.",
          highlights: [
            "Trayectoria en consultoras digitales liderando proyectos de alto impacto",
            "Transformación digital para clientes de gran relevancia en el mercado",
            "Liderazgo de iniciativas impulsadas por inteligencia artificial",
            "Enfoque en eficiencia operativa y cambio a escala empresarial",
          ],
        },
      ],
      purposeEyebrow: "Propósito",
      purposeTitle: "Convicción y misión",
      purposeSub:
        "Dos ideas que guían cada proyecto: cómo creemos que debe operar una empresa y hacia dónde empujamos cada transformación.",
      beliefLabel: "Nuestra convicción",
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
      badge: "Importante",
      titleLine1: "Si tu empresa no está optimizada,",
      titleHighlight: "estás perdiendo dinero",
      sub:
        "Cada día que pasa sin automatización es dinero que dejas sobre la mesa. Hablemos y descubre cuánto puedes ahorrar.",
      button: "Contáctanos",
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
      modalTitle: "Reserva una llamada gratuita",
    },
    meta: {
      home: "Growcom - IA, AUTOMATIZACIONES y DATA",
      ai: "Inteligencia Artificial para Empresas | Growcom",
      automation: "Automatización de Procesos para Empresas | Growcom",
      data: "Data & Sistemas para Empresas | Growcom",
      about: "Sobre nosotros | Growcom",
      contact: "Contacto | Growcom",
      call: "Solicitar llamada | Growcom",
    },
    footer: {
      rights: "© 2026 Growcom. Todos los derechos reservados.",
      instagram: "Instagram",
    },
    contact: {
      title: "Contacto",
      sub: "Cuéntanos brevemente qué necesitas y por qué quieres contactar con Growcom.",
      name: "Nombre completo",
      email: "Email",
      phone: "Teléfono",
      company: "Empresa",
      companyActivity: "En una frase, ¿a qué se dedica tu empresa?",
      reason: "¿Por qué nos contactas?",
      message: "Necesidades / contexto",
      next: "Siguiente",
      back: "Atrás",
      step: "Paso",
      submit: "Enviar",
      sending: "Enviando...",
      close: "Cerrar",
      ok: "Mensaje enviado correctamente. Te contactaremos pronto.",
      error: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
      invalidEmail: "Por favor, introduce un email válido.",
      fillAll: "Por favor, rellena todos los campos antes de enviar.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      companyPlaceholder: "Nombre de tu empresa",
      reasonPlaceholder: "Ej. automatización, IA, data...",
      messagePlaceholder: "Describe brevemente tu situación actual y qué te gustaría conseguir.",
      mailSubject: "Nuevo contacto web",
      mailCompany: "Empresa",
      mailReason: "Motivo de contacto",
      mailNeeds: "Necesidades / Contexto",
    },
    landing: landingEs,
  },
  en: {
    nav: {
      services: "Services",
      howWeWork: "How we work",
      caseStudies: "Case studies",
      aboutUs: "About us",
      contact: "Contact us",
      openMenu: "Open menu",
    },
    hero: {
      h1Line1: "We build businesses",
      h1Emphasis: "more efficient, faster",
      h1Line3: "and scalable",
      tagline: "Building the companies of the future.",
      sub: "Automation, AI and Data to transform your business",
      contentBadge: "Automation · AI · Data",
      ctaPrimary: "Contact us",
      ctaSecondary: "Discover how",
      scrollMouseLabel: "Go to the next section",
      videoError:
        "Could not play the video. This is usually due to an unsupported codec (e.g. H.265) or a corrupted file.",
      videoHint: "Try opening it directly at:",
    },
    page2: {
      familiarBadge: "A common challenge",
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
      badge: "Services",
      titleLine1: "Our",
      titleHighlight: "services",
      sub: "Three technology pillars to transform your business",
      exploreAi: "Explore artificial intelligence",
      exploreAutomation: "Explore automation",
      exploreData: "Explore data & systems",
      viewMore: "Learn more",
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
      sub: "From audit to rollout: an engineering-led approach with clear deliverables and automations built for real operations.",
      cards: [
        {
          number: "01",
          title: "Business analysis",
          description:
            "We map real systems (CRM, ERP, email, spreadsheets) and measure cycle times to prioritize automation with ROI.",
          rail: ["Inventory", "Triggers", "Bottlenecks", "Prioritization"],
          bullets: [
            "What tools you use today and how they connect",
            "Forms, automatic notifications and tasks that repeat every day",
            "Where time is lost and which errors keep happening",
            "What to automate first: highest impact with least effort",
          ],
          imageAlt: "Office data analysis",
        },
        {
          number: "02",
          title: "Systems design",
          description:
            "We design operational workflows ensuring each process is properly structured, financially viable and contributes to organizational efficiency.",
          rail: ["Design", "Review", "Profitability", "Validation"],
          bullets: [
            "We define the end-to-end workflow prior to development and deployment",
            "We verify that operations remain orderly, clear and documented",
            "We assess the financial viability of the workflow for the business",
            "We ensure efficiency and effective savings in time and resources",
          ],
          imageAlt: "Tablet system design",
        },
        {
          number: "03",
          title: "Implementation and optimization",
          description:
            "We implement the workflow and provide monthly support to keep processes active. In the event of any incident or unforeseen issue, we respond promptly to resolve it.",
          rail: ["Implementation", "Support", "Maintenance", "Incidents"],
          bullets: [
            "We deploy the workflow within your organization's systems",
            "Monthly support to ensure operational continuity",
            "Active maintenance of automated workflows",
            "Agile management of errors and operational contingencies",
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
      teamEyebrow: "Founding team",
      teamHeading: "Who we are",
      teamSub:
        "Three complementary profiles. One shared obsession: transforming operations with technology.",
      heroChips: ["3 founding partners", "Multinational", "Applied technology"],
      team: [
        { name: "Manuel Franco", role: "Co-founder & Co-CEO" },
        { name: "José Lora-Tamayo", role: "Co-founder & Co-CEO" },
        { name: "Manuel Lora-Tamayo", role: "Co-founder & Digital Transformation" },
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
          name: "Manuel Lora-Tamayo",
          role: "Co-founder & Digital Transformation",
          summary:
            "Manuel has built his career in digital consultancies, leading large-scale digital transformation projects for high-profile market clients. His work focuses on driving AI-led initiatives that redesign processes, raise operational efficiency and accelerate growth for complex organizations.",
          highlights: [
            "Background in digital consultancies leading high-impact projects",
            "Digital transformation for high-profile market clients",
            "Leadership of AI-driven transformation initiatives",
            "Focus on operational efficiency and enterprise-scale change",
          ],
        },
      ],
      purposeEyebrow: "Purpose",
      purposeTitle: "Conviction and mission",
      purposeSub:
        "Two ideas that guide every project: how we believe a company should operate and where we push every transformation.",
      beliefLabel: "Our conviction",
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
      badge: "Important",
      titleLine1: "If your company is not optimized,",
      titleHighlight: "you are losing money",
      sub:
        "Every day without automation is money left on the table. Let's talk and discover how much you can save.",
      button: "Contact us",
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
      modalTitle: "Book a free call",
    },
    meta: {
      home: "Growcom - AI, AUTOMATION and DATA",
      ai: "Artificial Intelligence for Business | Growcom",
      automation: "Business Process Automation | Growcom",
      data: "Data & Systems for Business | Growcom",
      about: "About us | Growcom",
      contact: "Contact | Growcom",
      call: "Request a call | Growcom",
    },
    footer: {
      rights: "© 2026 Growcom. All rights reserved.",
      instagram: "Instagram",
    },
    contact: {
      title: "Contact",
      sub: "Tell us briefly what you need and why you are contacting Growcom.",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      company: "Company",
      companyActivity: "In one sentence, what does your company do?",
      reason: "Why are you contacting us?",
      message: "Needs / context",
      next: "Next",
      back: "Back",
      step: "Step",
      submit: "Send",
      sending: "Sending...",
      close: "Close",
      ok: "Message sent successfully. We will contact you soon.",
      error: "Could not send the message. Please try again.",
      invalidEmail: "Please enter a valid email address.",
      fillAll: "Please fill in all fields before sending.",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      companyPlaceholder: "Your company name",
      reasonPlaceholder: "E.g. automation, AI, data...",
      messagePlaceholder: "Briefly describe your current situation and what you would like to achieve.",
      mailSubject: "New web contact",
      mailCompany: "Company",
      mailReason: "Contact reason",
      mailNeeds: "Needs / Context",
    },
    landing: landingEn,
  },
} as const;

export type TranslationKey = keyof typeof translations.es;
