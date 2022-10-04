import React, { Component } from 'react'

function showProject(){
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
<button className="btn btn-secondary m-2">View all bugs</button>
</React.Fragment>   
    );

}

export default showProject;

