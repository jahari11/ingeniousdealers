import React from 'react'
import { useParams } from 'react-router-dom'
import IngeniousStoreData from '../IngeniousStoreData'
import Navbar from '../Components/Home Components/Navbar'
import { motion } from 'framer-motion'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'

const IgStoreId = () => {
    const {id} = useParams()
    const product = IngeniousStoreData.find((item)=> item.id === parseInt(id));

    if (!product) {
        return <div>Product not find</div>
    }
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.8}}
    >
        <Navbar />
    <div className='mt-8 flex flex-col items-center sm:grid-cols-2 lg:grid-cols-4'>
        <img className="h-[450px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[650px]" src={product.img} />
        <h1 className='text-xl font-bold uppercase text-black sm:text-2xl'>{product.name}</h1>
        <p className='text-lg uppercase text-black sm:text-lg'>${product.price}</p>
        <p className='text-xl font-semibold uppercase text-center text-black mb-2 sm:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <Link className="inline-block rounded border border-black-600 px-12 py-3 text-sm font-medium text-black m-3 hover:bg-black hover:text-white focus:outline-none" href="#">
        Buy Now
        </Link>
    </div>
    <Footer />
    </motion.div>
  )
}

export default IgStoreId