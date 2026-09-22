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
      "Virginia Tech CS capstone (5-person team, ML lead): a web app for Blacksburg drivers that forecasts garage occupancy with per-garage LSTM models and recommends where to park based on your drive time.",
    highlights: [
      "Trained one Keras LSTM per garage on minute-level occupancy data, using 5-step windows of occupancy, day of week, and time of day to forecast 5–30 minutes ahead, with 5-fold TimeSeriesSplit validation and early stopping",
      "Served the models through a Flask API that interpolates each forecast to the user's Google Maps drive time to that garage",
      "Weighted scoring ranks garages by predicted occupancy, travel time, and distance based on the user's chosen priority",
      "Express/Node backend links the React frontend (Leaflet, Google Maps Places and Directions APIs) to the ML service and a MySQL session store (Prisma, Liquibase), all packaged in Docker",
    ],
    tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "Flask", "Node.js", "Express", "MySQL", "Prisma", "React", "Docker"],
    githubUrl: "https://github.com/zoith722/parking-predictor",
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

