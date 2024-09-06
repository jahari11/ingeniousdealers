import serviceImage from '../../img/SERVICEBG.jpg'
import IngeniousServices from '../../img/IngeniousServices.mp4'



export default function ServicesGroup (){


    return (
        <>
        <div className='relative mx-auto sm:w-[1280px] h-[600px] '>
           <video autoPlay loop muted src={IngeniousServices} className='w-fit h-full object-cover' />
           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
           <div className="absolute inset-0 flex items-center justify-center text-center flex-col gap-2">
           <h1 className="text-white text-7xl font-extrabold uppercase">Ingenious Dealers</h1>
    <h1 className="text-white text-5xl font-semibold">Discover and hire a professional service provider near you</h1>
  </div>
        </div>
        </>
    )
}