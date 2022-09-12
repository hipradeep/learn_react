import React, { Component } from 'react';

import {Consumer} from './Context';

export default class Guest extends Component {
    render() {
        return (
            <div style={{border:'1px solid white'}}>
                <h1>Guest Component</h1>
                <Consumer >
                    {

                        ({ data, handleClick }) => (
                            <div>


                                <h4>Name : {data.name} Value : {data.value}</h4>
                                <button type='button' onClick={handleClick}>Click Me</button>

                            </div>)
                    }

                </Consumer>
            </div>
        )
    }
}
