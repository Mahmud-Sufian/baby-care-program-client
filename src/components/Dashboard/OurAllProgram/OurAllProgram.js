import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import OurAllProgramList from '../OurAllProgramList/OurAllProgramList';
import Sidebar from '../Sidebar/Sidebar';

const OurAllProgram = () => {
    const [programs, setPrograms] = useState([]);
    
    useEffect(()=> {
        fetch(`https://secure-refuge-75906.herokuapp.com/getPrograms`)
        .then(res => res.json())
        .then(data => setPrograms(data))
    },[])

    return (
        <section className="">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-5">
                        <h3>Order List</h3>
                         <OurAllProgramList programs={programs}></OurAllProgramList>
                </div>
            </div>
        </section>
    );
};

export default OurAllProgram;