import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";

function showProject(){
    // const navigate = useNavigate();
    return (
        <React.Fragment>
        <br />
<div className='card'>
  <div className='card-header'><strong>Project name: </strong>Bugzilla</div>
  <div className="card-header"><strong>Project description: </strong>React applied on Bugzilla</div>
    <ul className="list-group list-group-flush">
      <li className="list-group-item"><strong>Total Bugs: </strong>1</li>
      <li className="list-group-item"><strong>Project is assigned to users: </strong>2</li> 
      <li className="list-group-item"><strong>Project users: Aiman Ali</strong></li>
    </ul>
</div>
<br />
{/* <div className="container-fluid">
 <% if (current_user.QA?) %>
  <%= link_to "Add bug", new_project_bug_path(@project), class:"btn btn-secondary" %>
 <% end %>
  <%= link_to "View all Bugs", project_bugs_path(@project), class:"btn btn-secondary" %>
</div> */}
</React.Fragment>
       
      
    );

}

export default showProject;
