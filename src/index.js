import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import our component
import Users from './Components/Practice/users';
import Contact from './Components/Practice/contact';
import NotFound from './Components/NotFound';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <React.StrictMode>
    <Router>
        <ul>
            <l1><Link to="/">Home</Link></l1>
            <l1> <Link to="/users"> Users </Link></l1>
            <l1><Link to="/contact"> Contacts </Link></l1>
        </ul>
        <div>
            <switch>
                <Route exact path="/" component ={App} />
                <Route path="/users" component ={Users} />
                <Route path="/contact" component ={Contact} />
                <Route path="/404" component={NotFound} />
                <Redirect to ="/404" />

            </switch>
        </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
