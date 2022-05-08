import React, { Fragment } from "react";
import Main from "./Main"
import ImageSlider from "./ImageSlider";
import {SliderData} from './SliderData';


function App()  {
  return (
    <Fragment>
    <Main/>
    <ImageSlider slides={SliderData}/>
    </Fragment>


    
  );

}

export default App;
