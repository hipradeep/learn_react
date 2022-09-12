import React, { Component } from 'react'
import Child from './Child'
import {Provider} from './Context'
export const MyContext = React.createContext();
export default class Parent extends Component {
    state = {
        name: "pradeep",
        value :10
    };
    handleClickContext= ()=>{
        this.setState({value:this.state.value+1 })
    }
    render() {
        const contextValue={
            data: this.state,
            handleClick:this.handleClickContext
        }
        return (

            <Provider value={contextValue}>

                <Child />
            </Provider>
        )
    }
}
