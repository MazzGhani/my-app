import React from "react";
import Home from "./home/Home";
import NavBar from "./navbar/NavBar";
import './navbar/navbar.scss';
import './home/home.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App()  {
  return (
     <Router>
        <NavBar/>
       <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </Router> 
  );

}

export default App;
