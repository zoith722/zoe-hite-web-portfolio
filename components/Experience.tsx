import Image from "next/image";
import { experience } from "@/content/experience";
import { skills } from "@/content/skills";

function List({ items }: { items: string[] }) {
  if (!items?.length) return null;
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function Experience() {
  const roles = experience.filter((e) => e.kind === "role");
  const education = experience.filter((e) => e.kind === "education");
  const leadership = experience.filter((e) => e.kind === "leadership");

  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <h2 id="experience-title">Experience</h2>
        <div className="xp-group" aria-label="Technical roles">
          {roles.map((r) => (
              <article key={r.id} className="xp-item">
                <div className="xp-title">
                  <span className="role">{r.title}</span>
                  <span className="org">· {r.org}</span>
                </div>
                <div className="xp-meta">
                  <span>
                    {r.location ? `${r.location} · ` : ""}
                    {r.start} — {r.end}
                  </span>
                </div>
                <List items={r.bullets} />
              </article>
            ))}
        </div>

        <h3 style={{ marginTop: "var(--space-6)" }}>Education</h3>
        <div className="xp-group" aria-label="Education">
          {education.map((e) => (
            <article key={e.id} className="xp-item">
              <div className="xp-title">
                <span className="role">{e.title}</span>
                <span className="org">· {e.org}</span>
              </div>
              <div className="xp-meta">
                <span>
                  {e.location ? `${e.location} · ` : ""}
                  {e.start} — {e.end}
                </span>
              </div>
              <List items={e.bullets} />
            </article>
          ))}
        </div>

        <h3 style={{ marginTop: "var(--space-6)" }}>Leadership — beyond the keyboard</h3>
        <div className="xp-group" aria-label="Leadership">
          {leadership.map((l) => (
            <article key={l.id} className="xp-item">
              <div className="xp-title">
                <span className="role">{l.title}</span>
                <span className="org">· {l.org}</span>
              </div>
              <div className="xp-meta">
                <span>
                  {l.location ? `${l.location} · ` : ""}
                  {l.start} — {l.end}
                </span>
              </div>
              <List items={l.bullets} />
            </article>
          ))}
        </div>

        <div className="xp-leadership-photos" style={{ marginTop: "var(--space-5)" }}>
          <div className="media-frame">
            <Image
              src="/photos/field-walk.jpg"
              alt="On the lacrosse field — coaching walk"
              width={1600}
              height={1200}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="media-frame">
            <Image
              src="/photos/annandale-lacrosse-team.jpg"
              alt="Annandale High School Girls Lacrosse team — senior night"
              width={1600}
              height={1200}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>

        <h3 style={{ marginTop: "var(--space-6)" }}>Skills</h3>
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

