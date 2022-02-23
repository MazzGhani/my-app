import React from 'react'
import "./main.css"
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
                Studying at the <a style={{textDecoration : 'none', color:'green'}} href="https://www.usask.ca/ "> University of Saskatchewan </a> 
                  and pursuing a Bacherlors in Computer Science (4th year).
                  <p> I'm also close to finishing my Minor is Psychology in retation to my Bachelors Degree.
                      I've learned a numerous amount of skills throughout my University career. Ranging from the basics of multiple languages, the complexity of algorithms , and plenty of soft skills with group work.
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
                <li>
                    <a href="https://github.com/MazzGhani">GitHub </a>
                    <a href="https://www.linkedin.com/in/mazz-ghani-412a37205/">LinkedIn</a>
                </li>
            </div>
            <div>
                <h1>EXPERIENCE</h1>
                <div>
                    IT AND CODING EXPERIENCE +  LABOUR RELATED EXPERIENCE = MAZZ
                    <div>
                        IT SUPPORT SPECIALIST 
                    </div>
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
