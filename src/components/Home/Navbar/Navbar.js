import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../App";
import './Navbar.css';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <nav className="container">  
           
           <div className="topnav leftSide row">
                <div className="col-md-6">
                    <h2 style={{color:'', marginLeft:'30px', fontWeight:'bold'}}>Baby Program</h2>
                </div>
                <div className="col-md-6 mainNav">
                <Link className="active" to="/">Home</Link>
                <Link to="">Services</Link>
                <Link to="/dashboard">Admin</Link> 
                <Link to="">Contact</Link> 
                {
                    loggedInUser.email && <Link to="/">{loggedInUser.email && loggedInUser.name}</Link>
                }
                <Link to="/login" onClick={() => setLoggedInUser({})}>{loggedInUser.email ? 'Log Out' : 'Login'}</Link>
                </div>
                
            </div> 
      </nav>
  );
};

export default Navbar;
