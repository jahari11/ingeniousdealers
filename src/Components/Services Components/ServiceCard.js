import React, { useState, useEffect } from 'react';
import ServicesData from '../Services Components/servicesData'; // Adjust the path as necessary
import { Link, useSearchParams } from 'react-router-dom';

// Match exactly with home page values
const serviceOptions = ['photographers', 'venues', 'tailoring', 'models'];
const cityOptions = ['new york', 'los angeles', 'atlanta', 'miami', 'houston'];

const formatLabel = (value) =>
  value
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const normalize = (value = '') => value.toLowerCase().trim();

const ServiceCard = () => {
  const [searchParams] = useSearchParams();

  const [filterType, setFilterType] = useState('');
  const [filterCity, setFilterCity] = useState('');

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    const cityParam = searchParams.get('city');
    setFilterType(serviceParam ? normalize(serviceParam) : '');
    setFilterCity(cityParam ? normalize(cityParam) : '');
  }, [searchParams]);

  // Filter data based on selected filter values - matching with normalized values
  const filteredData = ServicesData.filter(dealer => {
    const dealerType = normalize(dealer.dealerType);
    const dealerCity = normalize(dealer.dealerCity);
    
    const typeMatch = filterType === '' || dealerType === filterType;
    const cityMatch = filterCity === '' || dealerCity === filterCity;
    
    return typeMatch && cityMatch;
  });

  return (
    <div className="py-12 px-4">
      {/* Title and Description */}
      <div className="text-center mb-4 flex flex-col items-center">
        <h3 className="service-search-title mb-2">Choose Your Services</h3>
        <p className="service-search-description mx-auto">Filter by service type and location to find exactly what you need</p>
      </div>
      
      {/* Filter Inputs */}
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 px-4 max-w-4xl mx-auto'>
        <div className="input-container">
          <div className="input-icon-wrapper">
            <i className="fa-solid fa-briefcase service-icon"></i>
          </div>
          <select
            id="dealerType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="service-page-select input-txt">
            <option value="">All Types</option>
            {serviceOptions.map((type) => (
              <option key={type} value={type}>{formatLabel(type)}</option>
            ))}
          </select>
        </div>

        <div className="input-container">
          <div className="input-icon-wrapper">
            <i className="fa-solid fa-map-marker-alt city-icon"></i>
          </div>
          <select
            id="dealerCity"
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            className="service-page-select input-txt"
          >
            <option value="">All Cities</option>
            {cityOptions.map((city) => (
              <option key={city} value={city}>{formatLabel(city)}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center mb-6">
        <p className="text-gray-600 font-medium">
          {filteredData.length} service{filteredData.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Render Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredData.map(dealer => (
          <Link 
            to={`/service/${dealer.id}`} 
            key={dealer.id} 
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden">
              <img 
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
                src={dealer.dealerImg} 
                alt={dealer.dealerName} 
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
            </div>
            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 capitalize mb-2 group-hover:text-black transition-colors duration-200">
                {dealer.dealerName}
              </h2>
              <p className="text-sm text-gray-600 capitalize mb-1 font-medium">
                {dealer.dealerType}
              </p>
              <p className="text-sm text-gray-500 capitalize flex items-center">
                <i className="fa-solid fa-location-dot mr-1 text-xs"></i>
                {dealer.dealerCity}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results Message */}
      {filteredData.length === 0 && (
        <div className="text-center py-12">
          <i className="fa-solid fa-search text-4xl text-gray-400 mb-4"></i>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
          <p className="text-gray-500">Try adjusting your filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
