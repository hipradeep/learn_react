import React, { Component } from 'react'

export default class TextData extends Component {

    constructor(props) {
        super(props);
       
      }
      state = {
        //send this data to mainHead
        value: 'Maurya',
      
    }
      handleLangChange = () => {
    
        this.props.onUpdate(this.state.value);            
    }
  render() {
    return (
      <div>TextData

       <h3>{this.props.name }</h3>

       <button onClick={this.handleLangChange}>Send To MainHead</button>  <br></br><br></br>

      </div>
    )
  }
}
