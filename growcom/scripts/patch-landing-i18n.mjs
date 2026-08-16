import fs from "fs";
import path from "path";

const root = path.join(import.meta.dirname, "..", "app", "components");

function patch(file, fn) {
  const p = path.join(root, file);
  let s = fs.readFileSync(p, "utf8");
  const next = fn(s);
  if (next !== s) {
    fs.writeFileSync(p, next);
    console.log("patched", file);
  } else {
    console.log("skip", file);
  }
}

// Automation landing page
patch("automation-landing/AutomationLandingPage.tsx", (s) => {
  if (s.includes("useI18n")) return s;
  s = s.replace(
    'import AutomationWorkflowMockup from "./AutomationWorkflowMockup";',
    'import { useI18n } from "../../i18n/LanguageProvider";\nimport AutomationWorkflowMockup from "./AutomationWorkflowMockup";',
  );
  s = s.replace(
    "export default function AutomationLandingPage({ embedded = false }: AutomationLandingPageProps) {\n  const reduce = useReducedMotion();",
    `export default function AutomationLandingPage({ embedded = false }: AutomationLandingPageProps) {
  const { t } = useI18n();
  const hero = t.landing.automation.hero;
  const finalCta = t.landing.automation.finalCta;
  const lc = t.landing.common;
  const reduce = useReducedMotion();`,
  );
  s = s.replace("Automatización · Enterprise", "{hero.badge}");
  s = s.replace(
    "Automatizamos procesos para que tu empresa pueda crecer sin aumentar carga operativa.",
    "{hero.title}",
  );
  s = s.replace(
    /Diseñamos sistemas que eliminan tareas repetitivas[\s\S]*?genera valor\./,
    "{hero.sub}",
  );
  s = s.replace("Solicitar auditoría", "{lc.requestAudit}");
  s = s.replace("Ver procesos automatizables", "{hero.ctaProcesses}");
  s = s.replace("Lo que antes dependía de personas,", "{finalCta.title1}");
  s = s.replace("ahora puede depender de sistemas.", "{finalCta.title2}");
  s = s.replace(
    /Detectamos los procesos de tu empresa[\s\S]*?velocidad operativa\./,
    "{finalCta.sub}",
  );
  s = s.replace("Solicitar auditoría gratuita", "{lc.requestFreeAudit}");
  s = s.replace("Hablar con Growcom", "{lc.talkToGrowcom}");
  return s;
});

// Data landing page
patch("data-landing/DataLandingPage.tsx", (s) => {
  if (s.includes("useI18n")) return s;
  s = s.replace(
    'import DataWhatWeDoSection from "./DataWhatWeDoSection";',
    'import { useI18n } from "../../i18n/LanguageProvider";\nimport DataWhatWeDoSection from "./DataWhatWeDoSection";',
  );
  s = s.replace(
    "export default function DataLandingPage({ embedded = false }: DataLandingPageProps) {\n  const reduce = useReducedMotion();",
    `export default function DataLandingPage({ embedded = false }: DataLandingPageProps) {
  const { t } = useI18n();
  const hero = t.landing.data.hero;
  const finalCta = t.landing.data.finalCta;
  const lc = t.landing.common;
  const reduce = useReducedMotion();`,
  );
  s = s.replace("Data & Sistemas · Enterprise", "{hero.badge}");
  s = s.replace("Tus datos no sirven de nada si no puedes utilizarlos.", "{hero.title}");
  s = s.replace(
    /Diseñamos sistemas que conectan herramientas[\s\S]*?inteligentes\./,
    "{hero.sub}",
  );
  s = s.replace("Solicitar auditoría", "{lc.requestAudit}");
  s = s.replace("Ver arquitectura", "{hero.ctaArchitecture}");
  s = s.replace("Decidir sin datos cuesta dinero.", "{finalCta.title}");
  s = s.replace(
    /Conectamos herramientas, centralizamos información[\s\S]*?control\./,
    "{finalCta.sub}",
  );
  s = s.replace("Solicitar auditoría gratuita", "{lc.requestFreeAudit}");
  s = s.replace("Hablar con Growcom", "{lc.talkToGrowcom}");
  return s;
});

console.log("done");
