import React from "react";
import discoimg from "../../img/discover.png"


export default function DiscoverImage (){
    return (
        <div className="discover-container">
            <img src={discoimg} alt="" className="discoimg" />
            <div className="discover-overlay">
                <span className="discover-text--head">Ingenious Dealer</span>
                <h1 className="discover-text--sub">Discover A Fashion Hub In Your City</h1>
                <div className="discover-btn-group">
                    <button>Explore Now</button>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}