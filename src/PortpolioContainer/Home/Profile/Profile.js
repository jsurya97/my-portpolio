import React from "react";
import Typical from "react-typical";
import ScrollAnimation from 'react-animate-on-scroll';
import './Profile.css'
import "animate.css/animate.min.css";
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
import LightSpeed from 'react-reveal/LightSpeed';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a target="_blank" href="https://www.linkedin.com/in/jayasurya-muthusamy-84b697183">
                <Rotate><i className="fa fa-facebook-square "></i></Rotate>
                
              </a>

              <a target="_blank" href="https://www.linkedin.com/in/jayasurya-muthusamy-84b697183">
              <Rotate><i className="fa fa-google-plus-square "></i></Rotate>
              </a>

              <a target="_blank" href="https://instagram.com/jayasurya_33?igshid=ZDdkNTZiNTM=">
              <Rotate><i className="fa fa-instagram "></i></Rotate>
              </a>

              <a target="_blank" href="https://www.linkedin.com/in/jayasurya-muthusamy-84b697183">
              <Rotate><i className="fa fa-youtube-square "></i></Rotate>
              </a>

              <a target="_blank" href="https://www.linkedin.com/in/jayasurya-muthusamy-84b697183">
              <Rotate><i className="fa fa-linkedin "></i></Rotate>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              <Bounce left>
              Hello, I 'M Jayasurya
              </Bounce>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    
                    "Full Stack Developer",
                    2000,
                    "MERN Stack Developer",
                    2000,
                    "MEAN Stack Developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
         
              <Bounce left>
              <p> Knack of building application with front end and back end
                operations.</p>
               
                </Bounce>
   
              </span>
            </span>
          </div>
          <div className="profile-options">
          <LightSpeed><button className="btn primary-btn">{""}Hire me </button></LightSpeed>
            
           
            <a
              href="jayasurya_3.7year_angular.pdf"
              download="jayasurya_3.7year_angular.pdf"
            >
               <LightSpeed><button className="btn highlighted-btn">Get Resume</button></LightSpeed>
              
            </a>
          </div>
        </div>
        <div className="profile-picture">
        <Rotate>
          <div className="profile-picture-background"></div>
          </Rotate>
        </div>
        
      </div>
    </div>
  );
};

export default Profile;
