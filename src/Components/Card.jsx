import React from 'react'
import './Card.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


const Card = (props) =>  {
  let params = useParams();
  return (
    <>
      <Link to="/events/desc1">
        <div className="Card" >
          <div className="fistLine" ><div className='inlineTextLbl'>{props.fair_Name}</div></div>     
          <div className='inlineTextTxt1'>{props.date} {', '} {props.time}</div>
          <div className='inlineTextTxt2'>{props.venue}</div>
          <div className='inlineTextTxt2'></div>
          <div className='inlineTextTxt2'>{props.desc}</div>
          <div ><button className='buttonClass'>Register</button></div>
      </div>
      </Link>
      </>  );
};

export default Card;