import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
         <footer className="pt-5 footer-container">
             <div className="container">
             <div className="row">
                 <div className="col-md-3">
                     <p>H#000 (0th floor). Road #00 <br/>New DOHS. Mohakhali. Dhaka. Bangladesh</p>
                 </div>
                 <div className="col-md-3">
                     
                     <ul>
                         <h5>Company</h5>
                         <li>About</li>
                         <li>Project</li>
                         <li>Our Team</li>
                         <li>Terms Condition</li>
                         <li>Submit Listing</li>
                     </ul>
                 </div>
                 <div className="col-md-3">
                    
                     <ul>
                         <h5>Quick Links</h5>
                         <li>Quick Links</li>
                         <li>Rentals</li>
                         <li>sales</li>
                         <li>Contact</li>
                         <li>Our Blog</li>
                     </ul>
                 </div>
                 <div className="col-md-3">
                 
                     <ul>
                         <h5>About us</h5>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, dolor?</p>
                          
                     </ul>
                 </div>
             </div>
             </div>
             <div style={{backgroundColor:'#A1D2D5'}} className="text-center">
                 <p>Copyright {(new Date()).getFullYear()}. All are reserved</p>
             </div>
         </footer> 
    );
};

export default Footer;