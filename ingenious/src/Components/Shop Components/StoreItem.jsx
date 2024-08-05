import React from 'react'
import storeData from './storeData';
import { useParams } from 'react-router-dom'

const StoreItem = () => {
    const {storeId} = useParams();
    const store = storeData.find(store => store.id === parseInt(storeId))

    if (!store) {
        return <div>Store not found</div>
    }
  return (
    <div className='section'>
        <div className='flex justify-center flex-col items-center my-8'>
            <img className='h-80 px-6' src={store.storeImage} />
            <h2 className='text-3xl m-3'>{store.storeName}</h2>
            <h4 className='text-xl'>{store.storeLocation}</h4>
            <p className='text-justify mt-3 px-6'>{store.storeDescription}</p>
        </div>
    </div>
  )
}

export default StoreItem