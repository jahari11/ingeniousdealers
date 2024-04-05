import React, {useRef, useEffect, useState} from "react";
import * as mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibG9uZWx5YmFja3VwMSIsImEiOiJjbG9rYzc0bWwxNnV1MnJwcTZlMGxlcmtvIn0.4tBkAmV_e1yvokcZvSmS6w'

export default function Map () {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng,setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(()=> {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng,lat],
            zoom: zoom
        });

        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div ref={mapContainer} className="map-container"></div>
    )

}