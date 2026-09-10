import React from "react";
import photogridImages from "./photoGridData";

export default function PhotoGrid() {
    return (
        <>
            {/* Full Screen Container */}
            <div className="h-screen">
                
                {/* Header Section */}
                <div className="photogrid--headertext mb-8 text-center">
                    <span className="block text-2xl font-bold uppercase text-black sm:text-4xl lg:text-5xl">
                        What's new on Ingenious
                    </span>
                </div>
                
                {/* Grid Layout */}
                <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-4 gap-4 h-5/6 w-4/5 mx-auto">
                    
                    {/* Grid Item 01 */}
                    <div className="relative bg-indigo-100 row-span-1 md:row-span-2 rounded-lg overflow-hidden shadow-lg group">
                        <img
                            src={photogridImages[0].gridImg}
                            alt={`Image ${photogridImages[0].id}`}
                            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:blur-lg" // Blurs on hover
                        />
                        {/* Full image overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <img
                                src={photogridImages[0].gridImg}
                                alt={`Image ${photogridImages[0].id}`}
                                className="object-cover max-w-full max-h-full" // Full image display
                            />
                        </div>
                    </div>

                    {/* Repeat the above structure for the other images */}

                    {/* Grid Item 02 */}
                    <div className="relative bg-red-100 col-span-1 md:col-span-2 rounded-lg overflow-hidden shadow-lg group">
                        <img
                            src={photogridImages[1].gridImg}
                            alt={`Image ${photogridImages[1].id}`}
                            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:blur-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <img
                                src={photogridImages[1].gridImg}
                                alt={`Image ${photogridImages[1].id}`}
                                className="object-cover max-w-full max-h-full"
                            />
                        </div>
                    </div>

                    {/* Grid Item 03 */}
                    <div className="relative bg-purple-100 rounded-lg overflow-hidden shadow-lg group">
                        <img
                            src={photogridImages[2].gridImg}
                            alt={`Image ${photogridImages[2].id}`}
                            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:blur-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <img
                                src={photogridImages[2].gridImg}
                                alt={`Image ${photogridImages[2].id}`}
                                className="object-cover max-w-full max-h-full"
                            />
                        </div>
                    </div>

                    {/* Grid Item 04 */}
                    <div className="relative bg-violet-100 row-span-1 md:row-span-2 rounded-lg overflow-hidden shadow-lg group">
                        <img
                            src={photogridImages[3].gridImg}
                            alt={`Image ${photogridImages[3].id}`}
                            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:blur-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <img
                                src={photogridImages[3].gridImg}
                                alt={`Image ${photogridImages[3].id}`}
                                className="object-cover max-w-full max-h-full"
                            />
                        </div>
                    </div>

                    {/* Grid Item 05 */}
                    <div className="relative bg-sky-100 row-span-1 md:row-span-2 col-span-1 md:col-span-2 rounded-lg overflow-hidden shadow-lg group">
                        <img
                            src={photogridImages[4].gridImg}
                            alt={`Image ${photogridImages[4].id}`}
                            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:blur-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <img
                                src={photogridImages[4].gridImg}
                                alt={`Image ${photogridImages[4].id}`}
                                className="object-cover max-w-full max-h-full"
                            />
                        </div>
                    </div>

                    {/* Grid Item 06 */}
                    <div className="relative bg-emerald-100 rounded-lg overflow-hidden shadow-lg group">
                        <img
                            src={photogridImages[5].gridImg}
                            alt={`Image ${photogridImages[5].id}`}
                            className="object-cover w-full h-full transition duration-300 ease-in-out group-hover:blur-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                            <img
                                src={photogridImages[5].gridImg}
                                alt={`Image ${photogridImages[5].id}`}
                                className="object-cover max-w-full max-h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
