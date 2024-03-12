import React from "react";

export default function Footer (){
    return (
        <footer>
            <div>
                <img src="" alt="" />
                <span>Ingenious Dealer</span>
                <span>600 N Robertson Blvd, West Hollywood, CA 90069</span>
                <a href="">ingeniousdealer.com</a>
            </div>
            <div>
                <h1>About</h1>
                <a href="">About Us</a>
                <a href="">Contact Us</a>
                <a href="">Privacy Policy</a>
            </div>
            <div>
                <h1>Join Our Newsletter</h1>
                <p>Want exclusive offers and first access to products? Sign up for email alerts.</p>
                <div>
                    <input type="text" placeholder="Email Address" />
                    <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </footer>
    )
}