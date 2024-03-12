import React from "react"
import Header from "./Header"
import {Link} from 'react-router-dom'


export default function Navbar (){
    return (
        <>
        <Header />
        <nav>   
                <div className="social-icons">
                    <a href=""><i class="fa-brands fa-x-twitter" ></i></a>
                    <a href=""><i class="fa-brands fa-instagram"></i></a>
                    <a href=""><i class="fa-brands fa-youtube"></i></a>
                </div>
                <div className="navigation">
                    <Link className="navi-home" to = "/home">Home</Link>
                    <Link to = "/shop">Shop</Link>
                    <Link to = "/services">Services</Link>
                </div>
                <div className="search-container">
                    <input type="text" className="search-input" placeholder="Search" />
                    <div className="search-icon"><i class="fa-solid fa-magnifying-glass"></i></div>
                    <button className="login-btn">Login</button>
                </div>
                
        </nav>
        </>
    )
}