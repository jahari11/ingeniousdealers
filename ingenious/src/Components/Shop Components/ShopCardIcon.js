import React from "react";

const topPicks = [
  {
    id: 1,
    storeName: "Modern Pirates",
    storeLocation: "Albany, NY",
    storeImage: "https://i.imgur.com/hXg244q.png",
    storeSubDescription: "Clothing brand",
    storeDescription: "Aenean commodo ligula eget dolor...",
  },
  {
    id: 2,
    storeName: "Duende",
    storeLocation: "Albany, NY",
    storeImage: "https://i.imgur.com/HXrXsrf.jpeg",
    storeSubDescription: "Clothing brand",
    storeDescription: "Aenean commodo ligula eget dolor...",
  },
  {
    id: 3,
    storeName: "Ingenious Dealers",
    storeLocation: "Albany, NY",
    storeImage: "https://i.imgur.com/e8jXFeQ.png",
    storeSubDescription: "Clothing brand",
    storeDescription: "Aenean commodo ligula eget dolor...",
  },
];

export default function ShopCardIcon() {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
      {topPicks.map(store => (
        <div key={store.id} className="flex flex-col items-center max-w-md p-5 overflow-hidden bg-black rounded-lg transition-all">
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
      ))}
    </div>
  );
}
