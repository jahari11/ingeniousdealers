import React from "react";

export default function ShopCardIcon () {
    return (
        <>
        <div className="shopcard--icon">
            <div className="shopcard--image">
                <img src="https://images.unsplash.com/photo-1523380677598-64d85d015339?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="shopcard--stats">
                <h4>Ingenious Store</h4>
                <p>New York, NY</p>
                <p>600 N Robertson Blvd</p>
                <i class="fa-solid fa-star"></i>
                <span>4.7</span>
            </div>
        </div>
        </>
    )
}