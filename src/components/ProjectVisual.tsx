import type { Project } from "../data/projects";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.slug === "americana") {
    return (
      <div className="visual restaurant">
        <div className="browser-bar"><span /><span /><span /></div>
        <div className="menu-preview">
          <strong>Americana Lanches</strong>
          <p>Prato do dia • Xis • Pastéis • Açaí</p>
          <div><i /><i /><i /></div>
        </div>
      </div>
    );
  }

  if (project.slug === "copa") {
    return (
      <div className="visual dashboard">
        <div className="chart-card tall"><b>ROI</b><span /></div>
        <div className="chart-card"><b>Banca</b><span /></div>
        <div className="bars"><i /><i /><i /><i /><i /></div>
      </div>
    );
  }

  if (project.slug === "duzia") {
    return (
      <div className="visual automation">
        <div className="phone-bubble">Telegram</div>
        <code>bot.run()</code>
        <div className="flow-line" />
        <div className="api-node">API</div>
      </div>
    );
  }

  if (project.slug === "excel") {
    return (
      <div className="visual spreadsheet">
        {Array.from({ length: 28 }).map((_, index) => (
          <span key={index} className={index % 6 === 0 ? "hot" : ""} />
        ))}
        <b>VBA Macro</b>
      </div>
    );
  }

  return (
    <div className="visual blog">
      <div className="article-list">
        <strong>BlogEstudos</strong>
        <span />
        <span />
        <span />
      </div>
      <div className="reader-card">JS</div>
    </div>
  );
}
