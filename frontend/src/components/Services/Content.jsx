import React from 'react'
import './Content.css' // We'll create this CSS file for hover effects

const Content = () => {
  return (
    <div className='container-fluid text-bg-light mb-4' style={{maxWidth: '1150px',minHeight:"700px"}}>
       <div className="content mb-2 mt-3" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h3 className='mt-4 fw-light pt-4 fs-3'>Services</h3>
            <h3 className='text-bg-danger mt-4' style={{maxHeight:'6px',maxWidth:'60px'}}>.</h3>

            <div className='row mt-4'>
                <div className='col-md-4 border service-box' style={{minHeight:'280px'}}>
                    <img src="https://www.freepnglogos.com/uploads/cloud-clipart/file-cartoon-cloud-21.png" 
                    style={{height:'100px',marginLeft:'28%',marginTop:'10%'}} alt=""
                    />
                    <h3 className='text-bg-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'35%'}}>.</h3>
                    <h3 className='text-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'38%'}}>Design</h3>
                </div>

                <div className='col-md-4 border service-box' style={{minHeight:'280px'}}>
                    <img src="https://www.freepnglogos.com/uploads/smile-png/smile-svg-png-icon-download-29.png" 
                    style={{height:'100px',marginLeft:'37%',marginTop:'10%'}} alt=""
                    />
                    <h3 className='text-bg-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'35%'}}>.</h3>
                    <h3 className='text-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'38%'}}>Coding</h3>
                </div>

                <div className='col-md-4 border service-box' style={{minHeight:'280px'}}>
                    <img src="https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png" 
                    style={{height:'100px',marginLeft:'32%',marginTop:'10%'}} alt=""
                    />
                    <h3 className='text-bg-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'35%'}}>.</h3>
                    <h3 className='text-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'32%'}}>Responsive</h3>
                </div>



                <div className='col-md-4 border service-box' style={{minHeight:'280px'}}>
                    <img src="https://www.freepnglogos.com/uploads/server-png/server-computer-database-network-vector-graphic-pixabay-31.png" 
                    style={{height:'100px',marginLeft:'40%',marginTop:'10%'}} alt=""
                    />
                    <h3 className='text-bg-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'35%'}}>.</h3>
                    <h3 className='text-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'38%'}}>DataBase</h3>
                </div>

                <div className='col-md-4 border service-box' style={{minHeight:'280px'}}>
                    <img src="https://www.freepnglogos.com/uploads/cloud-clipart/file-cartoon-cloud-21.png" 
                    style={{height:'100px',marginLeft:'28%',marginTop:'10%'}} alt=""
                    />
                    <h3 className='text-bg-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'35%'}}>.</h3>
                    <h3 className='text-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'35%'}}>Networking</h3>
                </div>
                
                <div className='col-md-4 border service-box' style={{minHeight:'280px'}}>
                    <img src="https://www.freepnglogos.com/uploads/skype-logo-png/skype-logo-books-software-and-life-18.png" 
                    style={{height:'100px',marginLeft:'36%',marginTop:'10%'}} alt=""
                    />
                    <h3 className='text-bg-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'35%'}}>.</h3>
                    <h3 className='text-secondary mt-4' style={{maxHeight:'6px',maxWidth:'120px', marginLeft:'38%'}}>Software</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content