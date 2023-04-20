import React from 'react';
import { FaDotCircle } from "react-icons/fa";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import ScrollAnimation from 'react-animate-on-scroll';

import './AboutMe.scss'
const AboutMe = () => {
    return (
        <div className='about-container'>
              
            <div className='about-sub-container'>
            <div className='about-tab'>
            <Slide left>
                
                <h1>About Me</h1>
                </Slide>
                <h5>Why choose me?</h5>
                <div className='bar'><span className='line-bar'><span className='orange-bar'></span></span></div>
            </div>
            <ScrollAnimation animateIn='flipInY'
  animateOut='flipOutY'>
            <div className='about-details-container'>
                <div className='about-image'>
                <img src={require ('../../assets/Home/me.jpeg')} />
                </div>
                <div className='about-desc'>
                    Full stack web and mobile developer with background knowledge of MEAN with redux and MERN stacks,
                    along with a knock of building applications with ulmost efficiancy.

                    <div className='higlights'>
                        <h1 className='higlights-header'>Here are a few Higlights</h1>
                        <div className='higlights-points'>
                            <div className='higlights-decs'><FaDotCircle size={16} style={{color:"#ff5823"}}/><span className='higlight-text'>Full stack Web and mobile development</span> </div>
                            <div  className='higlights-decs'><FaDotCircle size={16} style={{color:"#ff5823"}}/><span className='higlight-text'>Intractive front end as per the design</span></div>
                            <div  className='higlights-decs'><FaDotCircle size={16} style={{color:"#ff5823"}}/><span className='higlight-text'>React and Angular</span></div>
                            <div className='higlights-decs'><FaDotCircle size={16} style={{color:"#ff5823"}}/><span className='higlight-text'>Redux for state management</span></div>
                            <div  className='higlights-decs'><FaDotCircle size={16} style={{color:"#ff5823"}}/><span className='higlight-text'>Building REST api by using Express js</span></div>
                        </div>

                    </div>
                </div>
            </div>
            </ScrollAnimation>
            </div>
           
            
        </div>
    );
}

export default AboutMe;
