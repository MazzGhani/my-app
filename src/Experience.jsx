import React from 'react'
import "./CSS/main.css"
import { FaAngleRight } from "react-icons/fa";

export const Experience = () => {
  return (
    <div className='description' >
    <h1 style={{textAlign:"center"}}  className='subTitles'>EXPERIENCE</h1>
    <div className='wrapperDescription'>
    <p> Will be working at <a target={"_blank"} rel="noreferrer" style={{textDecoration : 'none', color:'green' }} href="https://sites.google.com/shopify.com/jrsptadvisor/home"> Shopify </a> as a Junior Support Advisor.
    <p>
        From March 2022 - August 2022 (Contract)
    </p>
    <p>
        I'm super excited to be working for an established tech company and being able to apply my skills that I've learned so far. The job includes helping customers with their shopify issues via email, text chat, and phone calls.
    </p>
    </p>
    <p >
    It Support Specialist at <a target={"_blank"} rel="noreferrer" style={{textDecoration : 'none', color:'green'}} href="https://www.facebook.com/Allaboutcellandsahdes/"> All About Cell and Shades </a>. 
      <p>
          From: 2017 - 2020
      </p>
      <p > I've learned a majority of my customer service and technical skills from working here.
           <br />
           Such As:
           <div className='typewriter'>
            <FaAngleRight/> Coding in BASH script</div>
           {/* <li>
               Helping customers fix & debugg their technical issues.
           </li>
           <li>
               Selling phone cases & phones to customers.
           </li>
           <li>
               Debugging issues with phones, laptops, and desktops.
           </li>
           <li>
               Kept tabs on the newest trends and waves of technology.
           </li>
           <li>Worked with mobiles, computers, and laptops.</li> */}
      </p>

    </p>

    </div>

</div>
  )
}
