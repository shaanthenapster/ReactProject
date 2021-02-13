import './App.css';
import React , { Component } from 'react';
import RawLand from './RawLand/RawLand';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>This is my 1st component implementation.</h1>
        <p> When you implement someting , you need to code it properly.</p>
        <RawLand name = "Dhaulas" location = "Dehradun"/>
        <RawLand name = "Phulwari" location = "Patna"/>
        <RawLand name = "Ghaziabad" location = "NCR"/>
        <RawLand name = "Ghitorni" location = "UttarPradesh"/>
      </div>
    );

    // return React.createElement('div' , {className: 'App'} , 
    // React.createElement('h1' ,null, 'Hi i\'m from the react create element'));
  }
}

export default App;
