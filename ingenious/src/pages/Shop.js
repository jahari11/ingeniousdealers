import React from "react";
import Navbar from "../Components/Home Components/Navbar";
import LocalDealerGrid from "../Components/Shop Components/LocalDealerGrid";
import ShopWrapper from "../Components/Shop Components/ShopWrapper";
import StoreGrid from "../Components/Shop Components/StoreGrid";
import Footer from "../Components/Footer"
export default function Shop () {
    return (
        <>
        <Navbar />
        <h1 className="shop--textheader">Shop With Your Local Dealers</h1>
        <LocalDealerGrid />
        <ShopWrapper />
        <StoreGrid />
        <Footer />
        </>
    )
}