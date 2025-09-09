import React, { Component } from "react";

class FormExampleClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            agree: false
        };
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        this.setState({
            [name]: type === "checkbox" ? checked : value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted Name: ${this.state.name}, Email: ${this.state.email}`);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br /><br />

                <label>
                    Email:
                    <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <br /><br />

                <label>
                    <input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleChange} />
                    I agree to the terms and conditions
                </label>
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default FormExampleClass;
