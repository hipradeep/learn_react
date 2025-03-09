import React, { Component } from 'react'

export default class ChangeState extends Component {

  constructor(props){

    super(props);

    this.state={
      name: "Pradeep",
      age: 25
    }
  }
  handleClick =() =>{     
    console.log('Button Clicked', this.state.name);
   // this.state.name="prdp"; only change state variable not state

    this.setState({name: "prdp",roll:254})
}



  render() {
    return (
      <>
      <div>Pradeep Maurya</div>
      <div>{this.state.name}</div>
      <div><button onClick={this.handleClick}> Hit me </button></div>
      </>
      
    )
    
  }
}
