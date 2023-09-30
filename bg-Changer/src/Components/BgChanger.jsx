import React from 'react'
import { useState } from 'react'

const BgChanger = () => {
    const [bgChanger, setBgChanger] = useState("white")
  return (
    <div>

      <div style={{backgroundColor:bgChanger,
      height:'100vh',
      width:'100%',
      top:0,
      left:0,
      display:'flex',
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center"
      }}>
        <h1 className='bgChanger'>This is "<span>BgChanger Project</span>"</h1>
      <input type="color" value={bgChanger} onChange={(e)=>setBgChanger(e.target.value)}/>
        
      </div>
    </div>
  )
}

export default BgChanger
