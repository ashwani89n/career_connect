import React from 'react';
import './Student_Profile.css'
import './Login.css'
import './Header.css'
import Card from './Card';
import { Link } from "react-router-dom";

const Student_Employer_list = () => {
    

    return (
        <>
            <div className='header-container'> 
            <h1 className="logo">Career Connect</h1>
            <div className="auth-options">
                <div className='icon1'></div>
                <div className='icon2'><Link to="/stud/profile" ></Link></div>
            </div>
            </div>
            <div className='left-side-nav'>
                <button className='nav-tabs'><Link to="/stud" className='linksinWhite'>Home</Link></button>
                <button className='nav-tabs'><Link to="/stud/jobs" className='linksinWhite'>Jobs</Link></button>
            <button className='nav-tabs'><Link to="/stud/events" className='linksinWhite'>Career Fairs</Link></button>
            </div>
            <div >
            Hello!
            </div> 
        </>
    );
  };
  
  export default Student_Employer_list;