import React from 'react';
import logo from '../../../images/avatar.png';

const SingleTestimonial = ({test}) => {
  
    return (
         <div className="col-md-4">
             <div className="shadow p-3 "> 
                <div className="card-header d-flex justify-content-center align-items-center">
                    <img className="" style={{height:'30px'}} src={logo} alt=""/>
                    <div className="mt-3 ms-3">
                        <h5 style={{color:'salmon'}}>{test.name}</h5>
                        <p>{test.designation}</p>
                    </div> 
                </div>
                <div className="text-secondary my-3">
                        <p>{test.opinion}</p>
                </div>
             </div>
         </div>
    );
};

export default SingleTestimonial;