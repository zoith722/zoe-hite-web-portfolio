import Link from "next/link";
import { site } from "@/content/site";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="site-nav" aria-label="Primary">
          <div className="brand">
            <Link href="/">{site.name}</Link>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#links">Links</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

