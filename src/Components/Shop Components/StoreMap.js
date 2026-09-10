import React, { useState, useMemo, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import storeData from './storeData';

const StoreMap = () => {
    const [selectedStore, setSelectedStore] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [mapCenter, setMapCenter] = useState({ lat: 42.6526, lng: -73.7562 }); // Albany, NY coordinates
    const [mapZoom, setMapZoom] = useState(12);

    // Generate realistic coordinates for stores around Albany, NY
    const generateStoreCoordinates = (index) => {
        const baseLat = 42.6526;
        const baseLng = -73.7562;
        const latVariation = (Math.random() - 0.5) * 0.1; // ±0.05 degrees
        const lngVariation = (Math.random() - 0.5) * 0.1; // ±0.05 degrees
        return {
            lat: baseLat + latVariation,
            lng: baseLng + lngVariation
        };
    };

    // Create stores with coordinates
    const stores = useMemo(() => 
        storeData.map((store, index) => ({
            ...store,
            position: generateStoreCoordinates(index)
        })), []
    );

    // Filter stores based on search term
    const filteredStores = useMemo(() => 
        stores.filter(store => 
            store.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            store.storeLocation.toLowerCase().includes(searchTerm.toLowerCase())
        ), [stores, searchTerm]
    );

    const handleStoreClick = (store) => {
        setSelectedStore(store);
        setMapCenter(store.position);
        setMapZoom(15);
    };

    const handleMarkerClick = (store) => {
        setSelectedStore(store);
    };

    const mapOptions = useMemo(() => ({
        disableDefaultUI: false,
        clickableIcons: false,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ]
    }), []);

    // Create custom marker icon safely
    const createMarkerIcon = useCallback(() => {
        if (!window.google || !window.google.maps) {
            return null;
        }
        
        return {
            url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#000000" stroke="white" stroke-width="4"/>
                    <path d="M20 8C15.6 8 12 11.6 12 16C12 22 20 32 20 32C20 32 28 22 28 16C28 11.6 24.4 8 20 8Z" fill="white"/>
                    <circle cx="20" cy="16" r="4" fill="#000000"/>
                </svg>
            `),
            scaledSize: new window.google.maps.Size(40, 40),
            anchor: new window.google.maps.Point(20, 20)
        };
    }, []);

    return (
        <LoadScript 
            googleMapsApiKey="AIzaSyBfZb6n65Rgk3zHzOKM1WwJFBKmWSabP_I"
        >
            <div className="map-sidebar">
                <div className="map-header">
                    <h2 className="map-title">Store Locations</h2>
                    <p className="map-subtitle">Find stores near you</p>
                </div>
                
                <div className="map-search-container">
                    <i className="fa-solid fa-magnifying-glass map-search-icon"></i>
                    <input
                        type="text"
                        placeholder="Search stores..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="map-search-input"
                    />
                </div>

                <div className="map-stores-list">
                    <div className="stores-count">
                        {filteredStores.length} stores found
                    </div>
                    {filteredStores.map(store => (
                        <div 
                            key={store.id} 
                            className={`store-list-item ${selectedStore?.id === store.id ? 'active' : ''}`}
                            onClick={() => handleStoreClick(store)}
                        >
                            <div className="store-item-image">
                                <img src={store.storeImage} alt={store.storeName} />
                            </div>
                            <div className="store-item-content">
                                <h3 className="store-item-name">{store.storeName}</h3>
                                <p className="store-item-location">
                                    <i className="fa-solid fa-location-dot"></i>
                                    {store.storeLocation}
                                </p>
                                <div className="store-item-actions">
                                    <Link 
                                        to={`/store/${store.id}`} 
                                        className="view-store-btn"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="map-wrapper">
                <GoogleMap
                    mapContainerStyle={{ height: '100%', width: '100%' }}
                    center={mapCenter}
                    zoom={mapZoom}
                    options={mapOptions}
                >
                        {filteredStores.map(store => (
                            <Marker 
                                key={store.id} 
                                position={store.position} 
                                onClick={() => handleMarkerClick(store)}
                                icon={createMarkerIcon()}
                            />
                        ))}
                    {selectedStore && (
                        <InfoWindow
                            position={selectedStore.position}
                            onCloseClick={() => setSelectedStore(null)}
                            options={{
                                pixelOffset: window.google?.maps ? new window.google.maps.Size(0, -10) : undefined
                            }}
                        >
                            <div className="info-window">
                                <div className="info-window-image">
                                    <img src={selectedStore.storeImage} alt={selectedStore.storeName} />
                                </div>
                                <div className="info-window-content">
                                    <h3 className="info-window-title">{selectedStore.storeName}</h3>
                                    <p className="info-window-location">
                                        <i className="fa-solid fa-location-dot"></i>
                                        {selectedStore.storeLocation}
                                    </p>
                                    <Link 
                                        to={`/store/${selectedStore.id}`} 
                                        className="info-window-btn"
                                    >
                                        View Store
                                    </Link>
                                </div>
                            </div>
                        </InfoWindow>
                    )}
                </GoogleMap>
            </div>
        </LoadScript>
    );
};

export default StoreMap;
