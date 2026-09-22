export type Project = {
  id: string;
  title: string;
  timeframe: string;
  summary: string;
  highlights?: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "lstm-parking-occupancy-capstone",
    title: "Parking Occupancy Prediction — LSTM Capstone",
    timeframe: "January 2025 – May 2025",
    summary:
      "Achieved 90% accuracy predicting parking occupancy across Virginia Tech lots using an LSTM model; integrated predictions into a Flask/MySQL API and React frontend for real-time recommendations.",
    highlights: [
      "90% prediction accuracy using TensorFlow/Keras",
      "Weighted recommendation engine balancing occupancy, distance, and travel time",
    ],
    tech: ["Python", "TensorFlow", "Keras", "Flask", "MySQL", "React", "TypeScript"],
  },
  {
    id: "codekids-pathfinding-lesson",
    title: "CodeKids Pathfinding Teaching Tool",
    timeframe: "August 2024 – April 2025",
    summary:
      "Developed a virtual pathfinding lesson and interactive web tools to teach algorithms and AI concepts, improving programming education for 15+ elementary students.",
    tech: ["JavaScript", "TypeScript", "HTML", "CSS"],
  },
];

