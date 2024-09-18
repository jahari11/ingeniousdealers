import React from "react";
import { Link } from "react-router-dom";
import topPicks from "../Data/topPicks"; // Ensure the path is correct

export default function ShopCardIcon() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
      {topPicks.map(store => (
        <Link key={store.id} to={`/local-dealers/${store.id}`}>
          <div className="flex flex-col items-center max-w-md p-5 overflow-hidden bg-black rounded-lg transition-all">
            <div className="w-full h-64">
              <img
                className="w-full h-full object-cover"
                src={store.storeImage}
                alt={store.storeName}
              />
            </div>
            <div className="w-2/3 p-4">
              <h1 className="text-xl font-bold text-white text-center">{store.storeName}</h1>
              <p className="text-sm text-white text-center">{store.storeLocation}</p>
              <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl text-center">{store.storeSubDescription}</h1>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
