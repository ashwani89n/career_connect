import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header-container">
        <h1 className="logo">Career Connect</h1>
        <div className="auth-options">
        <Link to="/login"><button className="login-button">Login</button></Link>
        <Link to="/signup"><button className="signup-button">Sign Up</button></Link>
        </div>
      </div>
    );
  };
  
  export default Header;
  