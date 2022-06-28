import React, { Component } from 'react'

import TextData from './TextData';
import OutputData from './OutputData';

export default class MainHead extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            child:""
        }
    }
    handleClick =() =>{     
               this.setState({name: "Pradeep"})
    }
    update = (e) => {
      this.setState({child: e});
  }
  
  render() {
    return (
      <div> <h1>MainHead</h1>
                <h3> Name - {this.state.name}</h3>
                <h3> From TextDate - {this.state.child}</h3>
              
                <button onClick={this.handleClick}>Show Name</button>  <br></br><br></br>

              <TextData name = {this.state.name}  onUpdate={this.update} />
              <OutputData  name = {this.state.name} />



      </div>
    )
  }
}
