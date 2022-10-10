import React, { useEffect, useState } from "react";

const Count = () => {

  // hook d'état useState
  const [count, setCount] = useState(0);
  // const [date, setDate] = useState(new Date());

  // hook d'éffet
  useEffect(() =>{
    document.title = "Conteur"
  })


  return(
    <div>
      <p>vous aver cliqué {count}</p>
      <button onClick={() => setCount(count + 1)}>iciii</button>
      {/* <p>date {date}</p> */}
    </div>
  )
}

export default Count;