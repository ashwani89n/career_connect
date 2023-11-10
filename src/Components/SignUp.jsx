import React, { useState } from 'react';
import './SignUp.css';
import './Login.css';
import { Link } from "react-router-dom";

const SignUp = () => {

    const [userType, setUserType] = useState('');
    const [additionalFields, setAdditionalFields] = useState([]);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confpassword: '',
        email: '',
    });
    const [additionalFormData, setAdditionalFormData] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleUserTypeChange = (e) => {
        const selectedUserType = e.target.value;
        setUserType(selectedUserType);

        if (selectedUserType === 'Student') {
            setAdditionalFields([
                'Panther ID',
                'First Name',
                'Last Name',
                'Degree',
                'Major',
                'Graduation Year'
            ]);
        } else if (selectedUserType === 'Employer') {
            setAdditionalFields([
                'Company Name',
                'Industry',
                'Contact Person Name'
            ]);
        } else {
            // Clear additional fields for Admin
            setAdditionalFields([]);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleAdditionalChange = (e) => {
        const { name, value } = e.target;
        setAdditionalFormData({
            ...additionalFormData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confpassword) {
            setErrorMessage('Password and Confirm Password do not match');
        } else if (Object.values(formData).some((value) => value.trim() === '')) {
            setErrorMessage('All fields are mandatory');
        } else if (
            additionalFields.some((field) => !additionalFormData[field] || additionalFormData[field] === '')
        ) {
            setErrorMessage('All additional fields are mandatory');
        } else {
            setErrorMessage('');
            const queryParams = {
                username: formData.username,
                password: formData.password,
                confpassword: formData.confpassword,
                email: formData.email,
                role: userType,
                ...additionalFormData,
            };
    
            const queryString = Object.keys(queryParams)
                .map((key) => `${key}=${queryParams[key]}`)
                .join('&');
            
            window.location.href = `/submitForm?${queryString}`;
        }
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className='signup-container'>
        <div className='ribbon'>
        Career Connect
        </div>
        <div className='sidePic'> 
        <h4 className='details-heading2'>"Be part of Career Connect's thriving network, the ultimate destination for students, early career professionals, and those making career transitions in their quest for jobs and internships. Attract and engage with exceptional students as a recruiter."</h4>
        </div>
        <div className='signup-desc'>
        <h2 className='details-heading1'>Sign Up for Career Connect Today!</h2>
                <table align="center" className='table-cont'>
                    <tbody>
                        
                        <tr><td width="80%" align="left"><label htmlFor="username">Username</label></td>
                </tr>
                <tr><td align="left"><input type="text" id="username" name="username" onChange={handleChange} value={formData.username}/></td>
                </tr>
                <tr><td align="left"><label htmlFor="password">Password</label></td>
                </tr>
                <tr><td align="left"><input type="text" id="password" name="password" onChange={handleChange} value={formData.password}/></td>
                </tr>
                <tr><td align="left"><label htmlFor="confpassword">Confirm Password</label></td>
                </tr>
                <tr><td align="left"><input type="text" id="confpassword" name="confpassword" onChange={handleChange} value={formData.confpassword}/></td>
                </tr>
                <tr><td width="80%" align="left"><label htmlFor="email">Email</label></td>
                </tr>
                <tr><td align="left"><input type="text" id="email" name="email" onChange={handleChange} value={formData.email}/></td>
                </tr>
                <tr>
                            <td align="left">
                            <label htmlFor="role">User Type</label>
                            </td>
                            </tr><tr>
                            <td align="left">
                            <select id="role" name="role"  onChange={handleUserTypeChange}>
                                <option value="">Select</option>
                                <option value="Student">Student</option>
                                <option value="Employer">Employer</option>
                                <option value="Admin">Admin</option>
                            </select>
                            </td>
                        </tr>
                        <tr><td><div className='error-msg'>{errorMessage}</div></td></tr>
                        <tr className='buttons'><td>
                        <input type="submit" value="Submit" /></td>
                        </tr>
                        <tr >
                        <td><Link to="/login"  className="detailsLink">Wish to Login?</Link></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='additional-fields'>
            <table align="left">
            <tbody>
                {additionalFields.map((field, index) => (
                    <div key={index}>
                    <tr>
                        <td width="80%" align="left">
                            <label htmlFor={field}>{field}</label>
                        </td>
                    </tr>
                    <tr >
                        <td>
                        {field === 'Degree' ? (
                                                <select
                                                    name={field}
                                                    onChange={handleAdditionalChange}
                                                    value={additionalFormData[field] || ''}
                                                >
                                                    <option value="">Select Degree</option>
                                                    <option value="Bachelor's">Bachelor's</option>
                                                    <option value="Master's">Master's</option>
                                                    <option value="PhD">PhD</option>
                                                </select>
                                            ) : field === 'Graduation Year' ? (
                                                <select
                                                    name={field}
                                                    onChange={handleAdditionalChange}
                                                    value={additionalFormData[field] || ''}
                                                >
                                                    <option value="">Select</option>
                                                    {Array.from({ length: 8 }, (v, i) => i + 2023).map((year) => (
                                                        <option key={year} value={year}>
                                                            {year}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <input
                                                    type="text"
                                                    id={field}
                                                    name={field}
                                                    onChange={handleAdditionalChange}
                                                    value={additionalFormData[field] || ''}
                                                />
                                            )}</td>
                                         </tr>
                                    </div>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignUp;