import { AlertTriangle, CheckCircle2, Rocket, Search, Terminal, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "../components/Reveal";

const steps: Array<[string, string, LucideIcon]> = [
  ["01", "Surge uma ideia", Search],
  ["02", "Eu começo a pesquisar", Search],
  ["03", "Abro o VS Code", Terminal],
  ["04", "Começo a programar", Wrench],
  ["05", "Aparece um erro", AlertTriangle],
  ["06", "Finjo que não vi por 3 segundos", AlertTriangle],
  ["07", "Pesquiso o erro", Search],
  ["08", "Corrijo", Wrench],
  ["09", "Funciona", CheckCircle2],
  ["10", "Deploy na Vercel", Rocket],
];

export function Process() {
  return (
    <section className="section scene process-section" id="processo">
      <Reveal className="section-heading">
        <p className="scene-label">Cena 05 / Como eu trabalho</p>
        <h2>Um processo científico, com pequenas doses de “ué”.</h2>
      </Reveal>

      <div className="process-track">
        {steps.map(([number, label, Icon], index) => (
          <Reveal key={label} delay={(index % 5) * 0.04}>
            <article className={number === "05" ? "process-step is-error" : "process-step"}>
              <span>{number}</span>
              <Icon size={22} />
              <strong>{label}</strong>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="error-terminal">
        <span>terminal</span>
        <code>TypeError: achei que era simples</code>
        <p>Correção aplicada. Café opcional, aprendizado obrigatório.</p>
      </Reveal>
    </section>
  );
}
