
import ServiceSearch from "../Home Components/ServiceSearch"
import ServiceBtns from "./ServiceBtns";

import ServicesComponent from '../Services Components/ServicesComponent'


export default function ServicesGroup (){


    return (
        <>
        <div className="discover-container">
            <img src="https://images.unsplash.com/photo-1524604889898-0f803deb1664?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
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