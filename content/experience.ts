export type ExperienceItem = {
  id: string;
  kind: "role" | "education" | "leadership";
  org: string;
  title: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "diverge-health-associate-software-developer",
    kind: "role",
    org: "Diverge Health",
    title: "Associate Software Developer",
    location: "Remote",
    start: "November 2025",
    end: "Present",
    bullets: [
      "Built React and TypeScript goal-management interfaces from Figma designs, developing interactive tables, filtering, editing, and REST endpoints to consolidate 3 healthcare workflows into one reusable experience for care coordinators",
      "Automated Zoom-link delivery for virtual patient assessments by developing an event-driven SMS pipeline with Apex, asynchronous processing, and Twilio APIs, eliminating manual outreach for health coaches and supporting patient onboarding across New York and Illinois markets",
      "Co-developed an AI-assisted deployment platform using Claude Projects, TypeScript, and AWS CDK, standardizing secure containerized deployments so nontechnical users can stand up personalized internal applications",
      "Built automated tests and monitoring for healthcare data workflows, achieving 85% test coverage for an AWS S3 patient-file integration and developing a CloudWatch dashboard to surface failures across an asynchronous assessment-processing pipeline",
    ],
  },
  {
    id: "kentik-software-engineer-intern",
    kind: "role",
    org: "Kentik",
    title: "Software Engineer Intern",
    location: "Remote",
    start: "May 2025",
    end: "August 2025",
    bullets: [
      "Implemented and shipped 5+ user-facing features and UX improvements for Kentik’s Network Monitoring System by developing full-stack solutions with Go, React, and Node.js, boosting device support ticket resolution by 30%",
      "Collaborated in Agile sprints with engineers, designers, and product managers, by participating in daily standups, sprint reviews, and technical demos, successfully deploying 3 major features to production and showcasing to stakeholders across the company",
      "Reduced developer debugging turnaround time by 15% by leveraging AI tooling and GitHub Copilot to rebuild network connectivity integrations and schemas",
      "Awarded Honorable Mention at Kentik’s first hackathon for creating a full-stack gNMI protocol tool with a React frontend and gRPC-powered backend, enabling the company to query remote device data and expand wireless capabilities",
    ],
  },
  {
    id: "penfed-salesforce-intern",
    kind: "role",
    org: "PenFed Credit Union",
    title: "Salesforce Intern",
    location: "Tysons Corner, VA",
    start: "May 2023",
    end: "August 2023",
    bullets: [
      "Led a 7-member IT intern team as the sole female leader, coordinating sprint-style planning and task delegation to successfully deliver a capstone AI integration proposal at the company’s summer summit",
    ],
  },
  {
    id: "virginia-tech-bs-computer-science",
    kind: "education",
    org: "Virginia Tech",
    title: "BS, Computer Science (Psychology minor)",
    location: "Blacksburg, VA",
    start: "August 2021",
    end: "May 2025",
    bullets: [],
  },
  {
    id: "uva-cs-study-abroad-siena",
    kind: "education",
    org: "University of Virginia — Computer Science Study Abroad",
    title: "CS Study Abroad",
    location: "Siena, Italy",
    start: "January 2024",
    end: "May 2024",
    bullets: [
      "Completed upper-level coursework abroad in Relational Database Management and Artificial Intelligence",
    ],
  },
  {
    id: "annandale-hs-head-varsity-lacrosse-coach",
    kind: "leadership",
    org: "Annandale High School",
    title: "Head Varsity Lacrosse Coach",
    location: "Annandale, VA",
    start: "December 2025",
    end: "Present",
    bullets: [
      "Lead a 46‑athlete lacrosse program: manage coaching staff, player development, scheduling and logistics, and program communications with athletes, families, and school administration",
    ],
  },
  {
    id: "annandale-hs-assistant-varsity-field-hockey-coach",
    kind: "leadership",
    org: "Annandale High School",
    title: "Assistant Varsity Field Hockey Coach",
    location: "Annandale, VA",
    start: "September 2025",
    end: "Present",
    bullets: [
      "Collaborate with the head coach to plan practices, develop athletes, and prepare game strategy, providing hands-on instruction",
    ],
  },
];

