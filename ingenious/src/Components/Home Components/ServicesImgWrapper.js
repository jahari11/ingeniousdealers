import React from 'react'
import truckerHat from '../../img/trucker.jpg'
import bowlingShirt from '../../img/bowling shirt.jpeg'
import trackPants from '../../img/trackpants.jpeg'
import igJacket from '../../img/ingenious jacket for app.png'

const ServicesImgWrapper = () => {
    const services = [
        {id: 1, servicesImg: `${truckerHat}`, servicesTxt: 'Ingenious Trucker Hat'},
        {id: 2, servicesImg: `${bowlingShirt}`, servicesTxt: 'Ingenious Bowling Shirt'},
        {id: 3, servicesImg: `${trackPants}`, servicesTxt: 'Ingenious Track Pants'},
        {id: 4, servicesImg: `${igJacket}`, servicesTxt: 'Ingenious Work Jacket'},

    ]
  return (
    <>
    {services.map(service => (
         <div class="service-img">
         <img src = {service.servicesImg}/>
         <span className="service--description">{service.servicesTxt}</span>
 </div>
    ))}
    </>
  )
}

export default ServicesImgWrapper

