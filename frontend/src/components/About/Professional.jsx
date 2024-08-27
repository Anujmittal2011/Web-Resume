import React from 'react'

const Professional = () => {
  return (
    <div>
      <div className='container-fluid text-bg-light mb-4' style={{maxWidth: '1150px',minHeight:"530px"}}>
        <div className="content mb-2 mt-3" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h3 className='mt-4 fw-light pt-4 fs-3'>My Professional Skills</h3>
          <h3 className='text-bg-danger mt-4' style={{maxHeight:'6px',maxWidth:'60px'}}>.</h3>



          <div className='border' style={{ minHeight:"10px"}}>
            <div className='d-flex justify-content-between align-items-center mt-4 ms-4 me-4'>
              <h6 className='fs-5 fw-normal text-body-tertiary'>HTML</h6>
              <h6 className='fs-5 fw-normal text-body-tertiary'>95%</h6>
            </div>
            <div className='progress mb-4 mx-4' style={{height: '20px'}}>
              <div 
                className='progress-bar bg-secondary' 
                style={{width: '95%'}} 
              ></div>
            </div>



            <div className='d-flex justify-content-between align-items-center mt-4 ms-4 me-4'>
              <h6 className='fs-5 fw-normal text-body-tertiary'>CSS</h6>
              <h6 className='fs-5 fw-normal text-body-tertiary'>90%</h6>
            </div>
            <div className='progress mb-4 mx-4' style={{height: '20px'}}>
              <div 
                className='progress-bar bg-secondary' 
                style={{width: '90%'}} 
              ></div>
            </div>


            <div className='d-flex justify-content-between align-items-center mt-4 ms-4 me-4'>
              <h6 className='fs-5 fw-normal text-body-tertiary'>JS</h6>
              <h6 className='fs-5 fw-normal text-body-tertiary'>75%</h6>
            </div>
            <div className='progress mb-4 mx-4' style={{height: '20px'}}>
              <div 
                className='progress-bar bg-secondary' 
                style={{width: '75%'}} 
              ></div>
            </div>



            <div className='d-flex justify-content-between align-items-center mt-4 ms-4 me-4'>
              <h6 className='fs-5 fw-normal text-body-tertiary'>React</h6>
              <h6 className='fs-5 fw-normal text-body-tertiary'>80%</h6>
            </div>
            <div className='progress mb-4 mx-4' style={{height: '20px'}}>
              <div 
                className='progress-bar bg-secondary' 
                style={{width: '80%'}} 
              ></div>
            </div>


            <div className='d-flex justify-content-between align-items-center mt-4 ms-4 me-4'>
              <h6 className='fs-5 fw-normal text-body-tertiary'>Node JS</h6>
              <h6 className='fs-5 fw-normal text-body-tertiary'>70%</h6>
            </div>
            <div className='progress mb-4 mx-4' style={{height: '20px'}}>
              <div 
                className='progress-bar bg-secondary' 
                style={{width: '70%'}} 
              ></div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Professional