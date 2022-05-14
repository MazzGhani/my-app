import React from 'react'
import "./CSS/main.css"

export const Intro = () => {
  return (
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
  )
}
