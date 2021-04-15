import React from 'react';

const SingleTeacher = ({teacher}) => {
    return (
        <div className="col-md-4 text-center">
        <div className="shadow "> 
           <div className="card-header">
               <img className="" style={{height:'200px'}} src={teacher.imageURL} alt=""/>
               <div className="mt-3 ms-3">
                   <h5 style={{color:'salmon'}}>{teacher.teacher}</h5>
                   <p>{teacher.email}</p>
               </div> 
           </div> 
        </div>
    </div>
    );
};

export default SingleTeacher;