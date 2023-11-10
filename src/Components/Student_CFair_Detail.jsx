import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import CardEmployer from './CardEmployer.jsx';
import './Student_CFair_Detail.css'

const Student_CFair_Details = () =>  {
    const lists = [
        {
          fairId:1,
          fairName: 'Career Expo 2023',
          date: '23 Jan, 2023', time: '3:00pm - 5:00pm',
          venue: '55 Park Place, Second Floor, Ballroom, Downtown Atlanta',
          description: 'Exclusive access to a diverse range of employers from various industries, offering a multitude of career opportunities.'
        },
    ];

    const employers = [
        {
          name: 'Google',
          jobType: 'Full Time',
          position: 'Software Engineer',
          location: 'Mountain View, CA',
          qualification: 'Bachelor\'s degree in Computer Science, programming experience in Java or Python',
        },
        {
          name: 'Microsoft',
          jobType: 'Internship',
          position: 'Data Analyst Intern',
          location: 'Redmond, WA',
          qualification: 'Pursuing a degree in Statistics, Analytics, or related field',
        },
        {
          name: 'Amazon',
          jobType: 'Part Time',
          position: 'Customer Service Representative',
          location: 'Remote',
          qualification: 'High school diploma, strong communication skills',
        },
        {
          name: 'Facebook',
          jobType: 'Full Time',
          position: 'Product Manager',
          location: 'Menlo Park, CA',
          qualification: 'MBA or equivalent experience, product management experience',
        },
        {
          name: 'Tesla',
          jobType: 'Internship',
          position: 'Hardware Engineering Intern',
          location: 'Palo Alto, CA',
          qualification: 'Pursuing a degree in Electrical Engineering or related field',
        },
        {
          name: 'IBM',
          jobType: 'Full Time',
          position: 'Data Scientist',
          location: 'Armonk, NY',
          qualification: 'Master\'s or Ph.D. in Data Science, Statistics, or related field',
        },
      ];

      
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
            {lists && lists.length > 0 && (
  <table>
    <tbody>
      {lists.map((list) => (  
        <div key={list.id} className="detailView">
        <tr >
          <td width="50%" ><div className='FairName'>{list.fairName}</div></td>
        </tr>
        <tr >
          <td ><div className='FairDate'>{list.date}{", " }{list.time}</div></td>
        </tr>
		  <tr>
			<td ><div className='FairVenue'>{list.venue}</div></td>
		  </tr>
          <tr>
			<td ><div className='FairDesc'>{list.description}</div></td>
		  </tr>
        </div>
      ))}
    </tbody>
  </table>
)}
  {
                employers && employers.length > 0 ?
                employers.map((emp,index) => 
                <CardEmployer emp_Name={emp.name} j_type={emp.jobType} pos={emp.position} loc={emp.location} qualify={emp.qualification}/>
                ) : <h2>{'No Upcoming Events 😞'}</h2>
            }
     </>  
        );
};

export default Student_CFair_Details;