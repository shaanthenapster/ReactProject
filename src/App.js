import './App.css';
import React , { Component } from 'react';
import RawLand from './RawLand/RawLand';
import rawLand from './RawLand/RawLand';

class App extends Component{

  state = {
    rawLand: [
      {name : 'Frankford' , location : 'New York'},
      {name : 'Berlin' , location : 'Switzerland'},
      {name : 'Brazil' , location : 'North America'},
      {name : 'Los Angeles' , location : 'U.S.A'},
    ],
    plottingLand : 'A different Section of Land Auction'
  };

  switchNameHandler = () => {
    console.log(rawLand); 
    this.setState({
      rawLand: [
        {name : 'Bermingham' , location : 'New York'},
        {name : 'Zurich' , location : 'Switzerland'},
        {name : 'Brazil' , location : 'North America'},
        {name : 'Los Angeles' , location : 'South America'},
      ]
    });
  };



  render(){
    return(
      <div className="App">
        <h1>This is my 1st component implementation.</h1>
        <p> When you implement someting , you need to code it properly.</p>
        <button onClick={this.switchNameHandler}> Click Me </button>
        <RawLand name ={this.state.rawLand[0].name} location = {this.state.rawLand[0].location}/>
        <RawLand name = {this.state.rawLand[1].name} location = {this.state.rawLand[0].location}/>
        <RawLand name = {this.state.rawLand[2].name} location = {this.state.rawLand[0].location}/>
        <RawLand name = {this.state.rawLand[3].name} location = {this.state.rawLand[0].location}/>
      </div>
    );
  }
}


export default App;
