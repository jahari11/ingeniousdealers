import React from 'react'
import { useParams } from 'react-router-dom'
import topPicks from '../Components/Data/topPicks';
import { motion } from 'framer-motion';
import Navbar from '../Components/Home Components/Navbar';
import Footer from '../Components/Footer';
import GridCarousel from 'react-grid-carousel'

const TopPicksId = () => {
    const {id} = useParams();
    const topPick = topPicks.find((item)=> item.id === parseInt(id))

    if (!topPick) {
        return <div>Not found</div>
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
                    <GridCarousel
                        cols={1}
                        rows={1}
                        gap={10}
                        loop
                        autoplay={3000}
                        showDots
                    >
                        {images.map((imgSrc, index) => (
                            <GridCarousel.Item key={index}>
                                <img
                                    className='mx-auto object-cover rounded-md'
                                    src={imgSrc}
                                    alt={`Service ${index + 1}`}
                                />
                            </GridCarousel.Item>
                        ))}
                    </GridCarousel>
                    <h3 className='text-3xl mt-3 font-bold uppercase text-center'>{topPick.storeName}</h3>
                    <h3 className='text-2xl font-bold uppercase text-center'>{topPick.storeLocation}</h3>
                    <h4 className='font-normal text-lg mt-1 text-justify'>{topPick.storeDescription}</h4>
                </div>
            </div>
            <Footer />
        </motion.div>
    );
};

export default TopPicksId