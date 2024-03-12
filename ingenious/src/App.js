


import React from "react"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Services from "./pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <div className="container">
            <BrowserRouter>
            <Routes>
                <Route index element = {<Home />} />
                <Route path="/home" element = {<Home />} />
                <Route path="/shop" element = {<Shop />} />
                <Route path="/services" element = {<Services />} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}