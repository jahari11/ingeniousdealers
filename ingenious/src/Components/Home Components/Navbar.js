import React from "react"
import {Link} from 'react-router-dom'


export default function Navbar (){
    return (
        <div className="navbar">
        <div className="logo-container">
            <h1 className="logo">INGENIOUS Dealers</h1>
            <div className="logo-log">
                <Link>Login</Link>
            </div>
        </div>
        <div className="navbar-022">
        <div className="navbar-links">
            <Link to="/"><i class="fa-brands fa-x-twitter"></i></Link>
            <Link to="/shop"><i class="fa-brands fa-instagram"></i></Link>
            <Link to="/services"><i class="fa-brands fa-youtube"></i></Link>
        </div>
        <div className="navbar-links02">
            <Link to="/home">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/services">Services</Link>
            <Link to="/subscriptions">Subscriptions</Link>
        </div>
        <div className="navbar-links">
            <input placeholder="Search"/>
        </div>
        </div>
        </div>
    )
}