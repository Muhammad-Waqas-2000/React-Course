import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

  const [input, setInput] = useState('car')
  const [data, setData] = useState([])

useEffect(()=>{

  getData()

},[input])


  let Api_Key = "_Orz6a-AEPKVXqic55GxFED55g06KMfvxMDHWmLNAns"


  const getData = async () => {


    try {
      // e.preventDefault()

      const response = await fetch(`https://api.unsplash.com/search/photos/?query=${input}&client_id=${Api_Key}`)

      const data = await response.json()
      console.log(data.results);
      setData(data.results)


    } catch (error) {
      console.log(error);
    }
    
  }
  return(
  
    <div className='contanier'>
      <form onSubmit={(e)=>{
        e.preventDefault()
      }}>
      <input type="text" placeholder='Seach your Favorite image' value={input} onChange={(e)=>setInput(e.target.value)} className='input'/>
      <button>Click</button>
      </form>
  
      <div className="images">
          {data.map((result) => (
          // <div className='row'>
          <div className="col" key={result.id}>
            <img src={result.urls.small} alt={result.alt_description} />
            <h4>
              <a href={result.links.html} target="_blank" rel="noopener noreferrer">
                {result.alt_description}
              </a>
            </h4>
          </div>

        
        ))}
          </div>     
  
  
    </div>
   
   
  )
}

export default App
