import React, { Component } from 'react'


//Call:- <State roll={450} />
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
//Call:- <State2 roll={450} />
class State2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: " pradeep maurya22 ",
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
            name: " pradeep maurya 44",
            roll: this.props.roll
        }
    }
    handleClick =() =>{     
        console.log('Button Clicked', this.state.name);
       // this.state.name="prdp"; only change state variable not state

        this.setState({name: "prdp",roll:254})
    }
    handleClick2 =() =>{     
              this.setState(function(state, props){
                console.log(state.name)
              })
    }
    //getting argument from event
    handleClick3 =(_name, e) =>{console.log(_name); console.log(e)  }

    //call anothr function from event
    handleClickArg =(e) =>{ this.handleClick3(this.state.name, e);  }

    render() {
        return (
            <div>
               
                <h3>Update State</h3>
                <h3> Name - {this.state.name}, Roll - {this.state.roll} </h3>
                {/* do not use () for handler e.g- handleClick(), it get autometicly call */}
                <button onClick={this.handleClick}>Click Me</button>  <br></br><br></br>
                <button onClick={this.handleClick2}>Click Me2(See Console)</button><br></br><br></br>
                <button onClick={this.handleClickArg}>Click Me3</button><br></br><br></br>
                <button onClick={(e) =>{ this.handleClick3(this.state.name, e)}}>Click Me4</button><br></br><br></br>
                <button onClick={this.handleClick3.bind(this, this.state.name)}>Click Me5</button>
                </div>
               
            
        )
    }
}

export default State3;
