import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title">About</h2>
        <div className="split">
          <div className="about-body">
            <p>
              I’m a software engineer who builds clear, reliable tools — with
              recent work across healthcare and network monitoring. I enjoy
              turning ambiguous requirements into well‑designed React and
              TypeScript interfaces backed by sound APIs and tests.
            </p>
            <p>
              I coach and lead as well as build — mentoring teammates, organizing
              work, and communicating clearly with stakeholders. I studied
              Computer Science at Virginia Tech with a Psychology minor and spent
              a semester abroad focused on computer science in Siena, Italy.
            </p>
          </div>
          <div className="about-photos">
            <div className="media-frame">
              <Image
                src="/photos/graduation.jpg"
                alt="Graduation portrait at Virginia Tech"
                width={1200}
                height={900}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
            <div className="media-frame">
              <Image
                src="/photos/desk-coding.jpg"
                alt="At the desk coding — builder at work"
                width={1200}
                height={900}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

