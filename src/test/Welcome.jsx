import React, {useState} from "react";

function MyButton(props){
    return <button onClick={props.onClick}>{props.label + props.count}</button>;
}

function MyButton2(props) {

    const [count, setCount] = useState(0);

    function handleLocalClick() {
        setCount(count + 1);

        if (props.onClick) {
            props.onClick();
        }
    }

    return (
        <button onClick={handleLocalClick}>
            {props.label} {count}
        </button>
    );
}

function Welcome(props) {
const [count, setCount]=useState(0);

    function handleClick(){
        setCount(count+1)
    }
    function handleAlert(){
        alert("HI");
    }

    return (
        <div className="red" style={{fontSize:"40px"}}>
            Welcome {props.name}
            <button onClick={()=> handleClick("LLL")}>Click </button>
            <MyButton 
                label="MyButton"
                count={count}
                onClick={()=> handleClick("OK")}
            />

             <MyButton2 
                label="Open"
            />
             <MyButton2 
                label="Open"
                onClick={() => handleAlert()}
            />

        </div>

    );
}


export default Welcome;