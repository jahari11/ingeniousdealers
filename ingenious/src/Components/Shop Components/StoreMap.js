import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const StoreMap = () => {
    const [selectedStore, setSelectedStore] = useState(null);
    const stores = [
        { id: 1, name: "Store A", position: { lat: 37.7749, lng: -122.4194 } },
        { id: 2, name: "Store B", position: { lat: 37.7849, lng: -122.4094 } },
        // Add more stores as needed
    ];

    const handleStoreClick = (store) => {
        setSelectedStore(store);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyBfZb6n65Rgk3zHzOKM1WwJFBKmWSabP_I">
            <div className="flex flex-col md:flex-row h-screen">
                <div className="md:w-1/3 p-4 overflow-y-auto bg-white border-r border-gray-200 md:border-b-0 md:border-r">
                    <h2 className="text-xl font-bold mb-4">Stores</h2>
                    <ul>
                        {stores.map(store => (
                            <li 
                                key={store.id} 
                                onClick={() => handleStoreClick(store)} 
                                className="cursor-pointer p-2 hover:bg-gray-100 border-b border-gray-200"
                            >
                                {store.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-grow">
                    <GoogleMap
                        mapContainerStyle={{ height: '100%', width: '100%' }} // Full size map
                        center={{ lat: 37.7749, lng: -122.4194 }}
                        zoom={10}
                    >
                        {stores.map(store => (
                            <Marker 
                                key={store.id} 
                                position={store.position} 
                                onClick={() => handleStoreClick(store)} 
                            />
                        ))}
                        {selectedStore && (
                            <InfoWindow
                                position={selectedStore.position}
                                onCloseClick={() => setSelectedStore(null)}
                            >
                                <div>{selectedStore.name}</div>
                            </InfoWindow>
                        )}
                    </GoogleMap>
                </div>
            </div>
        </LoadScript>
    );
};

export default StoreMap;
