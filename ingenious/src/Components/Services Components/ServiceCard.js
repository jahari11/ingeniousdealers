import React, { useState, useEffect } from 'react';
import ServicesData from '../Services Components/servicesData'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const ServiceCard = () => {
  // State for filter values
  const [filterType, setFilterType] = useState('');
  const [filterCity, setFilterCity] = useState('');

  const [typesOptions, setTypesOptions] = useState([]);
  const [citiesOptions, setCitiesOptions] = useState([]);

  useEffect(() => {
    // Example: Fetch options from a database
    // Replace the following arrays with API data fetching
    setTypesOptions([...new Set(ServicesData.map(item => item.dealerType))]);
    setCitiesOptions([...new Set(ServicesData.map(item => item.dealerCity))]);
  }, []);

  // Filter data based on selected filter values
  const filteredData = ServicesData.filter(dealer => {
    return (
      (filterType === '' || dealer.dealerType === filterType) &&
      (filterCity === '' || dealer.dealerCity === filterCity)
    );
  });

  return (
    <div className="py-12 px-4">
      {/* Filter Inputs */}
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 bg-gray-100 py-8 px-4 mb-8 rounded-lg max-w-4xl mx-auto'>
        <div className="w-full sm:w-auto">
          <label htmlFor="dealerType" className="block text-sm text-black font-bold mb-2">Dealer Type</label>
          <select
            id="dealerType"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full sm:w-48 px-4 py-3 border-2 border-black text-black text-sm outline-none bg-white hover:bg-gray-50 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200">
            <option value="">All Types</option>
            {typesOptions.map((type, index) => (
              <option className='capitalize' key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="w-full sm:w-auto">
          <label htmlFor="dealerCity" className="block text-sm font-bold text-black mb-2">Dealer City</label>
          <select
            id="dealerCity"
            value={filterCity}
            onChange={(e) => setFilterCity(e.target.value)}
            className="w-full sm:w-48 px-4 py-3 border-2 border-black text-black text-sm outline-none bg-white hover:bg-gray-50 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
          >
            <option value="">All Cities</option>
            {citiesOptions.map((city, index) => (
              <option className='capitalize' key={index} value={city}>{city}</option>
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
