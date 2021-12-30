import React from "react";
import "./home.scss";
import { FaYoutube, FaFacebookF } from 'react-icons/fa';

export default function Home() {

  return (
    <div className="backroundColor">
      <div className="home-buttons">
        <nav>
        <a className="mainButton" href="/volunteer">VOLUNTEER</a>
        <a className="mainButton" href="/membership">MEMBERSHIP</a>
        <a className="mainButton" href="/donation">DONATION</a>
        <a className="mainButton" href="/account">MY ACCOUNT</a>
        <a target="_blank" href="https://www.youtube.com/channel/UCAQTSkwPU9Nnx-606ptbA8A" ><button style={{background: "#3b5998"}} class="social-button" >
        <FaFacebookF /></button></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCAQTSkwPU9Nnx-606ptbA8A" ><button style={{background: "#FF0000"}} class="social-button" >
        <FaYoutube /></button></a>
        </nav>
      </div>
    </div>
  );
}