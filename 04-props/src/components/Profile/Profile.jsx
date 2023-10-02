import React from 'react'
import  Card  from 'react-bootstrap/Card'
import  Button  from 'react-bootstrap/Button'


const Profile = ({src,cardTitle,desc}) => {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title><h1>{cardTitle}</h1></Card.Title>
        <Card.Text>
            <p>{desc}</p>
          
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Profile
