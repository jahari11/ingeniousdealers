import React from 'react'
import Cards from '../Components/Subscriptions Components/Cards'
import Navbar from '../Components/Home Components/Navbar'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'


const Subscriptions = () => {
  return (
    <div>
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.8}}
        className="container"
  >
      <Navbar />
      <Cards />
      <Footer />
      </motion.div>
      </div>
  )
}

export default Subscriptions