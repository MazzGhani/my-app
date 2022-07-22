import React from 'react'
import { useState } from 'react'
import { CompressedTextureLoader } from 'three';

 const Home = () => {

    const [name, setNames]= useState('Charly')

  

    const handleClick= ()=>{
       setNames("Mazz");
    }
  return (
    <div>
        <p> My name is {name} </p>
        <button onClick={handleClick}>Click me</button>
    </div>

  )
}

export default Home;
