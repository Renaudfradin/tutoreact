import React from "react";
import './composentClasse.css'

class Test2 extends React.Component {
  //contructeur de class
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  //creation de timerId , lifecycle
  componentDidMount(){
    this.timerID = setInterval(
      ()=>this.tick(),
      1000
    );
  }
  // detruit timerId , lifecycle
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  //method
  tick(){
    this.setState({
      date: new Date()
    })
  }
  //render du mount
  render(){
    const date = this.state.date.toLocaleTimeString();
    return(
      <div className="heure">
        <h1>tst classe</h1>
        <p>il est {date}</p>
      </div>
    )
  }
}

export default Test2;