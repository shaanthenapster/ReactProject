import './App.css';
import React ,  { useState } from 'react';
import RawLand from './RawLand/RawLand';

  // In this piece of code we have implemented functional based component , in place of class based component.
  // We are using ES6 arrow functions  

  const App = props => {

  const [rawLandState , setRawLandState] = useState({
  rawLand: [
    {name : 'Frankford' , location : 'New York'},
    {name : 'Berlin' , location : 'Switzerland'},
    {name : 'Brazil' , location : 'North America'},
    {name : 'Los Angeles' , location : 'U.S.A'},
      ],
     plottingLand : 'A different Section of Land Auction'
   });

  console.log(rawLandState)
   
   const switchNameHandler = () => {
    setRawLandState({
      rawLand: [
        {name : 'Bermingham' , location : 'New York'},
        {name : 'Zurich' , location : 'Switzerland'},
        {name : 'Brazil' , location : 'North America'},
        {name : 'Los Angeles' , location : 'South America'},
      ]
    });
  };

    // useState returns an array with exactly 2 elements i.e:
    // 1. it will be the current state 
    //2 . a function that will allow us to update the state.
   
    return(
      <div className="App">
        <h1>This is my 1st component implementation.</h1>
        <p> When you implement someting , you need to code it properly.</p>
        <button onClick={switchNameHandler}> Click Me </button>
        <RawLand name ={rawLandState.rawLand[0].name} location = {rawLandState.rawLand[0].location}/>
        <RawLand name = {rawLandState.rawLand[1].name} location = {rawLandState.rawLand[0].location}/>
        <RawLand name = {rawLandState.rawLand[2].name} location = {rawLandState.rawLand[0].location}/>
        <RawLand name = {rawLandState.rawLand[3].name} location = {rawLandState.rawLand[0].location}/>
      </div>
    );
  }

export default App;
