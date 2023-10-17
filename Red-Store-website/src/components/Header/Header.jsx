import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      
      <div class="header">
        <div class="contanier">
            <div class="navbar">
                <div class="logo">
                    <img src="images/logo.png" width="125px"/>
                </div>
                <nav className='flex'>
                  <ul className='flex gap-3 w-[100%] mr-5 justify-end cursor-pointer'>
                     <li><NavLink to={''}>Home</NavLink></li>
                     <li><NavLink to={'/product'}>Products</NavLink></li>
                     <li><NavLink to={'/services'}>Services</NavLink></li>
                     
                  </ul>







                </nav>









                {/* <nav>
                    <ul id="menuItem">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Services</a></li>
                    </ul>
                </nav> */}
                <img src="images/cart.png" width="30px" height="30px"/>
            
            </div>
       </div>
    </div>

    </div>
  )
}

export default Header
