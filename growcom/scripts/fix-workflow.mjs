import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, "../app/components/ai-landing/AiWorkflowSection.tsx");
let s = fs.readFileSync(filePath, "utf8");

const d = "d" + "iv";

const desktop = `          <${d} className="relative flex justify-between gap-1">
            {steps.map((step, i) => {
              const lit = i <= active;
              const current = i === active;
              return (
                <motion.div
                  key={step.id}
                  className="ai-workflow-node group flex w-[12%] min-w-0 flex-col items-center"
                  animate={current && !reduce ? { y: [0, -6, 0] } : { y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className={[
                      "relative flex h-[56px] w-[56px] items-center justify-center rounded-2xl border backdrop-blur-xl transition-shadow duration-500",
                      lit
                        ? "border-cyan-400/50 bg-cyan-400/10 shadow-[0_0_40px_rgba(56,189,248,0.35)]"
                        : "border-white/10 bg-white/[0.03]",
                    ].join(" ")}
                    animate={
                      current && !reduce
                        ? { boxShadow: ["0 0 20px rgba(56,189,248,0.2)", "0 0 50px rgba(56,189,248,0.5)", "0 0 20px rgba(56,189,248,0.2)"] }
                        : undefined
                    }
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-200/90">
                      {step.short}
                    </span>
                    {current ? (
                      <span className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-400/30 to-transparent opacity-60" />
                    ) : null}
                  </motion.div>
                  <p
                    className={[
                      "mt-4 text-center text-[11px] font-semibold leading-tight transition-colors",
                      lit ? "text-white/90" : "text-white/40",
                    ].join(" ")}
                  >
                    {step.label}
                  </p>
                </motion.div>
              );
            })}
          </${d}>`;

const mobile = `        <${d} className="relative mt-12 space-y-3 lg:hidden">
          {steps.map((step, i) => {
            const lit = i <= active;
            const current = i === active;
            return (
              <motion.div
                key={step.id}
                className={[
                  "flex items-center gap-4 rounded-2xl border px-4 py-3 backdrop-blur-md transition-colors",
                  lit ? "border-cyan-400/35 bg-cyan-400/[0.08]" : "border-white/8 bg-white/[0.02]",
                ].join(" ")}
                animate={current && !reduce ? { x: [0, 4, 0] } : undefined}
                transition={{ duration: 0.8 }}
              >
                <span
                  className={[
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-[9px] font-bold uppercase",
                    lit ? "bg-cyan-400/20 text-cyan-200" : "bg-white/5 text-white/40",
                  ].join(" ")}
                >
                  {step.short}
                </span>
                <p className={lit ? "text-sm font-semibold text-white" : "text-sm text-white/45"}>{step.label}</p>
              </motion.div>
            );
          })}
        </${d}>`;

s = s.replace(`          <${d} />\n        </${d}>\n\n        <${d} />\n      </${d}>`, `${desktop}\n        </${d}>\n\n${mobile}\n      </${d}>`);

fs.writeFileSync(filePath, s);
console.log("fixed workflow");
