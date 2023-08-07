import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";

const VykdomiProjektai = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // gauti duomenis iš back
    const fetchDataFromBackend = async () => {
      try {
        const response = await axios.get("/api/projects");
        setData(response.data);
      } catch (error) {
        console.error("Klaida gaunant duomenis iš serverio:", error);
      }
    };

    fetchDataFromBackend();
  }, []);

  return (
    <div className="project-container">
    <h1 className="project-heading">Vykdomi projektai</h1>
    <ul className="project-list">
      {data.map((project) => (
        <li key={project._id} className="project-item">
          <h2 className="project-title">{project.city}</h2>
          <p className="project-price">Kaina: {project.price}</p>
          <img
            className="project-image"
            src={project.image}
            alt={project.city}
          />
        </li>
      ))}
    </ul>
  </div>
  );
};

export default VykdomiProjektai;
