import React from "react";
import appointmentIMGOne from "../../img/packing.png"
import appointmentIMGTwo from "../../img/waitingr.png"

export default function Appointment() {
    return (
        <div className="appointments">
            <div className="appointment--wrapper--one">
                <div className="appointment--wrapper--text--one">
                   <h1>Appointment is done better with Name</h1>
                   <p>
                   Looking for your next service provide to hire like barber, hair stylist, fashion designer......?
                   Name platform is where where you get that proffessional hire from, No more phone tag. Find/Book anytime, from anywhere 24/7 Discover top business in your area and hire them instantly with Name.
                   </p>
                </div>
                   <div className="appointment--wrapper-img">
                    <img src={appointmentIMGOne} alt="" />
                   </div>
            </div>
            <div className="appointment--wrapper--two">
                <div className="appointment--wrapper--text--two">
                   <h1>Something come up? We've got you covered</h1>
                   <p>
                   A free online hire/booking webapp, and manage your appointment from anywhere. Reschedule or canceal without picking up the phone call. And because we know life is busy we’ll send you reminder. you will never forget oe miss out your hire’s or appointment.
                   </p>
                </div>
                   <div className="appointment--wrapper-img">
                    <img src={appointmentIMGTwo} alt="" />
                </div>
            </div>
        </div>
    )
}