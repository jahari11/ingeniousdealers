import React, { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function ServiceSearch () {
    const [selectedService, setSelectedService] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const navigate = useNavigate();

    const services = ["photographers", "venues", "tailoring", "models"];
    const cities = ["new york", "los angeles", "atlanta", "miami", "houston"];

    const handleSubmit = () => {
        const params = new URLSearchParams();
        if (selectedService) {
            params.append('service', selectedService);
        }
        if (selectedCity) {
            params.append('city', selectedCity);
        }
        
        const query = params.toString();
        navigate(query ? `/services?${query}` : '/services');
    };

    return (
        <>
        <div className="service-search-wrapper">
            <h3 className="service-search-title">Discover Amazing Services</h3>
            <p className="service-search-description">Find the perfect service providers in your city with our intelligent search</p>
            <div className="service-search">
                <div className="input-container">
                    <div className="input-icon-wrapper">
                        <i className="fa-solid fa-briefcase service-icon"></i>
                    </div>
                    <select 
                        className="input-txt" 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                    >
                        <option value="">Search your service</option>
                        {services.map((service) => (
                            <option key={service} value={service}>
                                {service.charAt(0).toUpperCase() + service.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="input-container">
                    <div className="input-icon-wrapper">
                        <i className="fa-solid fa-map-marker-alt city-icon"></i>
                    </div>
                    <select 
                        className="input-txt" 
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                    >
                        <option value="">Choose your city</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </option>
                        ))}
                    </select>
                </div>
                <button 
                    className="service-search-submit-btn"
                    onClick={handleSubmit}
                    type="button"
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
        </>
    )
}