import React from "react";


export default function ServiceAmenities (){
    return (
        <>
            <div className="amenities py-8 px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
                        Why Choose Our Services
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="amenitites-content text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                <i className="fa-solid fa-star text-black text-lg"></i>
                            </div>
                            <h3 className="font-semibold text-base mb-2 text-gray-800">Local Talent</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Find local talent in your city to collaborate with</p>
                        </div>
                        <div className="amenitites-content text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                <i className="fa-solid fa-camera text-black text-lg"></i>
                            </div>
                            <h3 className="font-semibold text-base mb-2 text-gray-800">Photography</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Search through portfolios for a photographer to bring your vision to life</p>
                        </div>
                        <div className="amenitites-content text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                <i className="fa-solid fa-shirt text-black text-lg"></i>
                            </div>
                            <h3 className="font-semibold text-base mb-2 text-gray-800">Fashion Services</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Book a service with tailors embroidery and screenprint shops</p>
                        </div>
                        <div className="amenitites-content text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                                <i className="fa-solid fa-globe text-black text-lg"></i>
                            </div>
                            <h3 className="font-semibold text-base mb-2 text-gray-800">Venues</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">Discover and book cool venues that match your vibe, from cozy hangouts to epic parties, and make your vision a reality.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}