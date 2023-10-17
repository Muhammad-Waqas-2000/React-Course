import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="contanier">
            <div className="row">
                <div className="footer_col_1">
                    <h3>Download Our App</h3>
                    <p>Download Aap for Android and ios mobile phone.</p>
                    <div className="app_logo">
                        <img src="images/play-store.png"/>
                        <img src="images/app-store.png"/>
                    </div>
                </div>
                <div className="footer_col_2">
                    <img src="images/logo-white.png"/>
                    <p>Our Purpose Is To Sustainably Make the Pleasue and benefit of Sports Asseccible to the Many.</p>
                </div>
                <div className="footer_col_3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Join affiliate</li>
                    </ul>
                </div>
                <div className="footer_col_4">
                    <h3>Follow Us</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>YouTube</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
