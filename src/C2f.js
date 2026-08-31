import {useState} from "react";

function C2f(){
    const[count, setCount]= useState(0);
    const[section, setSection]= useState(0);
    const add = ()=>{
        setCount(count+1)
    }
    return(

        <div>
            <h1> Count: {count}</h1>
            <button onClick={add}>Add</button>
        </div>
    );
}

export default C2f;