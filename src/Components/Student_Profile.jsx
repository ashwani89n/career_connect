import { React, useState } from 'react';
import './Header.css'
import { Link } from "react-router-dom";
import './Student_Profile.css'
import './Login.css'

const Student_Profile = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [skills, setSkills] = useState([]);
    const [newSkill, setNewSkill] = useState('');
    const [cities, setCities] = useState([]);
    const [newCity, setNewCity] = useState('');

    const [roles, setRoles] = useState([]);
    const [newRole, setNewRole] = useState('');
    const [industries, setIndustries] = useState([]);
    const [newIndustry, setNewIndustry] = useState('');


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const handleSkillChange = (e) => {
        setNewSkill(e.target.value);
    };

    const addSkill = () => {
        if (newSkill.trim() !== '' && !skills.includes(newSkill)) {
        setSkills([...skills, newSkill]);
        setNewSkill('');
        }
    };

  const removeSkill = (skill) => {
    const updatedSkills = skills.filter((s) => s !== skill);
    setSkills(updatedSkills);
  };


    const handleCityChange = (e) => {
        setNewCity(e.target.value);
    };

    const addCity = () => {
        if (newCity.trim() !== '' && !cities.includes(newCity)) {
        setCities([...cities, newCity]);
        setNewCity('');
        }
    };

    const removeCity = (city) => {
    const updatedCities = cities.filter((s) => s !== city);
    setSkills(updatedCities);
    };
  

    const handleRoleChange = (e) => {
        setNewRole(e.target.value);
    };

    const addRole = () => {
        if (newRole.trim() !== '' && !roles.includes(newRole)) {
        setRoles([...roles, newRole]);
        setNewRole('');
        }
    };

  const removeRole = (role) => {
    const updatedRoles = roles.filter((s) => s !== role);
    setRoles(updatedRoles);
  };


    const handleIndustryChange = (e) => {
        setNewIndustry(e.target.value);
    };

    const addIndustry = () => {
        if (newIndustry.trim() !== '' && !industries.includes(newIndustry)) {
        setIndustries([...industries, newIndustry]);
        setNewIndustry('');
        }
    };

    const removeIndustry = (Industry) => {
    const updatedindustries = industries.filter((s) => s !== Industry);
    setRoles(updatedindustries);
    };
  

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
        <div className='profile-cont'>
            <h2 className='details-heading3'>Build your Profile Faster</h2>
            <div className='frame'>
            <div className='add-photo-out'>
                <div className='add-photo'></div>
                <div className='add-photo-txt'>Add Photo</div>
            </div>
            <div className='name'>Ashwani Balakrishnan Neminimadathil</div>
            <div className='degree'>Master's, Computer Science</div>
            <div className='gradDate'>Graduation: Dec, 2024</div>
            <div className='build-resume'>
                <div className='attributes'>Upload Resume</div>
                <input
                    type="file"
                    accept=".pdf, .doc, .docx"
                    onChange={handleFileChange}
                />
                </div>
            <div className="skills">
            <div className='attributes'>Add Skills</div>
            <div className="add-skill">
                <input
                type="text"
                placeholder="Enter your skills"
                value={newSkill}
                onChange={handleSkillChange}
                />
                <button onClick={addSkill}>Add Skill</button>
            </div>
            <div className="skills-list">
                {skills.map((skill, index) => (
                <div key={index} className="skill">
                    <span >{skill}</span>
                    <button onClick={() => removeSkill(skill)}></button>
                </div>
                ))}
            </div>
            </div>
            <div className="skills">
            <br></br>
            <div className='attributes'>Job Interests</div>
            <table>
                <tbody>
                    <tr>
                        <td align="left">
                        <select id="jobType" name="jobType" >
                        <option value="">Select</option>
                        <option value="OnCampusJob">On-Campus Job</option>
                        <option value="Internship">Internship</option>
                        <option value="PartTime">Part-Time</option>
                        <option value="PartTime">Full-Time</option>
                        </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <div className='attributes'>Preffered Cities</div>
            <div className="add-skill">
                <input
                type="text"
                placeholder="Enter preferred cities"
                value={newCity}
                onChange={handleCityChange}
                />
                <button onClick={addCity}>Add City</button>
            </div>
            <div className="skills-list">
                {cities.map((city, index) => (
                <div key={index} className="skill">
                    <span >{city}</span>
                    <button onClick={() => removeCity(city)}></button>
                </div>
                ))}
            </div>
            <br></br>
            <div className='attributes'>Interested Roles</div>
            <div className="add-skill">
                <input
                type="text"
                placeholder="Enter interested roles"
                value={newRole}
                onChange={handleRoleChange}
                />
                <button onClick={addRole}>Add Role</button>
            </div>
            <div className="skills-list">
                {roles.map((role, index) => (
                <div key={index} className="skill">
                    <span >{role}</span>
                    <button onClick={() => removeRole(role)}></button>
                </div>
                ))}
            </div>
			<br></br>
            <div className='attributes'>Preffered Industries</div>
            <div className="add-skill">
                <input
                type="text"
                placeholder="Enter preferred industriesx"
                value={newIndustry}
                onChange={handleIndustryChange}
                />
                <button onClick={addIndustry}>Add Industry</button>
            </div>
            <div className="skills-list">
                {industries.map((industry, index) => (
                <div key={index} className="skill">
                    <span >{industry}</span>
                    <button onClick={() => removeIndustry(industry)}></button>
                </div>
                ))}
            </div>
            </div>
            </div>
            </div>
    </>
  );
};

export default Student_Profile;
