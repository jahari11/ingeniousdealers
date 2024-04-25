import Navbar from "../Components/Home Components/Navbar"
import DiscoverImage from "../Components/Home Components/DiscoverImage"
import ServiceSearch from "../Components/Home Components/ServiceSearch"
import AboutUs from "../Components/Home Components/AboutUs"
import ServiceImgWrapper from "../Components/Home Components/ServicesImgWrapper"
import Amenities from "../Components/Home Components/Amenities"
import data from "../servicedata"
import PhotoGrid from "../Components/Home Components/PhotoGrid"
import { motion } from 'framer-motion'
import Footer from "../Components/Footer"

const Home = () => {
    const services = data.map(item => {
        return (
            <ServiceImgWrapper
            key = {item.id}
            img = {item.servicePhoto}
            description = {item.description} />
        )
    })
    return (
        <div className="container">
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.8}}
        >
            <Navbar />
            <DiscoverImage />
            <div className="service-search-text">
                <span>Discover and book your fashion near you!</span>
            </div>
            <ServiceSearch />
            <AboutUs />
            <Amenities />
            <div className="services">
            {services}
            </div>
            <PhotoGrid />
            <Footer />
        </motion.div>
        </div>
    )
}

export default Home;