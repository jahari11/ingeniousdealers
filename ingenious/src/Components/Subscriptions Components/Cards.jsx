import React from 'react'
import CardContent from './cardDetails'

const Cards = () => {
  return (
    <div className='cards'>
    {CardContent.map(card => (
        <div className='card-container'>
        <div className="card-header">
            <p>{card.cardtier}</p>
            <div className="card-price">
                <span>$</span>{card.cardprice}
                <span>/mo</span>
            </div>
        </div>
    <div>
        <ul className='lists'>
            {Object.values(card.cardperks).map((perk)=><li className='list'>
                <span><i class="fa-solid fa-star"></i></span>
                <p>{perk}</p>
            </li>)}
        </ul>
    </div>
    <div className="card-btn">
        <button>Buy Now</button>
    </div>
    </div>
    ))}
    
    </div>
  )
}

export default Cards