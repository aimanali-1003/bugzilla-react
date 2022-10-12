import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BugList } from "../../api/bugAPI";

const ShowBugListing = () => {
  const { id } = useParams();
  const [bugs, setBug] = useState([]);

  useEffect(() => {
    BugList(id)
      .then((response) => {
        setBug(response);
      })
      .catch(() => {});
      
  }, [id]);

  return (
    <>
      <br />
      <div className="card-title">
        {bugs.empty ? (
          <p>Project Name: {bugs[0] && bugs[0].project_name}</p>
        ) : (
          <h4>Project Name: {bugs[0] && bugs[0].project_name}</h4>
        )}
        <li className="list-group-item">
          <i className="fa fa-bug fa-2x"></i>Bugs
        </li>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Bug id#</th>
            <th scope="col">Bug Title</th>
            <th scope="col">Bug Status</th>
            <th scope="col">Pick/Not Picked</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {bugs.map((bug) => (
          <tbody key={bug.id}>
            <tr>
              <td>{bug.id}</td>
              <td>{bug.title}</td>
              <td>{bug.status}</td>
              <td>
                {bug.assigned_to_id ? (
                  <i className="badge rounded-pill badge-success">Picked</i>
                ) : (
                  <i className="badge rounded-pill badge-warning">Not Picked</i>
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}
export default ShowBugListing;
