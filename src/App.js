// import React from 'react';
import './App.css';
// import { Route, Routes } from 'react-router-dom';
import ProjectList from './components/ProjectList';
import ProjectShow from './components/ProjectShow';
import Bugshow from './components/Bugshow';
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
        <Route path='/ProjectShow' element={<ProjectShow />}></Route>

        
      </Routes>
      {/* <Routes>
        <Route path='/' component={ProjectList}></Route>
      </Routes> */}
     {/* <ProjectShow /> */}
     </BrowserRouter>
    </div>
  );
}

export default App;
