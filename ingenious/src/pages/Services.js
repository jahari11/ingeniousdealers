import React from "react";
import ServicesGroup from "../Components/Services Components/ServicesGroup";
import Footer from "../Components/Footer";
import ServicesDescription from "../Components/Services Components/ServicesDescription";
import ServiceAmenities from "../Components/Services Components/ServicesAmenities";
import Navbar from "../Components/Home Components/Navbar";
import { motion } from 'framer-motion'
import ServiceCard from "../Components/Services Components/ServiceCard";



const About = () => {
    return (
        <div>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.8}}>
        <Navbar />
        <ServicesGroup />
        <ServicesDescription/>
        <ServiceAmenities />
        <ServiceCard />
        <Footer />
        </motion.div>
        </div>
    )
}

export default About;