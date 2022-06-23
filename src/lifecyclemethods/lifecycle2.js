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
  this.setState({roll:102})
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
 
  render() {
    console.log("Marks Component")
    return (
      <div>Marks Component : </div>
    )
  }
}

export default class LifeCycle    extends Component {

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
