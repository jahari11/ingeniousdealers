import React from "react";
import discoimg from "../../img/discover.png"
import igMovie from '../../img/IngeniousMovie.mp4'


export default function DiscoverImage (){
    return (
        <div className='relative w-full h-[600px] '>
           <video playsInline autoPlay loop muted src={igMovie} className='w-full h-full object-cover' />
           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
           <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-2">
            <h1 className="text-white text-7xl font-extrabold uppercase">Join our community of fashion enthusiasts</h1>
    <h1 className="text-white text-5xl font-semibold">Discover exclusive brands and services in your area.</h1>
  </div>
        </div>
    )
}