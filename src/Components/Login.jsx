import React from 'react';
import { Link } from "react-router-dom";
import './Login.css'

const Login = () => {
    return (
        <>
        <div className='sideNav'>
            <h2 className='heading'>Career Connect</h2>
            <div className='description'>
            <h3 class='subhead'>Get the job done...</h3>
            <div className='head'>Students</div>
            <div className='tail'>Launch the next step in your career.</div>
            <div className='head'>Employers</div>
            <div className='tail'>Hire the next generation of talent.</div>
            <div className='head'>Admin</div>
            <div className='tail'>Bring the best jobs to your students.</div>
            </div>
        </div>
        <div className='details'>
        <h1 className='details-heading'>Sign in</h1>
        <form>
        <table align="center">
            <tbody >
            <tr><td width="80%" align="left"><label htmlFor="username">Username</label></td>
                        </tr>
                        <tr><td align="left"><input type="text" id="username" name="username" /></td>
                        </tr>
                        <tr><td align="left"><label htmlFor="password">Password</label></td>
                        </tr>
                        <tr><td align="left"><input type="text" id="password" name="password"/></td>
                        </tr>
                        <tr className='buttons'>
            <br></br>
            <input type="submit" value="Login" />
            </tr><tr >
            <Link to="/signup" className="detailsLink">New User? SignUp</Link>
            </tr>
            </tbody>
        </table>
        </form>
        </div>
        </>
    );
  };
  
  export default Login;

  