import React, { Component } from 'react'
//to access class props in class component this.props.attribute name 

export default class ClasscompExample extends Component {

  render() {
    return (
      <div>    
      <h1>Pradeep</h1>
        
        {this.props.email}
        <p> {this.props.address}   </p>
        <p style={{ color: 'red' }}><b>{this.props.children}</b></p>
      </div>

    )
  }
}