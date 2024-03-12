import React from "react";
import Navbar from "../Components/Home Components/Navbar";
import ServicesGroup from "../Components/Services Components/ServicesGroup";
import Footer from "../Components/Footer";
import ServicesDescription from "../Components/Services Components/ServicesDescription";
import ServicesList from "../Components/Services Components/ServicesList";
import ServiceAmenities from "../Components/Services Components/ServicesAmenities";




export default function Services () {
    return (
        <>
        <Navbar />
        <ServicesGroup />
        <ServicesDescription/>
        <ServiceAmenities />
        <ServicesList />
        <Footer />
        </>
    )
}