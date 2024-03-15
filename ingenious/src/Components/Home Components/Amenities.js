import React from "react";
import amenitiesimgOne from "../../img/Shop.png"
import amenitiesimgTwo from "../../img/Subscribe.png"
import amenitiesimgThree from "../../img/Auction.png"
import amenitiesimgFour from "../../img/Services.png"

export default function Amenities(){
    return (
        <div className="amenities">
            <div className="amenitites-content">
            <i class="fa-solid fa-bag-shopping"></i>
            <p>Shop with your local dealers  for the newest brands in the street</p>
            </div>
            <div className="amenitites-content">
            <i class="fa-solid fa-user-plus"></i>
            <p>For affordable advertising and exposure to a community of fashion forward customers</p>
            </div>
            <div className="amenitites-content">
            <i class="fa-solid fa-comment-dollar"></i>
            <p>Your newest most exclusive collections to customers that value your product</p>
            </div>
            <div className="amenitites-content">
            <i class="fa-solid fa-briefcase"></i>
            <p>For businesses and fashion creative. DTG Screenprinting Local Photograph or Model.</p>
            </div>
        </div>
    )
}