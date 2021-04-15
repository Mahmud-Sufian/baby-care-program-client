import React, { useEffect, useState } from 'react';
import SingleTeacher from '../SingleTeacher/SingleTeacher';

const OurTeacher = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch(`https://secure-refuge-75906.herokuapp.com/ourTeacher`)
        .then(res => res.json())
        .then(data => setTeachers(data))
    })


    return (
        <section className="container">
            <div className="row">
                <h3 className="text-center text-info my-5">Our Teacher</h3>
                {
                    teachers.map(teacher => <SingleTeacher teacher={teacher}></SingleTeacher>)
                }
            </div>
        </section>
    );
};

export default OurTeacher;