import React from 'react'
import Header from './Header'
import Intro from './Intro'
import Education from './Education'
import Professional from './Professional'
import Experience from './Experience'

const About = () => {
  return (
    <div className=''style={{minHeight: '2380px'}}>
        <Header/>
        <Intro/>
        <Education/>
        <Professional/>
        <Experience/>
    </div>
  )
}

export default About

