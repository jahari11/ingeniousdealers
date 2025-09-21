import Navbar from "../Components/Home Components/Navbar"
import DiscoverImage from "../Components/Home Components/DiscoverImage"
import ServiceSearch from "../Components/Home Components/ServiceSearch"
import Amenities from "../Components/Home Components/Amenities"
import PhotoGrid from "../Components/Home Components/PhotoGrid"
import { motion } from 'framer-motion'
import Footer from "../Components/Footer"
import HomeCard from "../Components/Home Components/HomeCard"

const Home = () => {
    
    return (
        <div className="">
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        transition={{duration: 0.8}}
        >
            <Navbar />
            <DiscoverImage />
            <ServiceSearch />
            <div className="service-search-text px-4 py-8">
                <span className="text-base sm:text-lg md:text-xl font-bold text-center text-gray-700 max-w-4xl mx-auto block leading-relaxed">
                    Ingenious Dealers stands as a vibrant fashion platform and a creative marketplace, pioneering innovative approaches to showcase businesses and provide essential services within our dynamic network.
                </span>
            </div>
            <Amenities />
            <PhotoGrid />
            <Footer />
        </motion.div>
        </div>
    )
}

export default Home;