import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import AddIcon from '@material-ui/icons/Add';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import TocIcon from '@material-ui/icons/Toc';
import RateReviewIcon from '@material-ui/icons/RateReview';
import { userContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isTeacher, setIsTeacher] = useState(null);
    
    fetch(`https://secure-refuge-75906.herokuapp.com/findTeacher`, {
        method:'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({email : loggedInUser.email})
    })
    .then(res => res.json())
    .then(data => setIsTeacher(data))


    return (
        <div className="sidebar-container"> 

        {
            isTeacher ? 
            <ul className="pt-5">
                <li>
                    <Link to="/">
                        <div>
                         <HomeIcon /><span className="ms-2">Home</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/appliedProgram">
                        <TocIcon /><span className="ms-2">Applied Program</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review">
                        <RateReviewIcon /><span className="ms-2">Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderList">
                        <BorderColorIcon /><span className="ms-2">Order List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addProgram">
                        <AddIcon /><span className="ms-2">Add Program</span>
                    </Link>
                </li>
                <li>
                    <Link to="/ourAllProgram">
                        <AddIcon /><span className="ms-2">All Program</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeTeacher">
                        <SupervisorAccountIcon /><span className="ms-2">Make Teacher</span>
                    </Link>
                </li> 
            </ul> 

            :

            <ul>
                <li>
                    <Link to="/">
                        <div>
                         <HomeIcon /><span className="ms-2">Home</span>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/appliedProgram">
                        <TocIcon /><span className="ms-2">Applied Program</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review">
                        <RateReviewIcon /><span className="ms-2">Review</span>
                    </Link>
                </li>
            </ul>
        }
            
        </div>
    );
};

export default Sidebar;