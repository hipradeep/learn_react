import React, { Component } from 'react'

export default class MainHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }
    handleClick =() =>{     
               this.setState({name: "Pradeep"})
    }
  render() {
    return (
      <div> <h1>MainHead</h1>
                <h3> Name - {this.state.name}</h3>
              
                <button onClick={this.handleClick}>Click Me</button>  <br></br><br></br>



      </div>
    )
  }
}
