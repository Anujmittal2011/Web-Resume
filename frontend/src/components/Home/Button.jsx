import React from 'react'
import SlideIn from './SlideIn'

const Button = () => {
    
  return (

    <div>
     
    <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ-gzPAnJEIzWHf-vXDEHaEH7PmUnWvvQ2QA&s"
              alt="DSA to Development"
              className="img-fluid"
              style={{ width: '80px', height: '80px' }}
              onClick={() => handleOpenSlide(<Menu/>)}
            />
       
       </div>
  )
}

export default Button
