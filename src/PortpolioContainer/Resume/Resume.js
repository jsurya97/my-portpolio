import React, { useState } from "react";
import "./Resume.scss";
import VerticalTabs from "./TabPanel";

import Flip from 'react-reveal/Flip';
import {
  FaDotCircle,
  FaBookReader,
  FaHistory,
  FaCode,
  FaChartBar,
  FaTachometerAlt,
} from "react-icons/fa";

import ScrollAnimation from 'react-animate-on-scroll';


import "animate.css/animate.min.css";

export const Resume = () => {
  const [tab, setTab] = useState("D");
  return (
    <div>
      
<div className="resume-container">

      <div className="resume-sub-container">
      
        <div className="resume-tab">
        <Flip left duration={3000}>
          <h1>Resume</h1>
          </Flip>
          <h5>My formal bio detail</h5>
          <div className="bar">
            <span className="line-bar">
              <span className="orange-bar"></span>
            </span>
          </div>
        </div>
      </div>
  
      <div class="tabs">
        <input
          type="radio"
          id="tab1"
          checked={tab === "D"}
          onClick={() => setTab("D")}
          name="tab-control"
        />
        <input
          type="radio"
          id="tab2"
          checked={tab === "M"}
          onClick={() => setTab("M")}
          name="tab-control"
        />
        <input
          type="radio"
          id="tab3"
          checked={tab === "A"}
          onClick={() => setTab("A")}
          name="tab-control"
        />
        <input
          type="radio"
          id="tab4"
          checked={tab === "B"}
          onClick={() => setTab("B")}
          name="tab-control"
        />
        <input
          type="radio"
          id="tab5"
          checked={tab === "C"}
          onClick={() => setTab("C")}
          name="tab-control"
        />
        <ul>
          <li title="Features">
            <label for="tab1" role="button">
              <FaBookReader />
              <br />
              <span>Education</span>
            </label>
          </li>
          <li title="Delivery Contents">
            <label for="tab2" role="button">
              <FaHistory />
              <br />
              <span>Work History</span>
            </label>
          </li>
          <li title="Shipping">
            <label for="tab3" role="button">
              <FaCode />
              <br />
              <span>Programming Skills</span>
            </label>
          </li>{" "}
          <li title="Returns">
            <label for="tab4" role="button">
              <FaChartBar />
              <br />
              <span>Projects</span>
            </label>
          </li>
          <li title="Returns">
            <label for="tab5" role="button">
              <FaTachometerAlt />
              <br />
              <span>Intrests</span>
            </label>
          </li>
        </ul>

        <div class="slider">
          <div class="indicator"></div>
        </div>  
        <div class="content">
          <section>
            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain"><div className="resume-head">SSLC</div>   <div className="edu-year">
                <span>2002-2012</span>
              </div></span>
                  <span> Govenrnment higher secondary school, Kurukkathi</span>
                </div>
              </div>

            
            </div>

            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
               
                <div className="edu-decs">
               
                  <span className="edu-domain"> <div className="resume-head">HSC</div> <div className="edu-year">
                <span>2012-2014</span>
              </div></span>
                  <span> Govenrnment higher secondary school, Kurukkathi</span>
                </div>
              </div>

            
            </div>

            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                
                <div className="edu-decs">
              
                  <span className="edu-domain">
                    
                    <div className="resume-head">BE - Electronics and communication Engg</div>
                    <div className="edu-year">
                <span>2014-2018</span>
              </div>
                  </span>
                  <span> Govenrnment college of engineering, Thanjavur</span>
                </div>
              </div>

             
            </div>
          </section>
          <section>
            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain">
                  <div className="resume-head">Intellect Design Arena Ltd, Chennai</div>
                      <div className="edu-year">
                <span>2020-Present</span>
              </div>
                  </span>
                  <span className="edu-role"> FRONT END DEVELOPER</span>
                  <span className="project-title">
                    Project 1 - Concentra bank
                  </span>
                  <span>
                    Concentra is a retail banking application used to manage
                    accounts, funds, transaction And we can track loans and EMI
                    at anytime anywhere with the help of Android, IOS and
                    browser supported devices
                  </span>
                  <span className="responsibility">Responsibilities</span>
                  <span className="responsibile-desc">
                    <span>
                      1. Around 2.4 years of experience in developing User
                      Interfaces for Mobile/Tablet/Desktop using Angular, HTML,
                      CSS, JavaScript, bootstrap.
                    </span>
                    <br />
                    <span>
                      2. Experience with creating custom directives, decorators,
                      pipes and services to interface with both restful.
                    </span>
                  </span>
                </div>
              </div>

             
            </div>

            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain">
                  <div className="resume-head"> Impiger technology, Coimbatore</div>
                    <div className="edu-year">
                <span>2019-2020</span>
              </div>
                  </span>
                  <span className="edu-role"> Junior software engineer</span>
                  <span className="project-title">
                    Project 2 - Working Solutions
                  </span>
                  <span>
                    Application used to provide customer service, sales,
                    support, and flexible business continuity. Tapping into a
                    vast, ondemand network of agents across all North America
                  </span>
                  <span className="responsibility">Responsibilities</span>
                  <span className="responsibile-desc">
                    <span>
                      1. I have 1.3 years of progressively responsible
                      experience in IT Industry as a junior softwear engineer in
                      Java, JPA, spring boot ,Angular.
                    </span>
                    <br />
                    <span>
                      2. Developed web pages using HTML5, CSS3, Angular 8,
                      Bootstrap, JSON
                    </span>
                  </span>
                </div>
              </div>

             
            </div>
          </section>
          <section>
            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain">Java Script</span>
                  <div className="bar-chart">
                    <span style={{ width: "200px" }} className="red-bar"></span>
                    <span
                      style={{ width: "20px" }}
                      className="black-bar"
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain">Java Script</span>
                  <div className="bar-chart">
                    <span style={{ width: "180px" }} className="red-bar"></span>
                    <span
                      style={{ width: "40px" }}
                      className="black-bar"
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain">React JS</span>
                  <div className="bar-chart">
                    <span style={{ width: "200px" }} className="red-bar"></span>
                    <span
                      style={{ width: "20px" }}
                      className="black-bar"
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain">Angular</span>
                  <div className="bar-chart">
                    <span style={{ width: "200px" }} className="red-bar"></span>
                    <span
                      style={{ width: "20px" }}
                      className="black-bar"
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain">HTML</span>
                  <div className="bar-chart">
                    <span style={{ width: "210px" }} className="red-bar"></span>
                    <span
                      style={{ width: "10px" }}
                      className="black-bar"
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain">CSS</span>
                  <div className="bar-chart">
                    <span style={{ width: "170px" }} className="red-bar"></span>
                    <span
                      style={{ width: "50px" }}
                      className="black-bar"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain"><div className="resume-head"> Personal portpolio website</div>    <div className="edu-year">
                <span>2023-2023</span>
              </div></span>
                  <span className="tech-dec"> Techonology Used : React js</span>
                  <span>
                    {" "}
                    A personal portpolio website to showcase all my projects and
                    details at one place
                  </span>
                </div>
              </div>

            
            </div>

            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain"><div className="resume-head">Mehandi website</div> <div className="edu-year">
                <span>2023-2023</span>
              </div></span>
                  <span className="tech-dec"> Techonology Used : Angular</span>
                  <span>
                    {" "}
                    A Mehandi website to showcase all Mehandi collections
                  </span>
                </div>
              </div>

             
            </div>
          </section>

          <section>
            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain">Playing with CHATGPT</span>
                  <span> Ask some questions in chatgpt</span>
                </div>
              </div>
            </div>

            <div className="education-container">
              <div className="edu-dot">
                <div>
                  <FaDotCircle size={16} style={{ color: "#ff5823" }} />{" "}
                </div>
                <div className="edu-decs">
                  <span className="edu-domain">Volleyball</span>
                  <span> Playing volleyball</span>
                </div>
              </div>
            </div>
          </section>
        </div>
    
      </div>
     
    </div>
   

      </div>
 
  );
};
