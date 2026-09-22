import { projects } from "@/content/projects";

export default function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="project-card">
              <div>
                <h3 style={{ margin: 0 }}>{p.title}</h3>
                <div className="project-meta">{p.timeframe}</div>
              </div>
              <p style={{ margin: 0 }}>{p.summary}</p>
              {p.highlights?.length ? (
                <ul>
                  {p.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              ) : null}
              <div className="chip-row" aria-label="Technologies">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="card-actions" role="group" aria-label="Project links">
                {p.liveUrl ? (
                  <a
                    href={p.liveUrl}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                ) : null}
                {p.githubUrl ? (
                  <a
                    href={p.githubUrl}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

