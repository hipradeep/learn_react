import React, { Component } from 'react'


 class Student extends Component {

  constructor(){
    super();
      this.state= {
        roll:101
      }
    
  }
   
clickMe=()=>{
  console.log("Button Clickrd");
  this.setState({roll:108})
}

  render() {
    console.log("Student Component");
    return (
      <div>
        <Marks roll={this.state.roll} />
        <button onClick={this.clickMe}>clickMe</button>
        </div>
    )
  }
}

 class Marks extends Component {
  constructor(props){
    super(props);
      this.state= { 
        mroll:this.props.roll
      }
    
  }
  //if propes update this will run
  static getDerivedStateFromProps(props, state){
    console.log("roll in getDerivedStateFromProps")
    console.log(props.roll)
    console.log("Get Derived State From Props")
    if(props.roll !== state.mroll){
      console.log("Both are not equal")
      return{   mroll: props.roll}
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) { 
    console.log("shouldComponentUpdate")
    console.log(this.state.mroll)
    console.log(nextProps, nextState);
    if(this.state.mroll < 107){
      console.log(this.state.mroll)
      console.log("Mark : Should Component Update ***")
      console.log(nextProps, nextState);
      return true;
    }
    
    return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Marks - getSnapshotBeforeUpdate , Run bfore update")
    console.log(prevProps,prevState);
    return 45;
   }
  componentDidUpdate(prevProps, prevState, snapshot) { 
    console.log("MArks - componentDidUpdate , Run after update")
    console.log(prevProps,prevState,snapshot );
   
  }
  render() {
    console.log("Marks Render")
    return (
      <div>Marks Component :  {this.state.mroll}</div>
    )
  }
}

export default class LifeCycle  extends Component {

    constructor(props) {
        super(props);
        console.log("App- Constructor called")
        console.log(props);
    }

    static getDerivedStateFromProps( props , state ) {
        console.log("App - Get Drived State From Props");
        console.log(props, state);
        return null;
     }
     componentDidMount ( ) {
         // "App - get data from server and set to state "
         console.log("App - componentDidMount");
     }
    render() {
        return (
            <div>
                {/* using student component */}
                <Student name="pradeep"/>
                <h1>pradeep Mauya</h1>

            </div>
        )
    }
}
