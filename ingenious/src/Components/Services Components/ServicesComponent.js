import React from "react";
import { Link } from "react-router-dom";


export default function ServicesComponent ({item}) {
    return (
        <div className="services-component-wrapper">
            {item.map((val) =>(
            <Link to={`/service/${val.id}`}>
            <div key ={val.id} className="service-component">
                    <img src={val.dealerImg} alt="" />
            <div className="service-name-text">
                <h3 className="service-brand-name">{val.dealerName}</h3>
                <h4 className="service-brand-type">{val.dealerType}</h4>
                <span>Lorem ipsum dolor sit amet, consectetur</span>
            </div>
            </div>
            </Link>
                ))}
        </div>
    )
}


