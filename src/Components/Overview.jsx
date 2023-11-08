import React from 'react';
import careerConnectImage from './images/career_connect_bg.jpg'
import './Overview.css';

const Overview = () => {
    return (
        <>
        <div className='overview-container'>
            <div className='desc-container'>
                <h2>Discover Your Path to Success with Career Connect</h2>
                <h4>At Career Connect, We bring millions of Students and Employers together to achieve Greatness.<br></br> Your complete solution for immediate access to thriving job Opportunities and tailored connections between exceptional Students and Visionary Employers - Where Success and Growth Await!</h4>
                <br></br>
                <br></br>
            </div>
            <div className='desc-button'>
                <button className="sign-button">Seize the opportunity. Enroll now!</button>
            </div>
        </div>
        <br></br>
        <div className='container'>
            <div className='desc-container1'>
                <h3>Discover Your Path to Success with Career Connect</h3> 
            </div> 
            <div className='how-it-works-container'>
            <div className="highlight-points">
                <h4>Real-time Job Opportunities</h4>
                <h4>Precise Matchmaking</h4>
                <h4>Effortless Registration</h4>
            </div>
            </div>
        </div>
        <br></br>
        <div className="container2">
            <h3>Hear from Career Connect Users:</h3>
            <div className="student-container">
                <div className="outer-rectangle">
                    <div className="inner-rectangle">
                        <div className='textContain'>
                        <h4>"Career Connect has been a game-changer for me in my job search. The real-time job opportunities and the precision with which it matched me to the right employers were astounding. I found my dream job within weeks, and I couldn't be happier with the platform's efficiency."</h4>
                        </div>
                        <div className='bywhomcontain'>
                        <h4> - Amisha, UC Berkeley</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
  };
  
  export default Overview;
  