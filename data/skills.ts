export interface Skill {
  name: string;
  category: "programming" | "ml" | "data-engineering" | "geospatial" | "tools";
}

export const skills: Skill[] = [
  // Programming
  { name: "Python", category: "programming" },
  { name: "SQL", category: "programming" },
  { name: "R", category: "programming" },
  { name: "JavaScript", category: "programming" },
  { name: "TypeScript", category: "programming" },

  // ML
  { name: "XGBoost", category: "ml" },
  { name: "PyTorch", category: "ml" },
  { name: "TensorFlow", category: "ml" },
  { name: "Scikit-learn", category: "ml" },
  { name: "LangChain", category: "ml" },
  { name: "Optuna", category: "ml" },
  { name: "SHAP", category: "ml" },

  // Data Engineering
  { name: "AWS", category: "data-engineering" },
  { name: "Docker", category: "data-engineering" },
  { name: "PySpark", category: "data-engineering" },
  { name: "Databricks", category: "data-engineering" },
  { name: "DuckDB", category: "data-engineering" },
  { name: "MongoDB", category: "data-engineering" },
  { name: "Kubernetes", category: "data-engineering" },
  { name: "Git", category: "data-engineering" },

  // Geospatial
  { name: "H3 Indexing", category: "geospatial" },
  { name: "Pydeck", category: "geospatial" },
  { name: "NetworkX", category: "geospatial" },
  { name: "LandScan", category: "geospatial" },
  { name: "OSM Data", category: "geospatial" },
  { name: "Streamlit", category: "geospatial" },

  // Tools
  { name: "LangGraph", category: "tools" },
  { name: "Three.js", category: "tools" },
  { name: "SurrealDB", category: "tools" },
  { name: "Pandas", category: "tools" },
  { name: "NumPy", category: "tools" },
];
