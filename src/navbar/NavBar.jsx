import React from "react";
import { FaYoutube, FaFacebookF,FaHandsHelping,FaRegAddressCard,FaDonate,FaUser } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div>
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
    <div class="navigation">
  <input type="checkbox" class="navigation__checkbox" id="navi-toggle"/>
  <label for="navi-toggle" class="navigation__button">
                <span class="navigation__icon">&nbsp;</span>
  </label>
  <div class="navigation__background">&nbsp;  </div>
  <nav class="navigation__nav">
    <ul class="navigation__list">
      <li class="navigation__item"><a href="/" class="navigation__link">HOME</a> </li>
      <li class="navigation__item"><a href="/about" class="navigation__link">ABOUT ME</a> </li>
      <li class="navigation__item"><a href="/islamic-classes" class="navigation__link">PROJECTS</a> </li>
      <li class="navigation__item"><a href="/services" class="navigation__link">EXPERIENCE</a> </li>
      <li class="navigation__item"><a href="/media-releases" class="navigation__link">CONTACT ME</a> </li>
    </ul>
  </nav>
</div>
</div>

  );
}
