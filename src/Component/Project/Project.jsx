import React from 'react'
import "./project.css"
import Music  from "../../Images/Music.PNG"
import Alarm from "../../Images/Alaram.PNG"
import Commerce from "../../Images/E-commerce.PNG"
import Analog from "../../Images/Analog.PNG"
import Me from "../../Images/Me.PNG"
export const Project = () => {
    return (
        <>
         <section id="project">
         <div className="project-heading">
            <span>Let's See My Work</span>
            <h3 className>My Projects</h3>
          </div>
          <div className="project-filter">
            <li className="list">All</li>
          </div>
          <div className="project-container">
           <div className="project-box">
             <img src={Music} />
             <p>Music App</p>
             <a href="https://gautamkrishna01.github.io/Music-_App/">  Demo </a>
             <h5 className="techstack">Tech Stack:Html,Css,Javascript</h5>
           </div>
          
           <div className="project-box">
             <img src={Alarm} />
             <p>Alarm clock</p>
             <a href="https://gautamkrishna01.github.io/Alarm-Clock/" className="demo">  Demo </a>
             <h5 className="techstack">Tech Stack:Html,Css,Javascript</h5>
        
           </div>
           <div className="project-box">
             <img src={Analog} />
             <p>Analog-Clock</p>
             <a href="https://gautamkrishna01.github.io/Analog-clock/">Demo </a>
             <h5 className="techstack">Tech Stack:Html,Css,Javascript</h5>
        
           </div>
           <div className="project-box">
             <img src={Commerce} />
             <p>E-Commerce</p>
             <a href="https://gautamkrishna01.github.io/E-Commerce/"> Demo </a>
             <h5 className="techstack">Tech Stack:Html,Css,Javascript</h5>
        
           </div>
           <div className="project-box">
             <img src={Me} />
             <p>Portfolio</p>
             <a href="gautamkrishna01.github.io/Portfolio">  Demo </a>
             <h5 className="techstack">Tech Stack:Html,Css,React</h5>
        
           </div>
          </div>
            
         </section>
        </>
    )
}
