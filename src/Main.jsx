import React from 'react'
import "./main.css"
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Main() {
    return (
        <div >
            <div className='mainTitleName'>
                <h1>
                    MAZZ GHANI
                    <br />
                    <div className='subTitle'>
                        JUNIOR DEVELOPPER
                    </div>
                    <div className='helloQuickLinks'>
                           <button className='button'>
                               <a className="buttonStyle" href="#HiSection"> Hi</a></button>
                            <button className='button'>
                                <a  className="buttonStyle" href="#salamSection"> Assalamualaikum</a>
                            </button>
                            <button className='button'>
                            <a className="buttonStyle" href="#bonjourSection">Bonjour</a>
                            </button>
                    </div>
                </h1>
            </div>
            
            

            <div className='description' >
                {/* <h1 className=''>EDUCATION</h1> */}
                <div className='wrapperDescription'>
                <p >
                Studying at the <a target={"_blank"} rel="noreferrer" style={{textDecoration : 'none', color:'green'}} href="https://www.usask.ca/ "> University of Saskatchewan </a> 
                  and pursuing a Bacherlors in Computer Science (4th year).
                  <p> I'm also close to finishing my Minor is Psychology in retation to my Bachelors Degree.
                      I've learned a numerous amount of skills throughout my University career.
                       <br />
                       <br />
                        Ranging from the basics of multiple languages, to the complexity of algorithms , and plenty of soft skills with group work.
                  </p>
 
                </p>

                </div>
        
            </div>

            <div className='mainskills'>
            <h1 className='subTitles' id='HiSection'>SKILLS & PROJECTS</h1>
            <div id='container'>
         <div className='project1'>
                <div className='project1Title'>
                    MERN STACK
                </div>
            </div>
            <div className='project1'>
                <div className='project1Title'>
                    UNITY APP PROJECT
                </div>
            </div>
            <div className='project1'>
                <div className='project1Title'>
                    SKILLS
                    <li> HTML | CSS</li>
                    <li>JS | REACT</li>
                    <li>C# | UNITY </li>
                    <li> JAVA | C</li>
                    <li>SCALA | MIPS</li>
                    <li>PYTHON | BLENDER</li>
                </div>
            </div>

            </div>
   <br />
            </div>
            <div className='links'>
                <h1 className='subTitles'>LINKS</h1>
                <a target={"_blank"} rel="noreferrer" href="https://github.com/MazzGhani">
                    <GitHubIcon style={{fontSize:90}} className='linksBottom'/>
                </a>
                <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/mazz-ghani-412a37205/">
                    <LinkedInIcon style={{fontSize:90}} className='linksBottom'/>
                </a>

            </div>
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
                  <p> I've learned a majority of my customer service and technical skills from working here.
                       <br />
                       Such As:
                       <li >
                           Using my BASH and technical skills to help organize the company computer.
                       </li>
                       <li>
                           Helping customers purchase | fix |  debugg their technical issues.
                       </li>
                       <li>
                           Kept tabs on the newest trends and waves of technology.
                       </li>
                       <li>Worked with mobiles, computers, and laptops.</li>
                  </p>
 
                </p>

                </div>
        
            </div>
            <div>
                <h1 className="subTitles" id='salamSection'>ABOUT ME</h1>
                <div>
                    INTERESTS
                    HOBBIES 
                </div>
                <div className="subTitles" id='bonjourSection'>
                    Languages
                </div>
            </div>

        </div>
    )
}


