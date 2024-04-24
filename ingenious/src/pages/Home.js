import Navbar from "../Components/Home Components/Navbar"
import Header from "../Components/Home Components/Header"
import DiscoverImage from "../Components/Home Components/DiscoverImage"
import ServiceSearch from "../Components/Home Components/ServiceSearch"
import AboutUs from "../Components/Home Components/AboutUs"
import Footer from "../Components/Footer"
import ServiceImgWrapper from "../Components/Home Components/ServicesImgWrapper"
import Amenities from "../Components/Home Components/Amenities"
import data from "../servicedata"
import PhotoGrid from "../Components/Home Components/PhotoGrid"

export default function Home () {
    const services = data.map(item => {
        return (
            <ServiceImgWrapper
            key = {item.id}
            img = {item.servicePhoto}
            description = {item.description} />
        )
    })
    return (
        <>

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
        </>
    )
}