import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export const Links = () => {
  return (
    <div className='links'>
    <h1 className='subTitles'>LINKS</h1>
    <a target={"_blank"} rel="noreferrer" href="https://github.com/MazzGhani">
        <GitHubIcon style={{fontSize:90}} className='linksBottom'/>
    </a>
    <a target={"_blank"} rel="noreferrer" href="https://www.linkedin.com/in/mazz-ghani-412a37205/">
        <LinkedInIcon style={{fontSize:90}} className='linksBottom'/>
    </a>

</div>
  )
}
