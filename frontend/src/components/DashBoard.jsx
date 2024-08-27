// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const DashBoard = () => {
    return (<>
     <div className="container ">
     <Router>
        <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="about" element={<About/>} />
           <Route path ="services" element = {<Services/>}/>
           <Route path ="portfolio" element = {<Portfolio/>}/>
           <Route path ="blog" element = {<Blog/>}/>
           <Route path ="contact" element = {<Contact/>}/>        </Routes>
      </Router>
     </div>
     </>
    )
  }
  
  export default DashBoard
  