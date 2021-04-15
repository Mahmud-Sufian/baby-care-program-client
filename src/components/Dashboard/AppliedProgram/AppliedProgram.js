import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App'; 
import Sidebar from '../Sidebar/Sidebar';
import SingleAppliedProgram from '../SingleAppliedProgram/SingleAppliedProgram';
import './AppliedProgram.css';

const AppliedProgram = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [applied, setApplied] = useState([]);
    

    const appliedProgram = { email : loggedInUser.email}
    useEffect(() => {
        fetch(`https://secure-refuge-75906.herokuapp.com/appliedByEmail`, {
        method: 'POST', 
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(appliedProgram)
    })
    .then(res => res.json())
    .then(data => setApplied(data))

    },[loggedInUser.email])
    return (
        <section className=""> 
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-5"> 
                <h2>Applied Program</h2>
                 <SingleAppliedProgram applied={applied}></SingleAppliedProgram>
                </div>
            </div> 
        </section>
    );
};

export default AppliedProgram;