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
            <div className="service-search-text">
                <span>Discover and book your fashion near you!</span>
            </div>
            <ServiceSearch />
            <Amenities />
            <HomeCard />
            <PhotoGrid />
            <Footer />
        </motion.div>
        </div>
    )
}

export default Home;