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
        <div className='store-details-container'>
            <h2>{store.storeName}</h2>
            <h4 className='store-location'>{store.storeLocation}</h4>
            <img src={store.storeImage} />
            <p className='store-description'>{store.storeDescription}</p>
        </div>
    </div>
  )
}

export default StoreItem