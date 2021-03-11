import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootelement = document.getElementById('root');
let greetings="";
let currTime = new Date(2020,5,5,5);
let curHours = currTime.getHours();
const style={};

if(curHours>1 && curHours <12){
    greetings="Good Morning";
    style.color="Red";
}else if(curHours>=12 && curHours <17){
  greetings="Good AfterNoon";
  style.color="yellow";
}
else if(curHours>=17 && curHours <24){
  greetings="Good Night";
  style.color="orange";
}

ReactDOM.render(
  <>
    <div>
      <h1>Hello,<span style={style}>{greetings}</span></h1>
    </div>
  </>
 ,
  rootelement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
