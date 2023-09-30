import React from 'react'
import { useState } from 'react';

const Counter = () => {

    const [counter ,setCounter ] = useState(0);
    



    

    const Incriment = ()=>{

        setCounter(counter+1)
      
    }
    const Decrement = ()=>{
        setCounter(counter-1)
    }
  
  return (
    <div>
      
      <button onClick={Incriment}> Incriment </button>
      <div><h2>{counter}</h2></div>   
      <button onClick={Decrement}> Decrement </button>
    </div>
  )
}

export default Counter
