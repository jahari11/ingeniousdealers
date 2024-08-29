import React from "react";
import IDlogo from '../../img/IDlogo.jpg'

export default function AboutUs(){
    return (
        <div className="flex justify-center items-center p-6 flex-col lg:flex-row h-screen">
            <div>
                <h1 className="text-xl font-bold uppercase mb-4 text-black sm:text-9xl">About Us</h1>
                <p className="text-lg lg:text-justify font-medium ">Ingenious Dealers stands as a vibrant fashion platform and a creative marketplace, pioneering innovative approaches to showcase businesses and provide essential services within our dynamic network. Our platform serves as a nexus for both business-to-business and consumer opportunities, fostering connections that drive growth and innovation. At Ingenious Dealers, we reimagine the delivery of clothing and goods within our community, infusing every interaction with a fresh perspective and a commitment to excellence. We believe that Dealers represent the intersection of creativity and hustle, embodying the spirit of ingenuity that propels businesses forward in an ever-evolving marketplace.</p>
            </div>
            <div>
                <img src={IDlogo} alt=""  className=""/>
            </div>
        </div>
    )
}