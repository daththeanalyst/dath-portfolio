export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  mediaUrl: string;
  mediaType: "video" | "gif" | "image";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: "geospatial" | "ml" | "data-engineering" | "fullstack" | "ai";
  gridSpan: "large" | "tall" | "wide" | "normal";
}

export const projects: Project[] = [
  {
    id: "london-synergy",
    slug: "london-synergy-index",
    title: "London Synergy Index",
    subtitle: "Predictive Site Selection",
    description:
      "Architected an end-to-end geospatial pipeline for 55,000 H3 hexagons, integrating LandScan satellite rasters, ONS Census data, and OSM POIs enriched with graph-centrality and competition-density features. Modeled underserved retail locations using spatially cross-validated XGBoost classifiers.",
    techStack: ["Python", "XGBoost", "H3", "NetworkX", "Streamlit", "Pydeck"],
    mediaUrl: "/videos/geo1.mp4",
    mediaType: "video",
    githubUrl: "https://github.com",
    featured: true,
    category: "geospatial",
    gridSpan: "large",
  },
  {
    id: "housing-crime",
    slug: "housing-crime-analysis",
    title: "London Housing & Crime",
    subtitle: "Geospatial Analysis",
    description:
      "Developed a Spatio-Temporal pipeline merging 1M+ records to engineer a predictive 'Opportunity Index,' transforming raw crime and housing data into an actionable investment strategy. Optimized an XGBoost regressor via Optuna, achieving an R² of 0.92.",
    techStack: ["Python", "Scikit-learn", "XGBoost", "Optuna", "Pandas"],
    mediaUrl: "/gifs/map1.gif",
    mediaType: "gif",
    githubUrl: "https://github.com",
    featured: true,
    category: "geospatial",
    gridSpan: "tall",
  },
  {
    id: "risk-terrain",
    slug: "risk-terrain",
    title: "RiskTerrain",
    subtitle: "S&P 500 Risk Intelligence",
    description:
      "Engineered a 6-node LangGraph pipeline that ingests live geopolitical events (USGS, NewsAPI), performs multi-hop supply chain graph traversal across 154 companies in SurrealDB, and scores cascading risk exposure in under 8 seconds.",
    techStack: ["Python", "LangGraph", "SurrealDB", "Three.js", "Docker"],
    mediaUrl: "/videos/geo2.mp4",
    mediaType: "video",
    githubUrl: "https://github.com",
    featured: true,
    category: "ai",
    gridSpan: "wide",
  },
  {
    id: "data-engineering",
    slug: "data-engineering-pipeline",
    title: "Data Engineering Pipeline",
    subtitle: "Star Schema Lakehouse",
    description:
      "Architected a centralized Star Schema Lakehouse to unify semi-structured NoSQL and CSV datasets; utilized PyMongo and Pandas to flatten nested JSON and engineer derived geographical dimensions.",
    techStack: ["Python", "PySpark", "MongoDB", "DuckDB", "Parquet"],
    mediaUrl: "/gifs/map1.gif",
    mediaType: "gif",
    githubUrl: "https://github.com",
    featured: false,
    category: "data-engineering",
    gridSpan: "normal",
  },
  {
    id: "dataportfolio",
    slug: "dataportfolio",
    title: "Dataportfolio.co.uk",
    subtitle: "Full Stack SaaS Platform",
    description:
      "Launched a production-ready SaaS platform that automates portfolio creation for data professionals, featuring a 'coding-less' GUI to manage backend data persistence and dynamic metadata updates.",
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Tailwind"],
    mediaUrl: "/videos/geo1.mp4",
    mediaType: "video",
    liveUrl: "https://dataportfolio.co.uk",
    featured: false,
    category: "fullstack",
    gridSpan: "normal",
  },
];
