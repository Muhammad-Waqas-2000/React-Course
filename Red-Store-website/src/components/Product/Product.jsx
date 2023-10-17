import React from 'react'
import './Product.css'
import Items from '../../Items/Items'

const Product = () => {
  return (
    <div class="small_contanier">
        <h2 class="title">Feature Products</h2>
        <div class="row">
            <Items 
            src = "images/product-1.jpg"
            title = 'Red T-Shirt'
            price = '$ 23'/>
                
            
            <Items 
            src = "images/product-2.jpg"
            title = 'Red T-Shirt'
            price = '$ 23'/>
                
            
            <Items
                src = "images/product-3.jpg"
                title = 'Red T-Shirt'
                price = '$ 23'
            />
            
            <Items
                src = "images/product-4.jpg"
                title = 'Red T-Shirt'
                price = '$ 23'
            />
            
        </div>
        <h2 class="title">Latest Products</h2>
        <div class="row">
            <Items
                src = "images/product-9.jpg"
                title = 'Red T-Shirt'
                price = '$ 23'
            />
            
            <Items
                src = "images/product-10.jpg"
                title = 'Red T-Shirt'
                price = '$ 23'
            />
            
            <Items
                src = "images/product-11.jpg"
                title = 'Red T-Shirt'
                price = '$ 23'
            />
            
            <Items
                src = "images/product-12.jpg"
                title = 'Red T-Shirt'
                price = '$ 23'
            />
            
        </div>
        <div class="row">
        <Items
                src = "images/product-5.jpg"
                title = 'Red T-Shirt'
                price = '$ 23'
        />
         
            <Items
                src = "images/product-6.jpg"
                title = 'Red T-Shirt'
                price = '$ 23'
            />
            
            <Items
                src = "images/product-7.jpg"
                title = 'Red T-Shirt'
                price = '$ 23'
            />
            
            <Items
                src = "images/product-8.jpg"
                title = 'Red T-Shirt'
                price = '$ 23'
            
            />
        </div>
    </div>
  )
}

export default Product
