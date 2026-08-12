import { Code2, Database, FileSpreadsheet, Gauge, BrainCircuit, Bot, Globe2, Zap } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { areas } from "../data/skills";

const icons = [Globe2, Bot, BrainCircuit, Gauge, Code2, Zap, Database, FileSpreadsheet];

export function Areas() {
  return (
    <section className="section scene areas-section" id="areas">
      <Reveal className="section-heading">
        <p className="scene-label">Cena 02 / Ok... mas o que ele faz?</p>
        <h2>Eu junto código, rotina real e um pouco de teimosia produtiva.</h2>
      </Reveal>

      <div className="area-grid">
        {areas.map((area, index) => {
          const Icon = icons[index];
          return (
            <Reveal key={area} delay={index * 0.04}>
              <article className="area-card">
                <Icon size={24} />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{area}</strong>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
