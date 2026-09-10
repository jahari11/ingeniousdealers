import React from "react";

export default function LocalDealerGrid () {
    return (
        <>
        <div className="localdealer--wrapper">
            <div className="localdealer--grid">
                <img src="https://images.unsplash.com/photo-1448317846460-907988886b33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="localdealer--overlay">
                    <h1>New York</h1>
                </div>
            </div>
            <div className="localdealer--grid">
                <img src="https://images.unsplash.com/photo-1545108629-89e675f81d96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="localdealer--overlay">
                    <h1>Los Angeles</h1>
                </div>
            </div>
        </div>
        </>
    )
}