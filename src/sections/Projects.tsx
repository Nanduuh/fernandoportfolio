import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { ProjectVisual } from "../components/ProjectVisual";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section className="section scene projects-section" id="projetos">
      <Reveal className="section-heading split-heading">
        <div>
          <p className="scene-label">Cena 04 / Projetos</p>
          <h2>Tá, mas ele realmente fez alguma coisa?</h2>
        </div>
        <strong>Sim.</strong>
      </Reveal>

      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <article className="project-card">
              <ProjectVisual project={project} />
              <div className="project-content">
                <span>{project.label}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <i key={item}>{item}</i>
                  ))}
                </div>
                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <ArrowUpRight size={14} /> {item}
                    </li>
                  ))}
                </ul>
                <div className="project-footer">
                  <small>{project.status}</small>
                  <div>
                    {project.github ? (
                      <a
                        className="project-link"
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`GitHub ${project.name}`}
                      >
                        <Github size={18} /> Código
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a
                        className="project-link"
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Demo ${project.name}`}
                      >
                        <ExternalLink size={18} /> Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
