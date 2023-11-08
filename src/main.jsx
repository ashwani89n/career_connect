import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login.jsx';
import SignUp from './Components/SignUp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route path="/login" element={ <Login /> }/>
        <Route path="/signup" element={ <SignUp /> }/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
