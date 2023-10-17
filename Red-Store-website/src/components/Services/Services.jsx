import React from 'react'
import './Services.css'
import { EcomProducts } from '../../ecomProducts/EcomProducts'

const Services = () => {
  return (

    <>
    {

        EcomProducts.map((ecom)=>(
            <div class="categories">
                    <div class="small_contanier">
                        <div class="row">
            
                            <div class="col_3">
                                <img src={ecom.img}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
        ))
    }
    </>
  )
}

export default Services




