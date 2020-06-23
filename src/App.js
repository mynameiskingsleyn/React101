import React from 'react';
import logo from './logo.svg';
import './App.css';
// 1. Expressions in jsx
const element = 'hello my friend';
// 2. Specifying attributes with jsx
const jsxAttributes = <img src={logo} width="25%" height="25%" className="App-logo" alt="logo" />;
// 3. Objects
const person = {Name:'Jacob',Age:"28", Address:"5540 whos street"}
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
    return (
        <div className="App">
            <h1> this is where we start </h1>
            <p>{element}</p>
    {jsxAttributes}
            <div>
                <h3> {person.Name} </h3> is a user and he is {person.Age} years old
            </div>
        </div>

    )
}

export default App;
