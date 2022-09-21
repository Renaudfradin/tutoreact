import React from "react";
import './testcomposent.css'

function Test(props){
  const users = "hello";
  const date = new Date().toLocaleTimeString();

  return (
    <div className="backTest">
      <h1>testttstsstts{users}</h1>
      <p>{date}</p>
      <p>{props.name}</p>
      <p>{props.username}</p>
    </div>
  )
}
export default Test