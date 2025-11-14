import React from 'react';

function Education() {
    return ( 
               <div className='conatiner mt-4'>
                <div className='row'>
                    <div className='col-6 '>
                     <img src="media/images/education.svg" style={{width:"60%",margin:"0px 200px 100px"}}></img>  
                    </div>
                    <div className='col-6'>
                        <div className='row text-muted p-5' >
                           <h1 className='mb-3 fs-2'>Free and open market education</h1>
                           <p className='mt-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                           <a href=''style={{textDecoration:"none"}}>Varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                           <p className='mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                           <a href=''style={{textDecoration:"none"}}>TradingQ&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                        </div>
                    </div>
                </div>
               </div>
                );
        }


export default Education;