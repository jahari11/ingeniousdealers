import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ServicesData from '../Components/Services Components/servicesData';
import Navbar from '../Components/Home Components/Navbar';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ServiceId = () => {
    const { id } = useParams();
    const service = ServicesData.find((service) => service.id === parseInt(id));

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-xl text-gray-600">Service not found</p>
            </div>
        );
    }

    const images = [
        service.dealerImg,
        "https://readymadeui.com/images/product1.webp",
        "https://readymadeui.com/images/product6.webp",
        "https://readymadeui.com/images/product7.webp",
    ];

    const email = "examplemail123@gmail.com";

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Navbar />
            
            {/* Hero Section with Image Gallery */}
            <section className="py-8 px-4 sm:py-12 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Image Gallery */}
                        <div className="w-full">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={10}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                pagination={{ clickable: true }}
                                navigation={true}
                                loop={true}
                                className="service-detail-swiper"
                            >
                                {images.map((imgSrc, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden bg-gray-100">
                                            <img
                                                src={imgSrc}
                                                alt={`${service.dealerName} - Image ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        {/* Service Information */}
                        <div className="w-full">
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold capitalize mb-4">
                                    {service.dealerType}
                                </span>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 capitalize">
                                    {service.dealerName}
                                </h1>
                                <div className="flex items-center gap-2 text-gray-600 mb-6">
                                    <i className="fa-solid fa-location-dot text-lg"></i>
                                    <span className="text-lg font-medium capitalize">{service.dealerCity}</span>
                                </div>
                            </div>

                            {/* Description */}
                            <div className="mb-8">
                                <h2 className="text-xl font-bold text-gray-900 mb-4">About This Service</h2>
                                <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>

                            {/* Contact Section */}
                            <div className="border-t border-gray-200 pt-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                                
                                <div className="space-y-4 mb-6">
                                    <a 
                                        href={`mailto:${email}`}
                                        className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
                                    >
                                        <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                            <i className="fa-solid fa-envelope text-white"></i>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 font-medium">Email</p>
                                            <p className="text-gray-900 font-semibold">{email}</p>
                                        </div>
                                    </a>
                                </div>

                                {/* Social Media */}
                                <div>
                                    <p className="text-sm font-semibold text-gray-700 mb-3">Follow Us</p>
                                    <div className="flex gap-4">
                                        <a 
                                            href="https://www.instagram.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-xl"
                                        >
                                            <i className="fa-brands fa-instagram text-xl"></i>
                                        </a>
                                        <a 
                                            href="https://www.x.com" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-black rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg hover:shadow-xl"
                                        >
                                            <i className="fa-brands fa-x-twitter text-xl"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Services Link */}
            <section className="py-8 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto text-center">
                    <Link 
                        to="/services"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>Back to Services</span>
                    </Link>
                </div>
            </section>

            <Footer />
        </motion.div>
    );
};

export default ServiceId;
