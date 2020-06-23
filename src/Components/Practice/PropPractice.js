import React from 'react'
import '../../css/main.css';

function FirstPractice(props){
    var obj = props.PersonProp;
    const imageStyle = {
        height:"150pt",
        width:"150pt",
        borderRadius:"20px"
    }
    return (
      <div>
        <div className="details">
            <img src={obj.imgUrl} style={imageStyle}></img>
            <h3>name: {obj.name} </h3>
            <p> phone: {obj.phone}</p>
            <p> email: {obj.email} </p>
        </div>
      </div>
    );
}

export default FirstPractice