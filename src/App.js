import Main from "./Main"
// import ImageSlider from "./imageSlider/ImageSlider";
// import {SliderData} from './imageSlider/SliderData';
import { Projects } from './Projects';
import { Intro } from './Intro';
import { Experience } from './Experience';
import { Links } from "./Links";
import { Languages } from "./Languages";
import React from 'react'
import Interests from "./Interests";
// import { Canvas } from "@react-three/fiber";



function App()  {
  return (
    <div>

      
      <Main/>
      <Intro/>
      <div style={{height:"50vh", width:"100%"}}>

    <spline-viewer 
    
    url="https://prod.spline.design/L-xaHkPSSkpROSeB/scene.splinecode"></spline-viewer>
      </div>

    {/* <ImageSlider slides={SliderData}/> */}
    <Projects/>
    <Links/>
    <Experience/>

    <Languages/>
    <Interests/>


    {/* <Home/> */}
    


    </div>
  );

}

export default App;
