import React from 'react'

export const Languages = () => {
  return (
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
  )
}
