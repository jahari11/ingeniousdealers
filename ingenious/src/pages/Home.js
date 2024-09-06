import Navbar from "../Components/Home Components/Navbar"
import DiscoverImage from "../Components/Home Components/DiscoverImage"
import ServiceSearch from "../Components/Home Components/ServiceSearch"
import Amenities from "../Components/Home Components/Amenities"
import PhotoGrid from "../Components/Home Components/PhotoGrid"
import { motion } from 'framer-motion'
import Footer from "../Components/Footer"
import HomeCard from "../Components/Home Components/HomeCard"
import ShopCard from "../Components/Shop Components/ShopCard"

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
            <div className="service-search-text">
                <span className="text-[1.1rem] font-bold text-center">Ingenious Dealers stands as a vibrant fashion platform and a creative marketplace, pioneering innovative approaches to showcase businesses and provide essential services within our dynamic network.</span>
            </div>
            <Amenities />
            <ShopCard />
            <PhotoGrid />
            <Footer />
        </motion.div>
        </div>
    )
}

export default Home;