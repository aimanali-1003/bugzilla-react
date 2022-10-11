import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShowProjectList() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/projects")
      .then((res) => {
        console.log(res);
        setProject(res.data);
      })
      .catch(Error);
  }, []);

  return (
    <>
      {projects.map((project) => (
        <div className="card" key={project.id}>
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {project.created_at}
            </h6>
            <p className="card-text">{project.description}</p>
            <a href={`/ProjectShow/${project.id}`} className="card-link">
              Show Project
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
