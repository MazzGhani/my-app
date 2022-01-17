import React from "react";
import Home from "./pages/home/Home";
import NavBar from "./navbar/NavBar";
import About from "./pages/about/About"
import './navbar/navbar.scss';
import './pages/home/home.scss';
import './pages/about/about.scss';



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App()  {
  return (
    
<NavBar/>
  );

}

export default App;
