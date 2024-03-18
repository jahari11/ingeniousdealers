
import ServiceSearch from "../Home Components/ServiceSearch"
import ServiceBtns from "./ServiceBtns";
import serviceImage from '../../img/serviceImage.jpg'

import ServicesComponent from '../Services Components/ServicesComponent'


export default function ServicesGroup (){


    return (
        <>
        <div className="discover-container">
            <img src= {serviceImage} alt="" />
        </div>
        <div className="discover-overlay">
            <h1 className="services--header">Ingenious Dealer Services</h1>
            <p className="services--sub">Discover and hire a professional service provider near you</p>
            <ServiceSearch />
            <div className="overlay-btns">

            </div>
        </div>
        <div>
            
        </div>
        </>
    )
}