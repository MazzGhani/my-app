import React from 'react'
import "./CSS/main.css"
import { FaAngleRight } from "react-icons/fa";
import { FaHammer } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";
import { FaBug } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";



export const Experience = () => {
  return (
    <div className='description' >
    <h1 style={{textAlign:"center"}}  className='subTitles'>EXPERIENCE</h1>
    <div className='wrapperDescription'>
    <div> 
    <a target={"_blank"} rel="noreferrer" style={
      {textDecoration : 'none', color:'brown' }
      } 
      href="https://maryandemmy.vercel.app/"> 
      Mary Liv & Emmy Lou </a> as a Web Developer
    <div style={{paddingBottom:"10px",paddingTop:"10px"}}>
    From January 2023 - Present (Contract)
    </div>
    <div>
    Created a website that  users can see recent shows, admins can create shows,delete them, and there's also the addition of THREE JS on the site. 
    </div>
    </div>
    <div style={{paddingBottom:"10px",paddingTop:"10px"}}> 
    <a target={"_blank"} rel="noreferrer" style={
      {textDecoration : 'none', color:'grey' }
      } 
      href="https://serveased.com/"> 
      Serveasd </a> as a Developer (FrontEnd)
    <div style={{paddingBottom:"10px",paddingTop:"10px"}}>
    From May 2023 - Present (Volunteer)
    </div>
    <div>
    Helping with production on their FrontEnd. Using Next.JS, React, and Typescript. 
    </div>
    </div>
    <div style={{paddingTop:"15px"}} > <a target={"_blank"} rel="noreferrer" style={{textDecoration : 'none', color:'purple' }} href="https://barber-self.vercel.app/"> Alesi the Barber </a> as a Web Developer.
    <div style={{paddingBottom:"10px",paddingTop:"10px"}}>
        From Febuary 2022 - Present (Contract)
    </div>
    <div>
      This site is currently still in the works, but I've got a working prototype live on Vercel. 
      The main idea that my barber wants, is a way to implement their 3 professions into a site. 
      So a way to show that they are a barber, teacher , and artist. 
      I decided toi use react-three-fiber, and completly use the canvas for this site. 
    </div>
    </div>
    <div style={{paddingTop:"15px"}}> <a target={"_blank"} rel="noreferrer" style={{textDecoration : 'none', color:'green' }} href="https://sites.google.com/shopify.com/jrsptadvisor/home"> Shopify </a> as a Junior Support Advisor.
    <div style={{paddingBottom:"10px",paddingTop:"1px"}}>
        From March 2022 - August 2022 (Contract)
    </div>
    <div>
        I'm super excited to be working for an established tech company and being able to apply my skills that I've learned so far. The job includes helping customers with their shopify issues via email, text chat, and phone calls.
    </div>
    </div>
    <div style={{paddingTop:"15px"}}>
    It Support Specialist at <a target={"_blank"} rel="noreferrer" style={{textDecoration : 'none', color:'green'}} href="https://www.facebook.com/Allaboutcellandsahdes/"> All About Cell and Shades </a>. 
      <div>
          From: 2017 - 2020
      </div>
      <div > I've learned a majority of my customer service and technical skills from working here.
           <br />
           Such As:
           <div className='typewriter'>
            <FaAngleRight/> Coding in BASH script</div>
            <div>
            <FaHammer/>  Helping customers fix & debugg their technical issues.
            </div>
            <div >
            <FaMoneyBillAlt />   Selling phone cases & phones to customers.
            </div>
            <div>
            <FaBug/>    Debugging issues with phones, laptops, and desktops.
            </div>
            <div>
            <FaLaptopCode/>    Kept tabs on the newest trends and waves of technology.
            </div>
           <li>Worked with mobiles, computers, and laptops.</li>
      </div>

    </div>


    </div>

</div>
  )
}
