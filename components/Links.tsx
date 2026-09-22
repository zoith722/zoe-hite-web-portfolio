import { site } from "@/content/site";

export default function Links() {
  return (
    <section id="links" className="section" aria-labelledby="links-title">
      <div className="container">
        <h2 id="links-title">Links</h2>
        <div className="links-list">
          <a href={site.linkedInUrl} target="_blank" rel="noreferrer">
            <span aria-hidden>↗</span>
            <span>LinkedIn</span>
          </a>
          <a href={`mailto:${site.email}`}>
            <span aria-hidden>@</span>
            <span>Email</span>
          </a>
        </div>
      </div>
    </section>
  );
}

