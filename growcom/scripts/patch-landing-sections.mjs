import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const base = path.join(__dirname, "../app/components");

function read(f) {
  return fs.readFileSync(path.join(base, f), "utf8");
}
function write(f, s) {
  fs.writeFileSync(path.join(base, f), s);
  console.log("wrote", f);
}

function ensureImport(s, importLine) {
  if (s.includes("useI18n")) return s;
  return s.replace(/("use client";\r?\n\r?\n)/, `$1${importLine}\n`);
}

function ensureHook(s, hookBlock) {
  if (s.includes("const { t } = useI18n()")) return s;
  return s.replace(/export default function \w+\([^)]*\) \{\r?\n/, (m) => m + hookBlock);
}

// AiDashboardMockup
{
  let s = read("ai-landing/AiDashboardMockup.tsx");
  s = ensureImport(s, 'import { useI18n } from "../../i18n/LanguageProvider";');
  if (!s.includes("const dash = t.landing.ai.dashboard")) {
    s = s.replace(
      /const kpis = \[[\s\S]*?\] as const;\r?\n\r?\nconst agents = \[[\s\S]*?\] as const;\r?\n\r?\nconst reasoning = \[[\s\S]*?\] as const;\r?\n\r?\nconst stack = \[[\s\S]*?\] as const;\r?\n\r?\nfunction AgentIcon/,
      `const AGENT_ACCENT = {
  sales: { accent: "from-violet-500/30 to-cyan-500/10", dot: "bg-violet-400" },
  support: { accent: "from-cyan-500/30 to-blue-500/10", dot: "bg-cyan-400" },
  ops: { accent: "from-sky-500/25 to-indigo-500/10", dot: "bg-sky-400" },
} as const;

function AgentIcon`,
    );
    s = ensureHook(
      s,
      `  const { t } = useI18n();
  const dash = t.landing.ai.dashboard;
  const lc = t.landing.common;
  const kpis = dash.kpis;
  const agents = dash.agents.map((a) => ({ ...a, ...AGENT_ACCENT[a.id as keyof typeof AGENT_ACCENT] }));
  const reasoning = dash.reasoning;
  const stack = dash.stack;
`,
    );
    s = s.replace("Growcom · Agentes IA", "{dash.header}");
    s = s.replace("Centro de agentes en tiempo real", "{dash.title}");
    s = s.replace("Orquestación, razonamiento y acción autónoma", "{dash.sub}");
    s = s.replace("Agentes live", "{dash.liveBadge}");
    s = s.replace("Agentes desplegados", "{dash.deployed}");
    s = s.replace("<span className=\"font-semibold text-white/80\">Orquestador</span> coordina agentes y herramientas", "<span className=\"font-semibold text-white/80\">{dash.orchestrator}</span> {dash.orchestratorHint}");
    s = s.replace("Razonamiento en vivo", "{dash.reasoningTitle}");
    s = s.replace("inferencia · 840ms", "{dash.inference}");
  }
  write("ai-landing/AiDashboardMockup.tsx", s);
}

// AutomationWorkflowMockup
{
  let s = read("automation-landing/AutomationWorkflowMockup.tsx");
  s = ensureImport(s, 'import { useI18n } from "../../i18n/LanguageProvider";');
  if (!s.includes("const wm = t.landing.automation.workflowMockup")) {
    s = s.replace(
      /const steps = \[[\s\S]*?\];\r?\n\r?\nconst statusStyle = \{[\s\S]*?\};\r?\n\r?\nexport default function/,
      `const STATUS_CLASS = {
  received: "border-sky-400/40 bg-sky-400/10 text-sky-200",
  processing: "border-amber-400/40 bg-amber-400/10 text-amber-200",
  synced: "border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
  completed: "border-emerald-400/40 bg-emerald-400/10 text-emerald-200",
} as const;

export default function`,
    );
    s = ensureHook(
      s,
      `  const { t } = useI18n();
  const wm = t.landing.automation.workflowMockup;
  const lc = t.landing.common;
  const steps = wm.steps;
  const statusLabels = {
    received: lc.statusReceived,
    processing: lc.statusProcessing,
    synced: lc.statusSynced,
    completed: lc.statusCompleted,
  } as const;
`,
    );
    s = s.replace(/const st = statusStyle\[step\.status\];/g, "const st = { className: STATUS_CLASS[step.status], text: statusLabels[step.status] };");
    s = s.replace("Automation Engine", "{wm.engineTitle}");
    s = s.replace("Flujo comercial en vivo", "{wm.title}");
    s = s.replace("Running", "{wm.runningBadge}");
  }
  write("automation-landing/AutomationWorkflowMockup.tsx", s);
}

console.log("sections batch 1 done");
