import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "../components/Reveal";
import { technologies } from "../data/skills";

export function Technologies() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0.12, 0.45], [-6, 4]);

  return (
    <section className="section scene tech-section" id="tecnologias">
      <Reveal className="section-heading">
        <p className="scene-label">Cena 03 / Tecnologias</p>
        <h2>Uma bancada de ferramentas, não uma lista colada no LinkedIn.</h2>
      </Reveal>

      <div className="ide-layout">
        <motion.div className="ide-window" style={{ rotate }}>
          <div className="ide-top"><span /><span /><span /><b>portfolio.tsx</b></div>
          <pre>{`const fernando = {
  foco: ["web", "automacao", "vba"],
  energia: "resolver problemas",
  bugDoDia: "investigando..."
}`}</pre>
        </motion.div>

        <div className="tech-cloud">
          {technologies.map((tech, index) => (
            <Reveal key={tech} delay={(index % 8) * 0.035}>
              <span>{tech}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
