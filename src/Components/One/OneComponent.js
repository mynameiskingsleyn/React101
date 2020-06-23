import React from 'react';
import Myfunction from "../FirstComponents/FirstComponent";

function One(props){
    var person = props.p;
    var element = props.e;
    var reImage = props.j
    return (
        <div className="">
            <h1> starter yall </h1>
            <p>{element}</p>
                {reImage}
            <div>
            <h3> {person.Name} </h3> is a user and he is {person.Age} years old
            </div>
        <Myfunction name='coding component' Date="2020" />
        </div>

    )
}

export default One