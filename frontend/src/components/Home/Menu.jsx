// import React from 'react'
// import { Link } from 'react-router-dom';
// import './Menu.css';

// const Menu = () => {
//   return (

//     <div className="container text-center mt-5">
//       <div className="row">
//         <div className="col-4">
//           <Link to="/" className="circle">HOME</Link>
//         </div>
//         <div className="col-4">
//           <Link to="/about" className="circle">ABOUT</Link>
//         </div>
//         <div className="col-4">
//           <Link to="/services" className="circle">SERVICES</Link>
//         </div>
//       </div>        
//       <div className="row mt-4">
//         <div className="col-4">
//           <Link to="/portfolio" className="circle">PORTFOLIO</Link>
//         </div>
//         <div className="col-4">
//           <Link to="/blog" className="circle">BLOG</Link>
//         </div>
//         <div className="col-4">
//           <Link to="/contact" className="circle">CONTACT</Link>
//         </div>
//       </div>
//     </div>

//   )
// }

// export default Menu


import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = ({ onMenuItemClick }) => {
  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-4">
          <Link to="/" className="circle" onClick={onMenuItemClick}>HOME</Link>
        </div>
        <div className="col-4">
          <Link to="/about" className="circle">ABOUT</Link>
        </div>
        <div className="col-4">
          <Link to="/services" className="circle">SERVICES</Link>
        </div>
      </div>        
      <div className="row mt-4">
        <div className="col-4">
          <Link to="/portfolio" className="circle">PORTFOLIO</Link>
        </div>
        <div className="col-4">
          <Link to="/blog" className="circle">BLOG</Link>
        </div>
        <div className="col-4">
          <Link to="/contact" className="circle">CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default Menu