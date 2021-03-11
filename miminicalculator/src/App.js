import React from'react';
import {sum,sub,mul,div} from './Calc';


function App(){
    return(
      <>
      <ul>
    <li>Addition  = {sum(10,2)}</li>
    <li>Subtraction = {sub(10,2)}</li>
    <li>Multiplication = {mul(10,2)}</li>
    <li>Divison = {div(10,2)}</li>
  </ul>
      </>
    );
}


export default App;