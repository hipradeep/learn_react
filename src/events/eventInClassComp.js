import React, { Component } from 'react'

class Event extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: " pradeep maurya ",
           // roll: this.props.roll

        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Button Clicked', this.state.name);
    }

    /** 
     * handlind undefind this
     
    handleClick =() =>{     
        console.log('Button Clicked', this);
    }
    
    */

    render() {
        return (
            <div>
                <h1>Event</h1>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}


export default Event;