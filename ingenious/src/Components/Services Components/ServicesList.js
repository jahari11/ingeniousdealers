import React, { useState } from "react";
import ServiceBtns from "./ServiceBtns";
import ServicesComponent from "./ServicesComponent";
import servicesData from "./servicesData";

export default function ServicesList(){
const [item, setItems] = useState(servicesData);
const menuItems = [...new Set(servicesData.map((val)=> val.dealerType))]


const filterItems = (dealerType) => {
    const newItems = servicesData.filter((newVal)=> newVal.dealerType === dealerType)
    setItems(newItems)
}
    return (
        <>
        <ServiceBtns
            menuItems = {menuItems}
            filterItems = {filterItems}
            setItems = {setItems} />
        <ServicesComponent item = {item}/>
        </>
    )
}