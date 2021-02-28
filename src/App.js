import React from 'react';

function Food({fav}) {
  return <h1>I love {fav}</h1>
}

function App() {
  return ( 
  <div>
    <h1>http://192.168.35.96:3000</h1>
    <Food fav="a"/>
    <Food fav="b"/>
    <Food fav="c"/>
    <Food fav="d"/>
    <Food fav="e"/>
    <Food fav="f"/>
    <Food fav="g"/>
    </div>
  ); 
}

export default App;
