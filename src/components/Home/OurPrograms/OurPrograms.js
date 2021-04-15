import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SingleProgram from '../SingleProgram/SingleProgram';


const OurPrograms = () => {
    const [programs, setPrograms] = useState([]);
    
    useEffect(()=> {
        fetch(`https://secure-refuge-75906.herokuapp.com/getPrograms`)
        .then(res => res.json())
        .then(data => setPrograms(data))
    },[])


    return (
        <section className="container">
             <div className="my-5">
                <h2 style={{color:'#1DBED5'}} className="text-center my-5">Our Programs</h2>
                <div className="row pb-5">
                   {
                       programs.map(program => <SingleProgram program={program}></SingleProgram>)
                   }
                </div>
             </div>
        </section>
    );
};

export default OurPrograms;