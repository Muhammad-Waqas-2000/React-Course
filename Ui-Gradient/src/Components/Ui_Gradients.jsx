import React from 'react'
import { useState } from 'react'
import './Ui_Gradients.css'

const Ui_Gradients = () => {
  const [bg1,setBg1] = useState("lightgreen")
  const [bg2,setBg2] = useState("blue")
  const [bg3,setBg3] = useState("black")

  const [color , setColor] = useState('black')
  const [color2 , setColor2] = useState('black')
  const [color3 , setColor3] = useState('black')



  const bgChanger1 = ()=>{

    const hex = "0123456789ABCDEF"
     let color = "#"
    for(let i = 0; i< 6; i++){
      color += hex[Math.floor(Math.random()*hex.length)]
    }
    setBg1(color)
    // console.log(color);
    setColor(color)
  }



  const bgChanger2 = ()=>{

    const hex = "0123456789ABCDEF"
     let color2 = "#"
    for(let i = 0; i< 6; i++){
      color2 += hex[Math.floor(Math.random()*hex.length)]
    }
    setBg2(color2)
    setColor2(color2)
  }


  const bgChanger3 = ()=>{

    const hex = "0123456789ABCDEF"
     let color3 = "#"
    for(let i = 0; i< 6; i++){
      color3 += hex[Math.floor(Math.random()*hex.length)]
    }
    setBg3(color3)
    setColor3(color3)
  }


  const ui =()=>{
    bgChanger1()
    bgChanger2()
    bgChanger3()
  } 
   
   return (
    
    
    <div style={{ 
      background:`linear-gradient(to right, ${bg1},${bg2},${bg3})`,
      width:"100%",
      height:"100vh"
    }}>

      <div className="main">
        <div className="leftClr" style={{backgroundColor:bg1}}></div>
        <div className="leftClr_code">{color}</div>
        <div className="midClr" style={{backgroundColor:bg2}}></div>
        <div className="midClr_code">{color2}</div>
        <div className="rightClr" style={{backgroundColor:bg3}}></div>
        <div className="rightClr_code">{color3}</div>
      </div>

      <div className="button">
        <button className="btn" id="pre" onClick={ui}>&#8678;</button>
        <button className="btn" id="next" onClick={ui}>&#8680;</button>
      </div>



    </div>
  )
}

export default Ui_Gradients
