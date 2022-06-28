
import React, { Component } from 'react'

class List extends Component {

    render() {
        const arr = [10, 20, 30, 40, 50];
        const newArr = arr.map((num) => {
            return <li>{num * 2}</li>
        })
        return (
            <div>
                <ul>
                    {newArr}
                </ul>
                {/* OR */}
                <ul>
                    {arr.map((num) => { return <li>{num}</li> })}
                </ul>
            </div>
        )
    }
}


    export default class List2 extends Component {
        state = {
            user: [
                { id: 100, name: "Pradeep", password: "1222" },
                { id: 101, name: "Maurya", password: "0210" },
                { id: 102, name: "Keshav", password: "1110" },
            ],
            userLogin: true

        }
        render() {

            return (
                <div>
                    {this.state.userLogin ?
                        <ul>
                            {
                                this.state.user.map((data) => { return <li  key={data.id}> Id : {data.id}, Name : {data.name}, Password : {data.password}</li> })
                            }
                        </ul> :
                        <h1>No Data</h1>
                    }

                </div>
            )
        }
    }