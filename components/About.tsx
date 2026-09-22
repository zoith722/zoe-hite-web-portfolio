import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <h2 id="about-title">About</h2>
        <div className="split">
          <div className="about-body">
            <p>
              Hi it's Zoe...you found my website!
              I'm a software engineer who loves building things, solving problems, 
              and finding better ways to make technology work for people. I graduated from 
              Virginia Tech with a degree in Computer Science and a minor in Psychology, 
              which shaped my interest in both how systems work and the people who use them. 
              Today, I work across the full stack, building web applications, APIs, cloud infrastructure, 
              and automation in the healthcare space. 
            </p>
            <p>
              I’m naturally curious and happiest in environments where I can take ownership, collaborate with different teams, 
              and keep learning along the way. Outside of engineering, I’m a longtime athlete and coach, 
              experiences that have shaped how I lead, communicate, and show up for a team. 
              I care deeply about community, creativity, and meaningful work, 
              and I’m excited by opportunities to build technology that has a real impact.
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
          </div>
        </div>
      </div>
    </section>
  );
}
