import './App.css';
import ProjectList from './components/ProjectList';
import ProjectShow from './components/ProjectShow';
import BugList from './components/BugList';
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
        <Route path='' element={<BugList />}></Route>      
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

