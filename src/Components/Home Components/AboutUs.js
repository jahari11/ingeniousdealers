import React from "react";
import IDlogo from '../../img/IDlogo.jpg'

export default function AboutUs(){
    return (
        <div className="flex justify-center items-center p-4 sm:p-6 flex-col lg:flex-row min-h-screen">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold uppercase mb-6 text-black">About Us</h1>
                <p className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-gray-700">
                    Ingenious Dealers stands as a vibrant fashion platform and a creative marketplace, pioneering innovative approaches to showcase businesses and provide essential services within our dynamic network. Our platform serves as a nexus for both business-to-business and consumer opportunities, fostering connections that drive growth and innovation. At Ingenious Dealers, we reimagine the delivery of clothing and goods within our community, infusing every interaction with a fresh perspective and a commitment to excellence. We believe that Dealers represent the intersection of creativity and hustle, embodying the spirit of ingenuity that propels businesses forward in an ever-evolving marketplace.
                </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center">
                <img src={IDlogo} alt="Ingenious Dealers Logo" className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg shadow-lg"/>
            </div>
        </div>
    )
}