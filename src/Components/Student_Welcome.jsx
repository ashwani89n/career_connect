import React from 'react';
import { Link } from "react-router-dom";
import './Student_Welcome.css'
import './Header.css'

const Student_Welcome = () => {
    return (
        <>
        <div className='header-container'> 
            <h1 className="logo">Career Connect</h1>
            <div className="auth-options">
                <div className='icon1'></div>
                <Link to="/stud/profile" className='linksinWhite'><div className='icon2'></div></Link>
            </div>
        </div>
        <div className='left-side-nav'>
            <button className='nav-tabs'><Link to="/stud" className='linksinWhite'>Home</Link></button>
            {/*<button className='nav-tabs'><Link to="/stud/jobs" className='linksinWhite'>Jobs</Link></button>*/}
            <button className='nav-tabs'><Link to="/stud/events" className='linksinWhite'>Career Fairs</Link></button>
        </div>
        <div className='main-content'>
            <div className='column cont1'>
            <h1>Stand out to employers by proactively reaching out.</h1>
            </div>
            <div className='column cont2'>
                <div className='column out-cont1'>
                    <div className='out-cont2'><Link to="/stud/events" className='linksinWhite'>
                    <div className='out-cont2-head'>Attend Career Fairs:</div>
                    <div className='out-cont2-tail'>Gain insights into the employers or positions that pique your interest, directly from the primary source.</div></Link>
                    </div>
                </div>
                <div className='column out-cont1'>
                    <div className='out-cont2'><Link to="/stud/profile" className='linksinWhite'>
                    <div className='out-cont2-head'>Enhance your profile's visibility:</div>
                    <div className='out-cont2-tail'>Include essential details to align with the most pertinent job openings and opportunities.</div></Link>
                </div>
                </div>
            </div>
        </div>
        </>
    );
  };
  
  export default Student_Welcome;
  