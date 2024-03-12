import React from "react";
import aboutusimg from "../../img/Group 427321542.png"

export default function AboutUs(){
    return (
        <div className="aboutus--content">
            <div className="aboutus--txtcontent">
                <h1>About Us</h1>
                <p>Ingenious Dealers stands as a vibrant fashion platform and a creative marketplace, pioneering innovative approaches to showcase businesses and provide essential services within our dynamic network. Our platform serves as a nexus for both business-to-business and consumer opportunities, fostering connections that drive growth and innovation. At Ingenious Dealers, we reimagine the delivery of clothing and goods within our community, infusing every interaction with a fresh perspective and a commitment to excellence. We believe that Dealers represent the intersection of creativity and hustle, embodying the spirit of ingenuity that propels businesses forward in an ever-evolving marketplace.</p>
            </div>
            <div className="aboutus--img">
                <img src={aboutusimg} alt="" />
            </div>
        </div>
    )
}