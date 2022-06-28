import React, { useState, useEffect } from 'react'

export default function Hook2() {

    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(50);

    const handler = () => {
        setCount(count + 1)
    }
    const handler1 = () => {
        setCount1(count1 - 1)
    }
    //call all time when incremet or decrement
    // useEffect(() => { console.log("Use Effect Called") });

    //call only when incremnt
    useEffect(() => { console.log("Use Effect Called") }, [count]);
    return (
        <div>

            <h1>Count Up : {count}</h1>
            <button type='button' onClick={handler}> Increments</button>
            <h1>Count Down : {count1}</h1>
            <button type='button' onClick={handler1}> Dercement</button>

        </div>
    )
}
