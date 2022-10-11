import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProjectShow } from "../../api/projectAPI";


export default function ShowProject(id) {
  const params = useParams();
  const [projects, setProject] = useState([]);
  const [users, setUser] = useState([]);

  useEffect(() => {
    ProjectShow(params.id).then( response =>{
      setProject(response)
      setUser(response.enrolled_users)
    }).catch((Error) => {
      
    })}, [params.id] )

  return (
    <>
      <br />
      <div className="card" key={projects.id}>
        <div className="card-header">
          <strong>Project name: </strong>
          {projects.name}
        </div>
        <div className="card-header">
          <strong>Project description: </strong>
          {projects.description}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>Total Bugs: </strong>
            {projects.bug_count}
          </li>
          <li className="list-group-item">
            <strong>Project is assigned to users: </strong>
            {projects.user_count}
          </li>
          <li className="list-group-item">
            <strong>Project users:</strong>
            {users.map((user) => (
              <p>{user.name}</p>
            ))}
          </li>
        </ul>
      </div>
      <br />
      <a
        href={`/ProjectShow/${params.id}/BugList`}
        className="btn btn-secondary m-2"
      >
        Show Bugs List
      </a>
    </>
  );
}
