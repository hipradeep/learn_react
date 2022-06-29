

import React, { Component } from 'react'
import '../App.css'

export default class SimpleForm extends Component {
  state = {
    value: ""
  }
  handlerChange = (e) => {
   // this.setState({ value: e.target.value });
    this.setState({ value: e.target.value.toUpperCase() });
  }
  render() {
    return (
      <div>

        <h1>Simple Form</h1>

        <input type="text" value={this.state.value} onChange={this.handlerChange} />

      </div>
    )
  }
}
