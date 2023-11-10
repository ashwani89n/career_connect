import React from 'react';
import './Student_Profile.css'
import './Login.css'
import './Header.css'
import Card from './Card';
import { Link } from "react-router-dom";



const Student_CFair = () => {
    const lists = [
        {
          fairId:1,
          fairName: 'Career Expo 2023',
          date: '23 Jan, 2023', time: '3:00pm - 5:00pm',
          venue: '55 Park Place, Second Floor, Ballroom, Downtown Atlanta',
          description: 'Exclusive access to a diverse range of employers from various industries, offering a multitude of career opportunities.'
        },
        {
            fairId:2,
            fairName: 'Job Jamboree: Your Path to Success',
            date: '25 Jan, 2023', time: '12:00pm - 5:00pm',
            venue: 'Student Center East, Ballroom, Ground Floor, Downtown Atlanta',
            description: 'A vibrant and energetic atmosphere where attendees can celebrate their journey to success and discover new paths for career advancement.'
        },
        {
            fairId:3,
            fairName: 'Future Pathways Fair',
            date: '28 Jan, 2023', time: '1:00pm - 4:00pm',
            venue: '25 Park Place, Second Floor, Downtown Atlanta',
            description: 'Exclusive access to a diverse range of employers from various industries, offering a multitude of career opportunities.'
        },
        {
            fairId:4,
            fairName: 'JobQuest: Explore Your Opportunities',
            date: '02 Feb, 2023', time: '1:00pm - 4:00pm',
            venue: 'Student Center East, Ballroom, Ground Floor, Downtown Atlanta',
            description: 'Embark on a quest to explore a wide array of job opportunities and connect with companies actively seeking top talent.'
        },
        {
            fairId:5,
            fairName: 'Industry Insights Fair',
            date: '28 Feb, 2023',time: '3:00pm - 5:00pm',
            venue: '25 Park Place, Second Floor, Downtown Atlanta',
            description: ' Gain valuable insights into various industries, understand market trends, and explore how your skills align with the demands of different sectors'
        },
        {
            fairId:6,
        fairName: 'Global Careers Forum',
        date: '31 March, 2023',time: '12:00pm - 5:00pm',
        venue: '55 Park Place, Second Floor, Ballroom, Downtown Atlanta',
        description: 'Connect with international employers, learn about global career opportunities, and broaden your horizons in this diverse and inclusive forum.'
        },
      ];

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
                {/*<button className='nav-tabs'><Link to="/stud/jobs" className='linksinWhite'>Jobs</Link></button>*/}
                <button className='nav-tabs'><Link to="/stud/events" className='linksinWhite'>Career Fairs</Link></button>
            </div>
            <div >
            {
                lists && lists.length > 0 ?
                lists.map((list,index) => 
                <Card  id={list.fairId} fair_Name={list.fairName} date={list.date} time={list.time} venue={list.venue} desc={list.description}/>
                ) : <h2>{'No Upcoming Events 😞'}</h2>
            }
            </div> 
        </>
    );
  };
  
  export default Student_CFair;