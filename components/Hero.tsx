import Image from "next/image";
import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="container">
        <div className="split">
          <div>
            <h1>{site.name}</h1>
            <p>{site.tagline}</p>
            <div className="cta-row" role="group" aria-label="Primary actions">
              <a href={`mailto:${site.email}`} className="btn btn-primary">
                Email
              </a>
              <a href="#experience" className="btn btn-secondary">
                Experience
              </a>
            </div>
          </div>
          <div aria-hidden className="media-frame">
            <Image
              src="/photos/desk-coding.jpg"
              alt="Zoe coding at a desk — builder energy"
              width={1200}
              height={900}
              priority
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "50% 40%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

