import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { Link } from '@react-navigation/native';

function showProjectList(){
    // const navigate = UseNavigate();
    return (
        <React.Fragment>
            <br />
            <div className="container">
				<table className="table user-list">
					<thead>
						<tr>
							<th><span>Project name</span></th>
							<th><span>Created at</span></th>
							<th><span>Created by</span></th>
							<th>&nbsp;</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Bugzilla React</td>
						
							<td>2019-09-01</td>

							<td>Manager 01</td>
							<td>
							{/* <Link > */}
      {/* Go to Jane's profile
    </Link> */}
								<a href="/ProjectShow" className="table-link">
									<span className="fa-stack">
										<i className="fa fa-square fa-stack-2x"></i>
										<i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                    
									</span>
								</a>
								<a href="" className="table-link">
									<span className="fa-stack">
										<i className="fa fa-square fa-stack-2x"></i>
										<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
									</span>
								</a>
								<a>
								<span className="fa-stack">
                  <i className="fa fa-square fa-stack-2x"></i>
				  <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
               
                </span>
								</a>
							</td>

						</tr>
					</tbody>
				</table>
			</div>
        </React.Fragment>
    )

}

export default showProjectList;
