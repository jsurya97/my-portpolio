import { orange } from '@mui/material/colors'
import React from 'react'
import './MainFooter.scss'

export const MainFooter = () => {
  return (
    <div className='mainfooter-container'>
      <div style={{fontWeight:500,fontSize:'18px'}}>Let's talk</div> 
      <div className='sub-text' >
      <span> Wanna get in touch or talk about a project?
    Feel free to contact me via email at  </span> 
    <span>
    <a style={{fontWeight:500,color:'#ff5823',padding: '0 4px'}} href="mailto:jayasuryagowri97@gmail.com'">jayasuryagowri97@gmail.com</a> 
<br/></span><span>or drop a line in the form at the 
    contact page</span>
      </div>
    </div>
  )
}
