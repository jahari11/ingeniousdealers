import React from 'react';
import storeData from './storeData';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const StoreItem = () => {
    const { storeId } = useParams();
    const store = storeData.find(store => store.id === parseInt(storeId));

    if (!store) {
        return <div>Store not found</div>;
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
            <div className='section'>
                <div className='flex justify-center flex-col items-center my-8 p-4'>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        style={{ width: '100%', maxWidth: '600px' }} // Set max width for mobile compatibility
                    >
                        {images.map((imgSrc, index) => (
                            <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    className='obj'
                                    src={imgSrc}
                                    alt={`Store ${index + 1}`}
                                    style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} // Maintain original size
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <h3 className='text-3xl mt-3 font-bold uppercase'>{store.storeName}</h3>
                    <h3 className='text-2xl font-bold uppercase text-center'>{store.storeLocation}</h3>
                    <h4 className='font-normal text-lg mt-1 text-justify'>{store.storeDescription}</h4>
                </div>
            </div>
        </motion.div>
    );
}

export default StoreItem;
