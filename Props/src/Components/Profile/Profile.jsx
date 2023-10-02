import React from 'react'
import "./Profile.css"




const Profile = ({src,cardTitle,desc}) => {
  return (
    <div>
      <div>
        <img src={src} alt="no-img" />
        <h1>{cardTitle}</h1>
        <p>{desc}</p>
          
        
        
      </div>
    </div>
  )
}

export default Profile