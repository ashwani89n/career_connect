import React from 'react'
import './CardEmployer.css'

const CardEmployer = (props) =>  {
  return (
    <>
        <div className="CardEmployer" >
          <div className="fistLine" ><div className='inlineTextLbl'>{props.emp_Name}</div></div>     
          <div className='inlineTextTxt1'>{props.pos} {", "} {props.j_type}</div>
          <div className='inlineTextTxt2'></div>
          <div className='inlineTextTxt2'>{props.loc}</div>
          <div className='inlineTextTxt2'>{props.qualify}</div>
         </div>
      </>  );
};

export default CardEmployer;