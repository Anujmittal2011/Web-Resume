import React from 'react'

const Details = () => {
  return (
    <div className='container-fluid text-bg-light mb-4' style={{maxWidth: '1150px',minHeight:"400px"}}>
       <div className="content mb-2 mt-3" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h3 className='mt-4 fw-light pt-4 fs-3'>Send me a message</h3>
            <h3 className='text-bg-danger mt-4' style={{maxHeight:'6px',maxWidth:'160px'}}>.</h3>

            <form className='mt-4'>
                <div className='row'>
                    <div className='col-md-6'>
                    <input type="text" className="form-control mb-4" style={{height:'50px'}} placeholder="Your Name" required />
                    <input type="email" className="form-control mb-4" style={{height:'50px'}} placeholder="Your Email" required />
                    <input type="tel" className="form-control"style={{height:'50px'}} placeholder="Your Phone" required />
                    </div>
                    <div className='col-md-6'>
                    <textarea className="form-control" style={{height:'125px'}} placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-danger mt-4" style={{height:'50px',width:'535px'}} >Send Now</button>
                    </div>
                </div>
            </form>


        </div>
    </div>
  )
}

export default Details