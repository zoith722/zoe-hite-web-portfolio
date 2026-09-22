import { site } from "@/content/site";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Links from "@/components/Links";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <Hero />

        <About />

        <Experience />

        <Projects />

        <Skills />

        <Links />

        <Contact />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a> ·{" "}
            <a href={site.linkedInUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
