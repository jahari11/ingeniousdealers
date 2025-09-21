import React from "react";
import { Link } from "react-router-dom";


export default function ServicesComponent ({item}) {
    return (
        <div className="services-component-wrapper py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {item.map((val) =>(
                        <Link to={`/service/${val.id}`} key={val.id} className="group">
                            <div className="service-component bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="relative overflow-hidden">
                                    <img 
                                        src={val.dealerImg} 
                                        alt={val.dealerName}
                                        className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                </div>
                                <div className="service-name-text p-4 sm:p-6">
                                    <h3 className="service-brand-name text-lg sm:text-xl font-bold text-gray-900 capitalize mb-2 group-hover:text-black transition-colors duration-200">
                                        {val.dealerName}
                                    </h3>
                                    <h4 className="service-brand-type text-sm text-gray-600 capitalize mb-2 font-medium">
                                        {val.dealerType}
                                    </h4>
                                    <span className="text-sm text-gray-500 leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}


