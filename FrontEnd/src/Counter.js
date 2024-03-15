import React,{useEffect,useState} from 'react'
import './Counter.css';
export default function Counter() {
    const [count,setCount]=useState(0)
    const [secondCounter,setSecondCounter]=useState(100)
    useEffect(()=>{
        console.log("Mounting Phase...")
        return function(){
            console.log("exit...")
        }
    },[])
    useEffect(()=>{
        console.log("Updating Phase....")
    },[count,secondCounter])
  return (
    <div className="counter-container">
        <div className="counter">
        <h2>Counter:{count}</h2>
        <div className="counter-buttons">
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setCount(count-1)}}>-</button>
        </div>
        </div>
        <div className="divider"></div>
        <div className="counter">
        <h2>Second Counter:{secondCounter}</h2>
        <div className="counter-buttons">
        <button onClick={()=>{setSecondCounter(secondCounter+1)}}>+</button>
        <button onClick={()=>{setSecondCounter(secondCounter-1)}}>-</button>
        </div>
        </div>
        </div>
  )
}
