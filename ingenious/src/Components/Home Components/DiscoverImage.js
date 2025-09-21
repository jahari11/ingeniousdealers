import React from "react";
import discoimg from "../../img/discover.png"
import igMovie from '../../img/IngeniousMovie.mp4'


export default function DiscoverImage (){
    return (
        <div className='relative w-full h-[50vh] min-h-[400px] max-h-[600px] sm:h-[60vh] lg:h-[600px]'>
           <video playsInline autoPlay loop muted src={igMovie} className='w-full h-full object-cover' />
           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
           <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-4 px-4">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase leading-tight">
                Join our community of fashion enthusiasts
            </h1>
            <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-4xl">
                Discover exclusive brands and services in your area.
            </h2>
          </div>
        </div>
    )
}