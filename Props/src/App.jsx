import React from 'react'
import Profile from './Components/Profile/Profile'
import "./App.css"

function App() {
  return (
    <div className='Prop'>
      
      <Profile src="https://cdn.pixabay.com/photo/2017/01/31/18/21/affection-2026201_640.png"
      cardTitle="True Love Never Die"
      desc="Love the beautiful girls"
      />
      <Profile src="https://cdn.pixabay.com/photo/2020/02/03/05/31/couple-4814817_640.png"
      cardTitle="Always love me Forever"
      desc="Most Expensive Things In this World"
      />
      
    </div>
  )
}

export default App
