import React from 'react'
import storeData from './storeData';
import { useParams } from 'react-router-dom'
import GridCarousel from 'react-grid-carousel'

const StoreItem = () => {
    const {storeId} = useParams();
    const store = storeData.find(store => store.id === parseInt(storeId))

    if (!store) {
        return <div>Store not found</div>
    }

    const images = [
      "https://readymadeui.com/images/product1.webp",
      "https://readymadeui.com/images/product6.webp",
      "https://readymadeui.com/images/product7.webp",
      "https://readymadeui.com/images/product3.webp",
      // Add more image URLs as needed
  ];
  return (
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
                    <h3 className='text-3xl mt-3 font-bold uppercase'>{store.storeName}</h3>
                    <h3 className='text-2xl font-bold uppercase text-center'>{store.storeLocation}</h3>
                    <h4 className='font-normal text-lg mt-1 text-justify'>{store.storeDescription}</h4>
                </div>
    </div>
  )
}

export default StoreItem