import React from "react";
import "./home.scss";
import { FaYoutube, FaFacebookF,FaHandsHelping,FaRegAddressCard,FaDonate,FaUser } from 'react-icons/fa';
export default function Home() {

  return (
    <div className="backroundColor">
      <div className="home-buttons">
        <nav>
        <a className="mainButton__text" href="/volunteer"> <FaHandsHelping className="iconSpace"/>ABOUT ME </a>
        <a className="mainButton__text" href="/member"> <FaRegAddressCard className="iconSpace"/>  PROJECTS </a>
        <a className="mainButton__text" href="/donate"> <FaDonate className="iconSpace"/>  EXPERIENCE </a>
        <a className="mainButton__text" href="/account"> <FaUser className="iconSpace"/>  CONTACT ME </a>
        <a target="_blank" href="https://www.youtube.com/channel/UCAQTSkwPU9Nnx-606ptbA8A" ><button style={{background: "#3b5998"}} class="social-button" >
        <FaFacebookF size={30} /></button></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCAQTSkwPU9Nnx-606ptbA8A" ><button style={{background: "#FF0000"}} class="social-button" >
        <FaYoutube size={30} /></button></a>
        </nav>
      </div>
      <div className='welcomeSection'>

            </div> 
    </div>
  );
}