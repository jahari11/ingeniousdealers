import serviceImage from '../../img/SERVICEBG.jpg'
import IngeniousServices from '../../img/IngeniousServices.mp4'



export default function ServicesGroup (){
    return (
        <>
        <div className='relative w-full h-[70vh] min-h-[400px] max-h-[600px]'>
           <video 
               playsInline 
               autoPlay 
               loop 
               muted 
               src={IngeniousServices} 
               className='w-full h-full object-cover' 
           />
           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
           <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-4 px-4">
               <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
                   Discover exclusive services in your area
               </h1>
               <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-4xl">
                   Hire a professional service provider near you.
               </h2>
           </div>
        </div>
        </>
    )
}