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
    <div>
      {/* Filter Inputs */}
      <div className='flex justify-center items-center gap-8 bg-gray-200 mb-5'>
      <div className="mb-4">
        <label htmlFor="dealerType" className="block text-md text-black font-bold">Dealer Type</label>
        <select
          id="dealerType"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-5 py-2.5 border-black text-black text-sm outline-none bg-white hover:bg-gray-50">
          <option value="">All Types</option>
          {typesOptions.map((type, index) => (
            <option className='capitalize' key={index} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="dealerCity" className="block text-md font-bold text-black">Dealer City</label>
        <select
          id="dealerCity"
          value={filterCity}
          onChange={(e) => setFilterCity(e.target.value)}
          className="px-5 py-2.5 border-black text-black text-sm outline-none bg-white hover:bg-gray-50"
        >
          <option value="">All Cities</option>
          {citiesOptions.map((city, index) => (
            <option className='capitalize' key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>
      </div>

      {/* Render Cards */}
      <div className="flex flex-wrap gap-4 justify-center">
        {filteredData.map(dealer => (
          <Link to={`/service/${dealer.id}`} key={dealer.id} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
            <img className="w-full h-48 object-cover" src={dealer.dealerImg} alt={dealer.dealerName} />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-900 capitalize">{dealer.dealerName}</h2>
              <p className="text-sm text-gray-600 capitalize">{dealer.dealerType}</p>
              <p className="text-sm text-gray-600 capitalize">{dealer.dealerCity}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
