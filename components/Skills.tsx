import { skills } from "@/content/skills";

export default function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <h2 id="skills-title">Skills</h2>
        <div className="xp-item" role="list" aria-label="Skills">
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <div>
              <strong>Languages</strong>
              <div className="chip-row" aria-label="Languages">
                {skills.languages.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <strong>Frameworks & APIs</strong>
              <div className="chip-row" aria-label="Frameworks and APIs">
                {skills.frameworksAndApis.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <strong>Cloud & Data</strong>
              <div className="chip-row" aria-label="Cloud and Data">
                {skills.cloudAndData.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <strong>Developer Tools</strong>
              <div className="chip-row" aria-label="Developer Tools">
                {skills.developerTools.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
