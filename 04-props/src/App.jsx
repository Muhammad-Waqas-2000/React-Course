import React from 'react'
import Profile from './components/Profile/Profile'




const App = () => {
  return (
    <div>
      <h1>Hello worlds</h1>
     <Profile src="https://cdn.pixabay.com/photo/2023/04/26/13/18/shell-7952399_640.jpg"
     cardTitle= "NailPolish"
     desc="love the beautifull girl"
     />
     <Profile src="https://cdn.pixabay.com/photo/2017/01/20/15/06/oranges-1995056_640.jpg"
     cardTitle= "Orange"
     desc="kam pare to mere lele"
     />
    </div>
  )
}

export default App
