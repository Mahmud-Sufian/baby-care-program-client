import React from 'react';
import './HeaderMain.css';
import baby1 from '../../../images/babyWithBook.jpg';

const HeaderMain = () => {
    return (
        <section className="container">
             <div className="row my-5 py-5">
                <div className="col-md-4 offset-md-1 d-flex align-self-center">
                    <div>
                    <h1>Together Well Explore New Thing</h1>
                    <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam exercitationem quo delectus nobis. Alias, impedit.</p>
                    <button className="btn btn-danger mb-2">Explore</button>
                    </div>
                </div>
                <div className="col-md-6 offset-md-1">
                    <div>
                    <img className="img-fluid" src={baby1} alt=""/>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default HeaderMain;