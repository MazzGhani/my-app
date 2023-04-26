import React, { useState } from "react";
// import {SliderData} from './imageSlider/SliderData.js';
import { SliderData } from "/MyProjects/my-app/src/imageSlider/SliderData"
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from "react-icons/fa"
import "../CSS/slider.css"


const ImageSlider=({slides}) =>{
const[current,setCurrent]= useState(0);
const length=slides.length;


const nextSlide= () => {
    setCurrent(current === length-1?0:current+1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

    return(
<section className="slider">


{SliderData.map((slide,index,i)=>{
    return( 
        <div className={index === current ? 'slide active' : 'slide'} key={index} >
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
          {index === current && (
            <img src={slide.image} alt='travel pic' className='image' />
              
          )}
        </div>
          );
  })}
</section>
        );
          };
export default ImageSlider;