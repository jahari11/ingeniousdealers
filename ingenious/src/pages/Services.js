import React from "react";
import ServicesGroup from "../Components/Services Components/ServicesGroup";
import Footer from "../Components/Footer";
import ServicesDescription from "../Components/Services Components/ServicesDescription";
import ServicesList from "../Components/Services Components/ServicesList";
import ServiceAmenities from "../Components/Services Components/ServicesAmenities";
import Navbar from "../Components/Home Components/Navbar";
import { motion } from 'framer-motion'



const About = () => {
    return (
        <div className="container">
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.8}}>
        <Navbar />
        <ServicesGroup />
        <ServicesDescription/>
        <ServiceAmenities />
        <ServicesList />
        <Footer />
        </motion.div>
        </div>
    )
}

export default About;