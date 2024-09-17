import serviceImage from '../../img/SERVICEBG.jpg'
import IngeniousServices from '../../img/IngeniousServices.mp4'



export default function ServicesGroup (){


    return (
        <>
        <div className='relative w-full h-[600px] '>
           <video playsInline autoPlay loop muted src={IngeniousServices} className='w-full h-full object-cover' />
           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
           <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-2">
           <h1 className="text-white text-6xl font-extrabold uppercase">Discover exclusive services in your area</h1>
    <h1 className="text-white text-3xl font-semibold">Hire a professional service provider near you.</h1>
  </div>
        </div>
        </>
    )
}