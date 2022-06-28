import React, { useState} from 'react'

export default function Hook1() {
    
    // const nameStateVariable = useState("Pradeep"); 
    // const name=nameStateVariable[0];
    // const setName=nameStateVariable[1];

    //or

    const [name, setName] =useState("pradeep");
    const [roll, setRoll] =useState(101);

const handler=()=>{
    // nameStateVariable[1]("Maurya");
        setName("Maurya");
        setRoll(102);
}
  return (
    <div>
        {/* <h1> {nameStateVariable[0]}</h1> */}
        <h1>Name :  {name}, Roll : {roll}</h1>
        <button onClick={handler}>Click Me </button>
        
        </div>
  )
}
