// import React, { Fragment } from "react";
import Main from "./Main"
import ImageSlider from "./ImageSlider";
import {SliderData} from './SliderData';
import { Projects } from './Projects';
import { Intro } from './Intro';
import { Experience } from './Experience';
import { Links } from "./Links";
import { Languages } from "./Languages";
import React, { useRef, useEffect } from 'react'
import Home from "./Home";




function App()  {
  return (
    <div>
      <Main/>
      <Intro/>
    <ImageSlider slides={SliderData}/>
    <Projects/>
    <Links/>
    <Experience/>
    <Languages/>
    {/* <Home/> */}
    


    </div>
  );

}

export default App;
