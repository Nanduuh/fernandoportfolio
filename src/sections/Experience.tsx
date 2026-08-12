import { Reveal } from "../components/Reveal";
import { timeline } from "../data/timeline";

export function Experience() {
  return (
    <section className="section scene experience-section" id="experiencia">
      <Reveal className="section-heading">
        <p className="scene-label">Cena 06 / Experiência</p>
        <h2>O caminho real, sem inflar cargo nem inventar número bonito.</h2>
      </Reveal>

      <div className="timeline">
        {timeline.map((item, index) => (
          <Reveal key={`${item.title}-${item.period}`} delay={index * 0.06}>
            <article className="timeline-item">
              <time>{item.period}</time>
              <div>
                <span>{item.place}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
