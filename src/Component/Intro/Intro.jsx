import React from 'react'
import "./intro.css"
import photo1 from "../../Images/photo1.jpg"
export const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello,👋 My name is</h2>
                    <h1 className="i-name">Krishna Gautam</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">UI-UX Designer</div>
                            <div className="i-title-item">Content Creator</div>
                        </div>
                    </div>
                </div>
                <div className="botton">
                    <button className="btn-1"> <a href="https://drive.google.com/file/d/13sRMTBiLHsqBWAdow8A-YEDx4TJllYhf/view?usp=sharing" >Download CV</a></button>
                    <button className="btn-2"> <a href ="Contact.jsx">Hire Me </a></button></div>
            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={photo1} className="i-img" />
            </div>

        </div>

    )
}
