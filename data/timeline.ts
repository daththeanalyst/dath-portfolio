export interface TimelineEvent {
  id: string;
  type: "experience" | "education";
  title: string;
  organization: string;
  date: string;
  description: string;
  skills?: string[];
}

export const timeline: TimelineEvent[] = [
  {
    id: "exp-2",
    type: "experience",
    title: "Senior ML Engineer",
    organization: "Data Dynamics Group",
    date: "2023 - Present",
    description:
      "Architected predictive risk models for geospatial data, deploying scalable endpoints using FastAPI and PyTorch.",
    skills: ["Python", "PyTorch", "AWS Sagemaker", "Streamlit"],
  },
  {
    id: "edu-2",
    type: "education",
    title: "MSc Geospatial Intelligence & Space Systems",
    organization: "University College London (UCL)",
    date: "2021 - 2022",
    description:
      "Specialized in remote sensing workflows and deep learning applied to multi-spectral imaging.",
  },
  {
    id: "exp-1",
    type: "experience",
    title: "Geospatial Data Scientist",
    organization: "London Analytics Partners",
    date: "2019 - 2021",
    description:
      "Built location intelligence dashboards processing 50M+ rows of OpenStreetMap and proprietary retail data.",
    skills: ["Python", "PostGIS", "React", "Docker"],
  },
  {
    id: "edu-1",
    type: "education",
    title: "BSc Computer Science",
    organization: "National and Kapodistrian University of Athens",
    date: "2015 - 2019",
    description:
      "Focus on distributed systems and artificial intelligence algorithms.",
  },
];
