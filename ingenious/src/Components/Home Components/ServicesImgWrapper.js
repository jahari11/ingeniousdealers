import React from "react"

export default function ServiceImgWrapper (props) {
    return (
        <> 
        <div class="service-img">
            <img src = {`../${props.img}`} />
            <span className="service--description">{props.description}</span>
        </div>
        </>
    )
}