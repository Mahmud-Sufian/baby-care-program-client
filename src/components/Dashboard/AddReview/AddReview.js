import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, errors } = useForm(); 
    const [success, setSuccess] = useState(false);

    const onSubmit = data => { 
        fetch(`https://secure-refuge-75906.herokuapp.com/addReview`, {
            method: 'POST', 
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                setSuccess(true);
            }
        })
    }

    return (
        <section>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                <h3 className="text-center">Add Review</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="myForm"> 
                <input name="name" className="form-control" defaultValue={loggedInUser.name} placeholder="" ref={register} required/>
                <br/>
                <input name="designation" className="form-control" defaultValue="" placeholder="Company's Name. Designation" ref={register} required/>
                <br/>
                 <textarea name="opinion" cols="68" rows="5" className="form-control" defaultValue="" placeholder="Your Opinion" ref={register} required>

                 </textarea>
                <br/>
                 
                <input type="submit" className="form-control" />
                {
                  success && <p style={{textAlign:'center', color:'green', marginTop:'3px'}}>Review Successfully</p>
                }
              </form>
                </div>
            </div>
        </section>
    );
};

export default AddReview;