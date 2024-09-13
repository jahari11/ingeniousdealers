import React from "react";



const topPicks = [
    {
      id: 1,
      storeName: "Modern Pirates",
      storeLocation: "899 Central Ave Albany, NY 12206",
      storeImage: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2076&auto=format&fit=crop",
      storeSubDescription: "Local Dealer",
      storeDescription: "Aenean commodo ligula eget dolor..."

    },
    {
      id: 2,
      storeName: "Duende",
      storeLocation: "899 Central Ave Albany, NY 12206",
      storeImage: "https://i.imgur.com/HXrXsrf.jpeg",
      storeSubDescription: "Local Dealer",
      storeDescription: "Aenean commodo ligula eget dolor..."
    },
    {
      id: 3,
      storeName: "Ingenious Dealers",
      storeLocation: "899 Central Ave Albany, NY 12206",
      storeImage: "https://images.unsplash.com/photo-1542581482-851c38ee4b94?q=80&w=2070&auto=format&fit=crop",
      storeSubDescription: "Local Dealer",
      storeDescription: "Aenean commodo ligula eget dolor..."
    },
  ];
  

export default function ShopCardIcon () {
    return (
        <div className="sm:flex justify-center gap-10">
    {topPicks.map(store => (
        <div class="flex flex-col items-center max-w-md p-5 overflow-hidden bg-black rounded-lg transition-all">
        <div class="bg-cover sm">
        <img className="w-full h-full object-cover" src={store.storeImage} />
        </div>
    
        <div class="w-2/3 p-4 md:p-4">
            <h1 class="text-xl font-bold text-white text-center">{store.storeName}</h1>
            <p class="text-sm text-white text-center">{store.storeLocation}</p>
                <h1 class="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl text-center">{store.storeSubDescription}</h1>
        </div>
    </div>
    ))}
        </div>
    )
}