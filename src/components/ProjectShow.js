import React, { Component } from 'react'
import { Link } from 'react-router-dom';

function showProject(){
    // const shoot = () => {
    //     alert("Great Shot!");
    //   }
    
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
<Link to="/BugList" className="btn btn-secondary m-2">Show Bugs List</Link>
{/* <button onClick={shoot}>Take the shot!</button> */}
{/* <button className="btn btn-secondary m-2" >View all bugs</button> */}
</React.Fragment>   
    );

}

export default showProject;

