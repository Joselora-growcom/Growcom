export const landingAiEs = {
  portal: {
    ariaLabel: "Experiencia Inteligencia Artificial",
    header: "Growcom · Inteligencia Artificial",
  },
  hero: {
    badge: "Inteligencia Artificial · Enterprise",
    title1: "La IA no viene a reemplazar equipos.",
    title2: "Viene a multiplicar su capacidad.",
    sub: "Creamos IA personalizadas para sus negocios: agentes, automatizaciones y modelos hechos a la medida de cada empresa, aplicados a operaciones reales e integrados con las herramientas que ya utilizan.",
    ctaAudit: "Solicitar auditoría IA",
    ctaApps: "Ver aplicaciones",
  },
  finalCta: {
    title1: "Tu empresa ya genera datos.",
    title2: "Nosotros hacemos que trabajen para ti.",
    sub: "Cada proyecto es a medida para su negocio: definimos la IA que su operativa necesita, la desplegamos en producción y la afinamos con su equipo hasta generar impacto medible.",
    cta: "Solicitar auditoría gratuita",
  },
  workflow: {
    eyebrow: "Cómo piensa la IA",
    title1: "La IA no solo responde.",
    title2: "Entiende, analiza y ejecuta.",
    steps: [
      { id: "input", label: "Cliente escribe", short: "Input" },
      { id: "interpret", label: "IA interpreta", short: "NLP" },
      { id: "intent", label: "Detecta intención", short: "Intent" },
      { id: "context", label: "Analiza contexto", short: "Context" },
      { id: "action", label: "Ejecuta acción", short: "Action" },
      { id: "crm", label: "Actualiza CRM", short: "CRM" },
      { id: "notify", label: "Notifica al equipo", short: "Alert" },
    ],
  },
  applications: {
    eyebrow: "Soluciones a medida",
    title1: "IA aplicada a",
    title2: "operaciones reales",
    sub: "Desarrollamos inteligencia artificial personalizada para sus negocios: agentes, automatizaciones y modelos construidos sobre su contexto, sus procesos y sus datos — no plantillas genéricas.",
    highlights: [
      "IA personalizadas para su negocio",
      "Diseño según su operativa",
      "Integrada a sus herramientas reales",
    ],
    cards: [
      {
        title: "IA Comercial",
        items: [
          "Agente comercial a medida",
          "Scoring con tus criterios",
          "Seguimiento adaptado a tu funnel",
          "Predicción sobre tu histórico",
        ],
      },
      {
        title: "IA Atención al Cliente",
        items: [
          "Agentes con tu tono y políticas",
          "WhatsApp y canales que ya usas",
          "Respuestas con tu base de conocimiento",
          "Escalado según tus reglas",
        ],
      },
      {
        title: "IA Operativa",
        items: [
          "Flujos diseñados para tu operativa",
          "Extracción de tus documentos",
          "Automatización de tus procesos",
          "Menos tareas repetitivas internas",
        ],
      },
      {
        title: "IA Estratégica",
        items: [
          "Dashboards con tus KPIs",
          "Análisis sobre tus datos",
          "Reporting alineado a tu dirección",
          "Detección de patrones propios",
        ],
      },
    ],
  },
  integrations: {
    eyebrow: "Stack conectado",
    title1: "La IA no sirve si no está",
    title2: "integrada.",
    sub: "Conectamos inteligencia artificial con el stack real de tu empresa: CRM, comunicación, operaciones y datos en un único sistema vivo.",
    tools: ["CRM", "WhatsApp", "Slack", "Gmail", "ERPs", "APIs", "Notion", "Google Sheets"],
  },
  roi: {
    before: ["Tareas manuales", "Procesos lentos", "Errores operativos", "Equipos saturados"],
    after: ["Automatización", "Decisiones rápidas", "Sistemas conectados", "Eficiencia operativa"],
    metrics: [
      { label: "Reducción de tiempo", value: "-62%" },
      { label: "Velocidad de respuesta", value: "4.8x" },
      { label: "Productividad", value: "+41%" },
      { label: "Ahorro operativo", value: "28%" },
    ],
  },
  dashboard: {
    header: "Growcom · Agentes IA",
    title: "Centro de agentes en tiempo real",
    sub: "Orquestación, razonamiento y acción autónoma",
    liveBadge: "Agentes live",
    kpis: [
      { label: "Agentes activos", value: "4", trend: "en producción" },
      { label: "Acciones autónomas", value: "128/h", trend: "↑ 31%" },
      { label: "Precisión media", value: "96%", trend: "modelo + RAG" },
    ],
    deployed: "Agentes desplegados",
    agents: [
      { id: "sales", name: "Agente Comercial", role: "Califica y prioriza leads", status: "Ejecutando" },
      { id: "support", name: "Agente Soporte", role: "Resuelve tickets L1–L2", status: "En conversación" },
      { id: "ops", name: "Agente Operaciones", role: "Sincroniza ERP y CRM", status: "Procesando" },
    ],
    orchestrator: "Orquestador",
    orchestratorHint: "coordina agentes y herramientas",
    reasoningTitle: "Razonamiento en vivo",
    reasoning: [
      { agent: "Comercial", text: "Lead priorizado: intención alta + encaje ICP", time: "ahora" },
      { agent: "Orquestador", text: "Derivó consulta a Agente Soporte + contexto CRM", time: "12s" },
      { agent: "Soporte", text: "Respuesta generada con base de conocimiento (RAG)", time: "28s" },
      { agent: "Operaciones", text: "Pedido validado y actualizado en ERP sin intervención", time: "1m" },
    ],
    stack: ["LLM", "RAG", "Agentes", "Voz", "API"],
    inference: "inferencia · 840ms",
  },
} as const;

