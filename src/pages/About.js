import React from 'react'
import Navbar from '../Components/Home Components/Navbar'
import { motion } from 'framer-motion'
import AboutUs from '../Components/Home Components/AboutUs'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.8}}
        >
        <Navbar />
        <AboutUs />
        <Footer />
        </motion.div>
    </div>
  )
}

export default About