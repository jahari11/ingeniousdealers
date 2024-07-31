import React from "react";
import LocalDealerGrid from "../Components/Shop Components/LocalDealerGrid";
import ShopWrapper from "../Components/Shop Components/ShopWrapper";
import StoreGrid from "../Components/Shop Components/StoreGrid";
import Footer from "../Components/Footer"
import Navbar from "../Components/Home Components/Navbar";
import { motion } from 'framer-motion'
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
        <h1 className="shop--textheader">Shop With Your Local Dealers</h1>
        <LocalDealerGrid />
        <ShopWrapper />
        <StoreGrid />
        <Footer />
        </motion.div>
        </div>
    )
}

export default Shop;