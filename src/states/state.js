import React, { Component } from 'react'

class State extends Component {
    state = {
        name: " pradeep maurya ",
        roll: this.props.roll
    }
    render() {
        return (
            <>
                <h1> Hello {this.state.name} </h1>
                <h1> Roll  {this.state.roll} </h1>
            </>
        )
    }
}
//using constuctor
class State2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: " pradeep maurya ",
            roll: this.props.roll
        }
    }
    render() {
        return (
            <>
                <h1> Hello {this.state.name} </h1>
                <h1> Roll  {this.state.roll} </h1>
            </>
        )
    }
}

//update state

class State3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: " pradeep maurya ",
            roll: this.props.roll
        }
    }
    handleClick =() =>{     
        console.log('Button Clicked', this.state.name);
       // this.state.name="prdp"; only change state variable not state

        this.setState({name: "prdp",roll:254})
    }


    render() {
        return (
            <div>
                <h3>Update State</h3>
                <h3> Name - {this.state.name}, Roll - {this.state.roll} </h3>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default State3;
