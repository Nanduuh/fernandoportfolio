import { Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { humanSkills } from "../data/skills";

export function About() {
  return (
    <section className="section scene about-section" id="sobre">
      <Reveal className="section-heading">
        <p className="scene-label">Cena 07 / Sobre mim</p>
        <h2>Gosto de tecnologia quando ela sai do “legal” e vira útil.</h2>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-copy">
          <p>
            Sou Técnico em Informática e Técnico em Desenvolvimento de Games pelo Senac Tech.
            Hoje atuo com Excel VBA, automação de processos e desenvolvimento de sites,
            criando soluções para rotinas que antes dependiam de trabalho manual demais.
          </p>
          <p>
            O que mais me prende em tecnologia é esse momento em que uma ideia meio bagunçada
            vira um sistema funcionando. Eu gosto de aprender, testar, quebrar, consertar e
            deixar a solução mais clara do que estava no começo.
          </p>
        </Reveal>

        <Reveal className="personality-panel">
          <Sparkles size={26} />
          <strong>Perfil do currículo</strong>
          <div>
            {humanSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
