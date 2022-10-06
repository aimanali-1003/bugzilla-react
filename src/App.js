import './App.css';
import ProjectList from './components/Project/ProjectList';
import ProjectShow from './components/Project/ProjectShow';
import BugList from './components/Bug/BugList';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  BrowserRouter,
} from "react-router-dom";

function App() {

  return (
    <div>
     <BrowserRouter> 
      <Routes>
        <Route path='/' element={<ProjectList />}></Route>
        
        {/* <Route path='/ProjectShow' element={<ProjectShow />}></Route> */}
        <Route path="/ProjectShow/:id" element={<ProjectShow />}></Route>
        <Route path='/BugList' element={<BugList />}></Route>    
        <Route path="/ProjectShow/:id/BugList" exact element={<BugList />}></Route>

      </Routes>
     </BrowserRouter>
    </div>
  );

}

export default App;

