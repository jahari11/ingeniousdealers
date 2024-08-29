import React from 'react'
import { useParams } from 'react-router-dom'
import ServicesData from '../Components/Services Components/servicesData';
import Navbar from '../Components/Home Components/Navbar';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';

const ServiceId = () => {
    const {id} = useParams();
    const service = ServicesData.find((service) => service.id === parseInt(id));

    if (!service) {
        return <p>Store not found</p>
    }
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.8}}
    >
        <Navbar />
        <div className='section'>
        <div className='flex justify-center flex-col items-center my-8 p-4'>
        <img className='h-80 px-6' src={service.dealerImg} />
        <h3 className='text-3xl mt-3 font-bold uppercase'>{service.dealerName}</h3>
        <h3 className='text-2xl font-bold uppercase'>{service.dealerCity}</h3>
        <h4 className='font-semibold text-xl'>{service.dealerType}</h4>
        <h4 className='text-xl text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
        </div>
        </div>
        <Footer />
    </motion.div>
  )
}

export default ServiceId