import React from 'react'
import { Intro } from './Component/Intro/Intro'
import { About } from './Component/About/About'
import { Skills } from './Component/Skilled/Skills'
import { Project } from './Component/Project/Project'
import { Contact } from './Component/Contact/Contact'

const App = () => {
    return (
        <>

         <Intro/>  
         <About/> 
         <Skills/>
         <Project/>
         <Contact/>
        </>
    )
}

export default App
