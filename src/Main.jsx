import React from 'react'
import "./CSS/main.css"

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

        </div>
        
    )
}


