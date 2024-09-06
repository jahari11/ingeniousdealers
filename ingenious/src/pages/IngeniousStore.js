import React from 'react'
import Navbar from '../Components/Home Components/Navbar'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'
import  IngeniousData from '../IngeniousStoreData.js'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const IngeniousStore = () => {

  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.8}}
    >
        <Navbar />
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold uppercase text-black sm:text-9xl">Ingenious Shop</h2>

      <p className="mt-4 max-w-md text-gray-500">
        Inspired by 80's & 90's nostalgic workwear era blended with modern styles and trends.
      </p>
    </header>

    <ul className="mt-8 grid place-items-center sm:grid-cols-2 lg:grid-cols-4">
        {IngeniousData.map((data) => (
            <li>
            <Link to={`/ingenious-store/${data.id}`} className="group block overflow-hidden">
              <img
                src={data.img}
                alt=""
                className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />
    
              <div className="relative bg-white pt-3">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {data.name}
                </h3>
    
                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>
    
                  <span className="tracking-wider text-gray-900"> ${data.price} </span>
                </p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  </div>
</section>
        <Footer />
    </motion.div>
  )
}

export default IngeniousStore