
import React, { useState } from 'react'

//you can export this customHook in differnt functon component
const customHook = function useCustomCounter() {
    const [count, setCount] = useState(0);
    const handler = () => {
        setCount(count + 1)
    }
    return {
        count,
        handler
    };
}


export default function Hook3() {
    //use here
    const data=customHook();
    return (
        <div>

            <h1>Count Up : {data.count}</h1>
            <button type='button' onClick={data.handler}> Increments</button>

        </div>
    )
}
