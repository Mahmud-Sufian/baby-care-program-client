import React from 'react';
import './CompanyProfession.css';
import babyPlay from '../../../images/babyWithPlay.png';

const CompanyProfession = () => {
    return (
        <section className="make-profession">
            <div className="container my-5">
            <div className="row">
                <div className="col-md-5">
                    <img className="img-fluid" src={babyPlay} alt=""/>
                </div>
                <div className="col-md-7 mt-5"> 
                       <h3 className="text-primary text-uppercase ">program</h3>
                        <h1 style={{color:'#4B6CB8'}} className="my-4">Make a Program <br/> Today</h1>
                        <p style={{color:'#4B6CB8'}} className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                        <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default CompanyProfession;