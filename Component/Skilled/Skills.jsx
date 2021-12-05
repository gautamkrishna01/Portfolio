import React from 'react'
import "./skills.css"

export const Skills = () => {
    return (
        <>
        <div className="skilles">
            <h1 className="Skilles-intro">My SKILLS</h1>
            <div className="skilles-bar">
                <div className="bar">
                    <div className="info">
                        <span>HTML</span>
                    </div>
                    <div className="progress-bar html"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Css</span>
                    </div>
                    <div className="progress-bar css"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>JavaScript</span>
                    </div>
                    <div className="progress-bar Javascript"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>React Js</span>
                    </div>
                    <div className="progress-bar react"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Node Js</span>
                    </div>
                    <div className="progress-bar node"><span></span></div>
                </div>
                <div className="bar">
                    <div className="info">
                        <span>Mongo-DB</span>
                    </div>
                    <div className="progress-bar mongo"><span></span></div>
                </div>
            </div>
            </div>
        </>
    )
}
