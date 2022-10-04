import React, { Component } from 'react'

function showBugListing(){
    return (
        <React.Fragment>
            <br />
<div className="row mb-4">
      <div className="col-lg-12">
        <div className="card mdb-color white-text p-2">
          <div className="card-title">
            <h4 className="">Project: Bugzilla</h4>
            <li className="list-group-item"><i className="fa fa-bug fa-2x"> Bugs:1</i></li>
          </div>
        </div>
      </div>
    </div>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Project Bugs <i className="fa fa-bug"></i></h1>
         
        </div>
<table className="table">
 
  <thead>
    <tr>
      <th scope="col">Bug id#</th>
      <th scope="col">Bug Title</th>
      <th scope="col">Picked/Not Picked</th>
      <th scope="col">Bug Status</th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr>
       <td>1</td>
       <td>New bug</td>
        </tr>
        
  </tbody>
</table>
           
						
        </React.Fragment>
    )

}

export default showBugListing;

