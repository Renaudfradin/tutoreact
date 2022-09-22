import React from "react";
import CheckUserIs from "../checkUserIs/checkUserIs";
import './testcomposent.css'


function Test(props){
  const users = "hello";
  const date = new Date().toLocaleTimeString();

  function clickLink(e){
    e.preventDefault()
    console.log("click link")
  }
  return (
    
    <div className="backTest">   
      <h1>testttstsstts{users}</h1>
      <p>{date}</p>
      <p>{props.name}</p>
      <p>{props.username}</p>
      <a href="" onClick={clickLink}>click event</a>
      <CheckUserIs username="BG2"></CheckUserIs>
    </div>
  );
}
export default Test