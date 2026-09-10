import React from "react";
import StoreGrid from "../Components/Shop Components/StoreGrid";

import Footer from "../Components/Footer"
import Navbar from "../Components/Home Components/Navbar";
import { motion } from 'framer-motion'
import StoreMap from "../Components/Shop Components/StoreMap";

const Shop = () => {
    return (
        <div>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.8}}
        >
        <Navbar />
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold uppercase text-black text-center px-4 py-8">Shop With Your Local Dealers</h2>
        <StoreMap />
        <StoreGrid />
        <Footer />
        </motion.div>
        </div>
    )
}

export default Shop;