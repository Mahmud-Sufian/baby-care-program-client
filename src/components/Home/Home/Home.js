import React from 'react';
import CompanyProfession from '../CompanyProfession/CompanyProfession';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'; 
import OurPrograms from '../OurPrograms/OurPrograms';
import OurTeacher from '../OurTeacher/OurTeacher';
import Testimonial from '../Testimonial/Testimonial';
 

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OurPrograms></OurPrograms>
            <CompanyProfession></CompanyProfession>
            <Testimonial></Testimonial>
            <OurTeacher></OurTeacher>
            <Contact></Contact>
            <Footer></Footer> 
        </div>
    );
};

export default Home;