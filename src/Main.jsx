import React from 'react'
import "./CSS/main.css"
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ImageSlider from "./ImageSlider";
import {SliderData} from './SliderData';
import { Experience } from './Experience';
import { Intro } from './Intro';
import { Projects } from './Projects';
import { Blender } from '@mui/icons-material';

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
            
            

    <Intro/>
    <ImageSlider slides={SliderData}/>
    <Projects/>

            <div className='links'>
                <h1 className='subTitles'>LINKS</h1>
                <a target={"_blank"} rel="noreferrer" href="https://github.com/MazzGhani">
                    <GitHubIcon style={{fontSize:90}} className='linksBottom'/>
                </a>
                <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/mazz-ghani-412a37205/">
                    <LinkedInIcon style={{fontSize:90}} className='linksBottom'/>
                </a>

            </div>

            <Experience/>
            <div id='salamSection' className='description'>
                <h1 style={{textAlign:"center"}} className="subTitles" >ABOUT ME</h1>
                <div className='wrapperDescription'>
                    I've recently grown an interest in web development due to taking a intro web development course in university.
                    <p>This includes starting my projects with REACT while also hardening my CSS and HTML skills. I plan to apply my skills to help smaller businesses in Saskatoon to upgrade their websites in the near future.</p>
                    <p>I also enjoy playing video games and watching some basketball in my free-time.</p>

                </div>
                <div className="description" id='bonjourSection'>
                <h1 style={{textAlign:"center"}} className="subTitles" >LANGUAGES</h1>
                <div className='wrapperDescription'>
                <p>
                Je suis né à Montréal, mais j'ai déménagé à Saskatoon après la quatrième année. 
                J'ai poursuivi mes études en français à Saskatoon à <a target={"_blank"} rel="noreferrer" style={{textDecoration : 'none', color:'green'}} href="http://canadienne-francaise.ecolefrancophone.com/"> l'École Canadienne Française Pavillon Gustave Dubois </a>  jusqu'à des cours 
                universitaires suivis à l'Université de la Saskatchewan.                    
                </p> 
                </div>
                </div>
            </div>
        <canvas id="bg"></canvas>
        <script type='module' src='./Blender.js'></script>
        </div>
        
    )
}


