import React, { useState } from "react";
import storeData from "./storeData";
import { Link } from "react-router-dom";

export default function StoreGrid() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("name");

    // Filter and sort stores
    const filteredStores = storeData
        .filter(store => {
            const matchesSearch = store.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                store.storeLocation.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesSearch;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case "name":
                    return a.storeName.localeCompare(b.storeName);
                case "location":
                    return a.storeLocation.localeCompare(b.storeLocation);
                default:
                    return 0;
            }
        });

    return (
        <div className="stores-container">
            {/* Header Section */}
            <div className="stores-header">
                <h2 className="stores-title">Discover Local Stores</h2>
                <p className="stores-subtitle">Find amazing stores in your area</p>
            </div>

            {/* Search and Filter Section */}
            <div className="stores-controls">
                <div className="search-container">
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <input
                        type="text"
                        placeholder="Search stores..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                
                <div className="filter-container">
                    <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="filter-select"
                    >
                        <option value="name">Sort by Name</option>
                        <option value="location">Sort by Location</option>
                    </select>
                </div>
            </div>

            {/* Results Count */}
            <div className="results-info">
                <span className="results-count">{filteredStores.length} stores found</span>
            </div>

            {/* Stores Grid */}
            <div className="stores-grid">
                {filteredStores.map(store => (
                    <div key={store.id} className="store-card">
                        <Link to={`/store/${store.id}`} className="store-link">
                            <div className="store-image-container">
                                <img 
                                    src={store.storeImage} 
                                    alt={store.storeName}
                                    className="store-image"
                                />
                                <div className="store-overlay">
                                    <i className="fa-solid fa-arrow-right store-arrow"></i>
                                </div>
                            </div>
                            <div className="store-content">
                                <h3 className="store-name">{store.storeName}</h3>
                                <p className="store-location">
                                    <i className="fa-solid fa-location-dot location-icon"></i>
                                    {store.storeLocation}
                                </p>
                                <div className="store-actions">
                                    <span className="view-store">View Store</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* No Results Message */}
            {filteredStores.length === 0 && (
                <div className="no-results">
                    <i className="fa-solid fa-search no-results-icon"></i>
                    <h3>No stores found</h3>
                    <p>Try adjusting your search terms</p>
                </div>
            )}
        </div>
    );
}