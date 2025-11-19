import React from "react"
import { useNavigate } from "react-router-dom"


export default function ServiceSearch () {
    const navigate = useNavigate();

    const services = [
        { name: "photographers", icon: "fa-camera" },
        { name: "venues", icon: "fa-building" },
        { name: "tailoring", icon: "fa-scissors" },
        { name: "models", icon: "fa-user" }
    ];

    const handleServiceClick = (service) => {
        navigate(`/services?service=${service}`);
    };

    return (
        <>
        <div className="service-search-wrapper">
            <h3 className="service-search-title">Explore local creatives and providers</h3>
            <p className="service-search-description">Discover trusted service providers in your city explore categories below.</p>
            
            {/* Service Category Slider */}
            <div className="service-category-slider-wrapper">
                <div className="service-category-slider">
                    {services.map((service) => (
                        <div 
                            key={service.name}
                            className="service-category-tile"
                            onClick={() => handleServiceClick(service.name)}
                        >
                            <div className="service-tile-icon">
                                <i className={`fa-solid ${service.icon}`}></i>
                            </div>
                            <span className="service-tile-text">
                                {service.name.charAt(0).toUpperCase() + service.name.slice(1)}
                            </span>
                            <span className="service-tile-hint">Click to explore</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}