export const landingAiEn = {
  portal: {
    ariaLabel: "Artificial Intelligence experience",
    header: "Growcom · Artificial Intelligence",
  },
  hero: {
    badge: "Artificial Intelligence · Enterprise",
    title1: "AI is not here to replace teams.",
    title2: "It is here to multiply their capacity.",
    sub: "We build custom AI for your business: agents, automations and models tailored to each company, applied to real operations and integrated with the tools you already use.",
    ctaAudit: "Request AI audit",
    ctaApps: "View applications",
  },
  finalCta: {
    title1: "Your company already generates data.",
    title2: "We make it work for you.",
    sub: "Every project is bespoke: we define the AI your operations need, deploy it to production and tune it with your team until impact is measurable.",
    cta: "Request a free audit",
  },
  workflow: {
    eyebrow: "How AI thinks",
    title1: "AI does not just respond.",
    title2: "It understands, analyzes and executes.",
    steps: [
      { id: "input", label: "Customer writes", short: "Input" },
      { id: "interpret", label: "AI interprets", short: "NLP" },
      { id: "intent", label: "Detects intent", short: "Intent" },
      { id: "context", label: "Analyzes context", short: "Context" },
      { id: "action", label: "Executes action", short: "Action" },
      { id: "crm", label: "Updates CRM", short: "CRM" },
      { id: "notify", label: "Notifies the team", short: "Alert" },
    ],
  },
  applications: {
    eyebrow: "Tailored solutions",
    title1: "AI applied to",
    title2: "real operations",
    sub: "We develop custom artificial intelligence for your business: agents, automations and models built on your context, processes and data — not generic templates.",
    highlights: [
      "Custom AI for your business",
      "Designed for your operations",
      "Integrated with your real tools",
    ],
    cards: [
      {
        title: "Commercial AI",
        items: [
          "Custom sales agent",
          "Scoring with your criteria",
          "Follow-up adapted to your funnel",
          "Forecasting on your history",
        ],
      },
      {
        title: "Customer Support AI",
        items: [
          "Agents with your tone and policies",
          "WhatsApp and channels you already use",
          "Answers from your knowledge base",
          "Escalation per your rules",
        ],
      },
      {
        title: "Operations AI",
        items: [
          "Flows designed for your operations",
          "Extraction from your documents",
          "Automation of your processes",
          "Fewer repetitive internal tasks",
        ],
      },
      {
        title: "Strategic AI",
        items: [
          "Dashboards with your KPIs",
          "Analysis on your data",
          "Reporting aligned with leadership",
          "Detection of your own patterns",
        ],
      },
    ],
  },
  integrations: {
    eyebrow: "Connected stack",
    title1: "AI is useless if it is not",
    title2: "integrated.",
    sub: "We connect artificial intelligence with your company's real stack: CRM, communication, operations and data in one living system.",
    tools: ["CRM", "WhatsApp", "Slack", "Gmail", "ERPs", "APIs", "Notion", "Google Sheets"],
  },
  roi: {
    before: ["Manual tasks", "Slow processes", "Operational errors", "Overloaded teams"],
    after: ["Automation", "Faster decisions", "Connected systems", "Operational efficiency"],
    metrics: [
      { label: "Time reduction", value: "-62%" },
      { label: "Response speed", value: "4.8x" },
      { label: "Productivity", value: "+41%" },
      { label: "Operational savings", value: "28%" },
    ],
  },
  dashboard: {
    header: "Growcom · AI Agents",
    title: "Real-time agent hub",
    sub: "Orchestration, reasoning and autonomous action",
    liveBadge: "Agents live",
    kpis: [
      { label: "Active agents", value: "4", trend: "in production" },
      { label: "Autonomous actions", value: "128/h", trend: "↑ 31%" },
      { label: "Average accuracy", value: "96%", trend: "model + RAG" },
    ],
    deployed: "Deployed agents",
    agents: [
      { id: "sales", name: "Sales Agent", role: "Qualifies and prioritizes leads", status: "Running" },
      { id: "support", name: "Support Agent", role: "Resolves L1–L2 tickets", status: "In conversation" },
      { id: "ops", name: "Operations Agent", role: "Syncs ERP and CRM", status: "Processing" },
    ],
    orchestrator: "Orchestrator",
    orchestratorHint: "coordinates agents and tools",
    reasoningTitle: "Live reasoning",
    reasoning: [
      { agent: "Sales", text: "Lead prioritized: high intent + ICP fit", time: "now" },
      { agent: "Orchestrator", text: "Routed query to Support Agent + CRM context", time: "12s" },
      { agent: "Support", text: "Response generated with knowledge base (RAG)", time: "28s" },
      { agent: "Operations", text: "Order validated and updated in ERP with no manual step", time: "1m" },
    ],
    stack: ["LLM", "RAG", "Agents", "Voice", "API"],
    inference: "inference · 840ms",
  },
} as const;
