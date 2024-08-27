import React from "react";
import discoimg from "../../img/discover.png"
import igMovie from '../../img/IngeniousMovie.mp4'


export default function DiscoverImage (){
    return (
        <div className="discover-container">
            <video loop autoPlay src={igMovie} alt="" className="discoimg" />
            <div className="discover-overlay">
                <h1 className="discover-text--sub">Discover A Fashion Hub In Your City</h1>
                <div className="discover-btn-group">
                    <button>Explore Now</button>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}