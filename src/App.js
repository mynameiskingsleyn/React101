import React from 'react';
import logo from './logo.svg';
import './App.css';
import Myfunction from './Components/FirstComponents/FirstComponent';
import One from  './Components/One/OneComponent';
import Details from './data/Details';
import FirstPractice from './Components/Practice/PropPractice';
import FirstClass from "./Components/Classes/FirstClassComponent";
import {Link} from 'react-router-dom';
// 1. Expressions in jsx
const element = 'hello my friend';
// 2. Specifying attributes with jsx
//const jsxAttributes = <img src={logo} width="25%" height="25%" className="App-logo" alt="logo" />;
// 3. Objects
//const person = {Name:'Jacob',Age:"28", Address:"5540 whos street"}

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  //   return (
  //       <div className="App">
  //           // <One p={person} j={jsxAttributes} e={element} />
  //       </div>
  //
  //   )
    //console.log(Details);
    const PersonData = Details.map(item=> <FirstPractice PersonProp={item} />)
    // return (
    //     <div className="App">
    //         {PersonData}
    //     </div>
    // );
    // return (
    //     <div>
    //         <FirstClass />
    //     </div>
    // )
    return (
        <div>
            <h1> Home </h1>
            <h2> <Link to ="/contact">Go to Contact </Link> </h2>
            <h2> <Link to ="/users"> Go to Users </Link> </h2>
        </div>
    )
}

export default App;
