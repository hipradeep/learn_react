import React, { Component } from 'react'
import Guest from './Guest'

export default class Child extends Component {
    render() {
        return (
            <div>I am Child

                <Guest />

            </div>
        )
    }
}
