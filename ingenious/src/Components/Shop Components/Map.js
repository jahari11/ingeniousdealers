import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  const [map, setMap] = useState(null);

  const stores = [
    { id: 1, name: 'Store 1', position: [40.712, -74.005] },
    { id: 2, name: 'Store 2', position: [34.052, -118.243] },
    // Add more stores here
  ];

  const handleStoreClick = (position) => {
    if (map) {
      map.flyTo(position, 14); // Smoothly move to the store's position with a zoom level of 14
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:h-screen">
  {/* Store List */}
  <div className="md:w-1/3 w-full p-4 overflow-y-auto bg-gray-100">
    <h2 className="text-xl font-bold mb-4 text-center">Store Locations</h2>
    <ul>
      {stores.map(store => (
        <li 
          key={store.id} 
          className="my-2 cursor-pointer" 
          onClick={() => handleStoreClick(store.position)}
        >
          {store.name}
        </li>
      ))}
    </ul>
  </div>

  {/* Map Container */}
  <div className="md:w-2/3 w-full h-64 md:h-full">
    <MapContainer 
      center={[40.712, -74.005]} 
      zoom={13} 
      className="h-full w-full" 
      whenCreated={setMap}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {stores.map(store => (
        <Marker key={store.id} position={store.position}>
          <Popup>{store.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  </div>
</div>

  );
}
