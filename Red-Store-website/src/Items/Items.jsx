import React from 'react'
import './Items.css'

const Items = ({src, title, price}) => {
  return (
    <div>
        <div class="col_4">
            <img src={src}/>
            <h4>{title}</h4>
            <p>{price}</p>
        </div>
    </div>
  )
}

export default Items
