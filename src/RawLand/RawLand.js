import React from 'react'

const rawLand = (props) => {
     return <h3 onClick={props.click}> The {props.name} , is located at {props.location} ,
      with an area of {Math.floor(Math.random() * 5678 )} square ft.</h3>
}


export default rawLand;
