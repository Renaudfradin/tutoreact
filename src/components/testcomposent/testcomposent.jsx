import React from "react";
import CheckUserIs from "../checkUserIs/checkUserIs";
import Post from "../Post/Post";
import './testcomposent.css'


function Test(props){
  const users = "hello";
  const date = new Date().toLocaleTimeString();
  const numbers = [1,2,3,4,5,6,7,8,9,10,11];
  const postsTest = [{id:1, name:"test1"},{id:2, name:"test2"},{id:3, name:"test3"},{id:4, name:"test4"},{id:5, name:"test5"}];

  const listNumbers = numbers.map((number) => <p key={number.id}>{number}</p>);
  //map on postsTest and post conponents in const
  const contentPost = postsTest.map((post)=> 
    <Post 
      key={post.id} 
      name={post.name}
      id={post.id}>
    </Post>
  )

  function clickLink(e){
    e.preventDefault()
    console.log("click link")
  }

  return (
    <div>
      <div className="backTest">   
        <h1>testttstsstts{users}</h1>
        <p>{date}</p>
        <p>{props.name}</p>
        <p>{props.username}</p>
        <a href="" onClick={clickLink}>click event</a>
        <CheckUserIs username="BG2"></CheckUserIs>
        <div>{listNumbers}</div>
        {contentPost}
      </div>

      {/* map on postsTest and post conponents in return */}
      <div>
        {postsTest.map((post)=> 
          <Post
            key={post.id} 
            name={post.name}
            id={post.id}>
          </Post>
        )}
      </div>
    </div>
    
  );
}
export default Test