import React from 'react';
import { useParams } from 'react-router-dom';
import topPicks from '../Components/Data/topPicks';
import { motion } from 'framer-motion';
import Navbar from '../Components/Home Components/Navbar';
import Footer from '../Components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // Correctly import Navigation and Pagination
import 'swiper/swiper-bundle.css';

const TopPicksId = () => {
    const { id } = useParams();
    const topPick = topPicks.find((item) => item.id === parseInt(id));

    if (!topPick) {
        return <p>Not found</p>;
    }

    const images = [
        "https://readymadeui.com/images/product1.webp",
        "https://readymadeui.com/images/product6.webp",
        "https://readymadeui.com/images/product7.webp",
        "https://readymadeui.com/images/product3.webp",
        // Add more image URLs as needed
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Navbar />
            <div className='section'>
                <div className='flex justify-center flex-col items-center my-8 p-4'>
                    <Swiper
                        modules={[Navigation, Pagination]} // Include both Navigation and Pagination
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }} // Clickable pagination
                        navigation // Enable navigation arrows
                        loop={true}
                        style={{ width: '100%', maxWidth: '600px' }} 
                    >
                        {images.map((imgSrc, index) => (
                            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    className='obj'
                                    src={imgSrc}
                                    alt={`Top Pick ${index + 1}`}
                                    style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} // Maintain original size
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <h3 className='text-3xl mt-3 font-bold uppercase'>{topPick.storeName}</h3>
                    <h3 className='text-xl font-bold uppercase'>{topPick.storeLocation}</h3>
                    <h4 className='font-normal text-lg'>{topPick.storeDescription}</h4>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default TopPicksId;
