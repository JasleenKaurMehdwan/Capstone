 import React from 'react';
 import './App.css';
 import Canvas from "./Components/Canvas";
import Navbar from './Components/Navbar';
 import Home from "./Components/Home";


 
 import {
	BrowserRouter,
	Navigate,
	Routes,
	Route,
  Switch,
	Outlet,
} from "react-router-dom";

const App= () =>{
  return (
    
    <div> 
      
    
  
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Canvas" element={<Canvas />} />
     </Routes>
      </BrowserRouter>
      </div>
      
     
	 
);
};
export default App;
