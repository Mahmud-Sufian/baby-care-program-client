import React, { useEffect, useState } from 'react';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([]);
     
    useEffect(() => {
        fetch(`https://secure-refuge-75906.herokuapp.com/getReview`)
        .then(res => res.json())
        .then(data => setTestimonial(data))
    },[])

    return (
        <section className="container mb-5 pb-5">
            
           <div className="row">
           <h3 style={{color:'#1DBED5'}} className="text-center my-5">Testimonial</h3>
           {
                testimonial.map(test => <SingleTestimonial test={test}></SingleTestimonial>)
            }
           </div>
        </section>
    );
};

export default Testimonial;