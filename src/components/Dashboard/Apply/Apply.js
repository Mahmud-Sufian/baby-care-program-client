import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { userContext } from '../../../App';
import Payment from '../Payment/Payment';
import Sidebar from '../Sidebar/Sidebar';
import './Apply.css';

const Apply = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [userData, setUserData] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm(); 

    const {id} = useParams();
    const [singleProgram, setSingleProgram] = useState({});
  
     
    useEffect(() => {
        fetch(`https://secure-refuge-75906.herokuapp.com/getSingleProgram/${id}`)
        .then(res => res.json())
        .then(data => setSingleProgram(data))
    },[id])

    const onSubmit = data => {
        setUserData(data);
    }

    const handlePaymentSuccess = (orderId) => {
        const orderDetail = { 
            userProgram: userData,
            applyTime:new Date(),
            orderId,
            ...loggedInUser
        }

        fetch(`https://secure-refuge-75906.herokuapp.com/apply`, {
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(orderDetail)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <section className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-5">
                    <div style={{display:userData ? 'none' : 'block'}}>
                        <h1 className="text-center middle text-primary">Apply Form</h1>  
                        <form onSubmit={handleSubmit(onSubmit)} className="myForm"> 
                        <input name="name" className="form-control" defaultValue={loggedInUser.name} placeholder="Your Name" ref={register} required/>
                        <br/>
                        <input name="email" className="form-control" defaultValue={loggedInUser.email} placeholder="Your Email" ref={register} required/>
                        <br/>
                        <input name="program" className="form-control" defaultValue={singleProgram.program} placeholder="Program" ref={register} required/>
                        <br/>
                        <input name="phone" className="form-control" defaultValue="" placeholder="Your Phone" ref={register} required/>
                        <br/>
                        <button className="btn btn-primary">Apply Now</button>
                        </form>
                    </div>
                    <div  style={{display:userData ? 'block' : 'none'}}>
                        <h3 className="text-center text-primary my-4 mb-5">Please Input Your Card Number </h3>
                        <Payment handlePaymentSuccess={handlePaymentSuccess}></Payment>
                    </div>
                {/* {
                  success && <p style={{textAlign:'center', color:'green', marginTop:'3px'}}>Upload Successfully</p>
                } */}
              
                
            </div>
            </div>
        </section>
    );
};

export default Apply;