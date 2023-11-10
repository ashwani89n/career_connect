import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';
import Student_Welcome from './Components/Student_Welcome.jsx';
import Student_Profile from './Components/Student_Profile.jsx';
import Student_CFair from './Components/Student_CFair.jsx';
import Student_Employer_list from './Components/Student_Employer_list.jsx';
import Student_CFair_Detail from './Components/Student_CFair_Detail.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route path="/login" element={ <Login /> }/>
        <Route path="/signup" element={ <SignUp /> }/>
        <Route path="/stud/" element={ <Student_Welcome /> }/>
        <Route path="/stud/profile" element={ <Student_Profile /> }/>
        <Route path="/stud/events" element={ <Student_CFair/> }/>
        <Route path="/stud/employers" element={ <Student_Employer_list/> }/>
        <Route path="/events/desc1" element={ <Student_CFair_Detail/> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
