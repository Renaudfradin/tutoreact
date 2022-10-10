import React, { useEffect } from "react";
import Test from '../components/test/test.jsx'
import Test2 from '../components/composentClasse/composentClasse'

const Home = (props) => {
  
  useEffect(() =>{
    document.title= "Home"
  })

  return (
    <div>
      <h1>Home page</h1>
      <p>tuto react</p>
      <Test name="tesssssst"></Test>
      <Test2></Test2>
    </div>
  )
}

export default Home;