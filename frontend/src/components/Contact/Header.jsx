import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div className='container-fluid text-bg-dark mb-4 p-3' style={{maxWidth: '1150px'}}>
       <div className='row align-items-center'>
            <div className='col-md-9 d-flex'>
                <h5 className='ms-4 fw-bolder mb-0'> <span className='text-danger me-3 fw-bolder'>l</span>CONTACT</h5>
            </div>
            <div className='col-md-2 d-flex justify-content-end fw-lighter'>
                <p className='line mb-0'>home</p>
                <span className='text-danger mx-3'> > </span>
                <p className='line mb-0'>Contact</p>
            </div>
            <div className='col-md-1 d-flex justify-content-end'>
                <button onClick={handleGoBack} className='btn btn-outline-light btn-sm'>Back</button>
            </div>
       </div>
    </div>
  )
}

export default Header