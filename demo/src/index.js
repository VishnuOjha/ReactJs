import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const name='Vishnu';
let sname = 'Ojha';

ReactDOM.render(
  // <React.Fragment>
  //   <div>
  //     <h1>
  //       Best Netflix Series of 2020
  //     </h1>
  //     <p>Here are the 5 best series of Netflix</p>
  //     <ol>
  //       <li>Dark</li>
  //       <li>Stranger Things</li>
  //       <li>Friends</li>
  //       <li>Money Hiest</li>
  //       <li>Sherlock Holmes</li>
  //     </ol>
  //   </div>
  //  </React.Fragment>
  
  // We have donw this using jsx expression 
  <>
    <h1>my name is {name}</h1>
    <h2>my surname is {sname}</h2>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
