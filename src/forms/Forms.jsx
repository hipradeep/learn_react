

import React, { Component } from 'react'
import '../App.css'

export default class LoginForm extends Component {
    state = {
        name: "",
        password: ""
    }
    handlerName = (e) => {

        this.setState({ name: e.target.value.toUpperCase() });
    }
    handlerPassword = (e) => {

        this.setState({ password: e.target.value.toUpperCase() });
    }
    handlerSubmit = (e) => {
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        e.preventDefault();
    }
    render() {
        return (
            <div>

                <h1>Simple Form</h1>

                <form action="" onSubmit={this.handlerSubmit}>
                    <label> Name
                        <input type="text" value={this.state.name} onChange={this.handlerName} />
                    </label>
                    <label> Password
                        <input type="text" value={this.state.password} onChange={this.handlerPassword} />
                    </label>
                    <input type="submit" />
                </form>


            </div>
        )
    }
}
