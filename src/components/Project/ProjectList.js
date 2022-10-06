import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ShowProjectList(){
   const[projects, setProject] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/v1/projects')
        .then(res => {
            console.log(res)
            setProject(res.data)
        })
        .catch(Error)
    }, [])

	return(
		<>	
					 { projects.map(project => 
 						<div className="container" key={project.id}>	
 							<p>{project.name}</p>
							<p>{project.created_at}</p>
							<p>{project.creator_id}</p>
							<a href={`/ProjectShow/${project.id}`} className="table-link">
 									<span className="fa-stack">
 										<i className="fa fa-square fa-stack-2x"></i>
 										<i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
 									</span>
 								</a>	
							</div>
							 )
					}	
		</>	
)};
