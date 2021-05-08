import React from 'react'

const rawLand = (props) => {
      return <h4> The {props.name} , is located at {props.location} ,
      with an area of {Math.floor(Math.random() * 5678)} square ft.</h4>
}


export default rawLand;