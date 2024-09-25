import React from "react";
import photogridImages from "./photoGridData";

export default function PhotoGrid() {
    return (
        <>
            <div className="photogrid--headertext mb-4">
                <span className="text-xl font-bold uppercase text-black text-center sm:text-5xl">
                    What's new on ingenious
                </span>
            </div>
            <div className="grid max-w-screen grid-cols-2 gap-2 mx-auto">
                <div className="col-span-1 row-span-2">
                    <img
                        src={photogridImages[0].gridImg}
                        alt={`Image ${photogridImages[0].id}`}
                        className="object-cover w-full h-full"
                    />
                </div>

                <div className="grid grid-cols-2 gap-2 col-span-1">
                    {photogridImages.slice(1).map((image, index) => (
                        <div key={image.id} className={index === photogridImages.length - 2 ? "col-span-2" : ""}>
                            <img
                                src={image.gridImg}
                                alt={`Image ${image.id}`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
