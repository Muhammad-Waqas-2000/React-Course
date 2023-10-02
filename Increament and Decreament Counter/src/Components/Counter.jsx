import React from 'react'
import { useState } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0)
    // let Counter = 0;

   const Increament =()=>{
       // Counter = Counter +1;
       // console.log(Counter);
       if (counter<=19) {
        setCounter(counter+1)
        
    }else{
        alert("Stopped It.....!")
    }
   }


   const Decreament =()=>{
       // Counter = Counter -1;
       if(counter>=1){
        setCounter(counter-1)

    }else{
        alert("Stopped It.....!")
    }
   }
  return (


    <div>
    <button onClick={Increament}>Increment</button>
    <div><h2>{counter}</h2></div>  
    <button onClick={Decreament}>Decrement</button>  
    </div>
  )
}

export default Counter
