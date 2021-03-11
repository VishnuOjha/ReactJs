import React from 'react';


function sum(a,b) {
    let c = a+b;
    return c;
}

function sub(a,b){
    return (a-b);
}

function mul(a,b){
    return(a*b);
}

function div(a,b){
    let c = a/b;
    c.toFixed(2);
    return c;
}




export  {sum , sub , mul , div };