import React from 'react';
import './FirstComponent.css';



function Myfunction(props){

    return(
      <div className="first">

        <h1> welcome to '{props.name}' on {props.Date}</h1>
      </div>
    )
}

export default Myfunction;