import React from 'react'

const Intro = () => {
  return (
    // <div className='container badge text-bg-light'>
    <div className='container-fluid text-bg-light mb-4' style={{maxWidth: '1150px'}}>
       <div className="content mb-2 mt-3  " style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="row d-flex">
          <div className="col-md-6 mt-4">
            <div className='row'>
                <div className='col-md-3 mt-3 'style={{ maxWidth: '1100px',maxHeight:'120px', margin: '0 auto' }}>
                    <img
                        src="https://demoxml.com/html/vcard2/images/avatar.png"
                        className="img-fluid mb-5"
                        style={{ width: '100px', height: '100px' }}
                        alt="Avatar"
                    />
                </div>
                <div className='col-md-9'>
                    <h3 className='fs-5 mt-3'style={{ maxWidth: '1100px', margin: '0 auto' }}>Hello, I am Gary Stroke Designer and Front-End Developer</h3>
                    <p className=''>I have ten years experience as a web interface designer. I have a love of clean, elegant styling I have lots of experience in the production of CSS and (X)HTML for</p>
                </div>
                <p className='mb-5'>modern websites. I have a reasonable grasp of using JavaScript frameworks, specifically jQuery.This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.</p>
            </div>
          </div>



          <div className="col-md-6  mt-5 ">
            <p><span className='text-bg-danger p-2 ms-1'>name </span ><span className='bg-body-secondary p-2 pe-5'>Anuj Mittal</span></p>
            <p><span className='text-bg-danger p-2 ms-1'>Date Of Birth</span ><span className='bg-body-secondary p-2 pe-5'>20 Nov 2005</span></p>
            <p><span className='text-bg-danger p-2 ms-1'>Email </span ><span className='bg-body-secondary p-2 pe-5'>anujmittal201103@gmail.com</span></p>
            <p><span className='text-bg-danger p-2 ms-1'>Address</span ><span className='bg-body-secondary p-2 pe-5'>Mahavir enclave, New Delhi</span></p> 
            <p><span className='text-bg-danger p-2 ms-1'>Phone N0. </span ><span className='bg-body-secondary p-2 pe-5'>XXXXXXXX95</span></p>
          </div>
        </div>
       </div>
       
    </div>
  )
}

export default Intro

