import React from 'react'
import "./about.css"
import Photo2 from "../../Images/Photo2.jpg"
export const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Photo2} alt="Photo" className="a-img"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">ABOUT ME</h1>
                <p className="a-desc">Open Source enthusiast, Passionate Software Developer. A highly accomplished, skilled and knowledgeable computer science student with extensive knowledge of programming and computer applications.Skilled on HTML,CSS, JavaScript,React.js,Node.js and Mongo db.</p>
            </div>
        </div>
    )
}
