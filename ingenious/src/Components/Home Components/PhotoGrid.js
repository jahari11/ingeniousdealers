import React from "react"
import photogridImages from "./photoGridData"

export default function PhotoGrid () {
    return (
        <>
        <div className="photogrid--headertext">
            <span className="text-xl font-bold uppercase text-black text-center sm:text-7xl">What's new on ingenious</span>
        </div>
            <div className="photogrid--image">
                {photogridImages.map(images => (
                    <div className="image--item">
                        <img src={images.gridImg} alt="" className="grid--img"/>
                    </div>
                ))}
            </div>
        </>
    )
}