import React from "react";
import locationserviceimg from "../../img/rafiki.png"

export default function LocationServices(){
    return (
        <div className="location--services">
        <div className="location--services--text">
            <h4>Turn on location services</h4>
            <span>Get recommendation of great services! Turn on your location so we can show you whats nearby</span>
            <div className="location--services--btn">
                <button>Search Near Me</button>
            </div>
        </div>
        <div className="location--services--img">
            <img src={locationserviceimg} alt="" />
        </div>
        </div>
    )
}