import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './Heading'
import Para from './component/Para'
import List from './component/DeatilsList'


ReactDOM.render(
    <>
        <Heading />
        <Para />
        <List />
        <h1>Here is something for you</h1>
    </> , 
  document.getElementById('root')
);