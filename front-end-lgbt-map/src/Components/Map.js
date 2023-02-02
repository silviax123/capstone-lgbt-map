import React, { useEffect } from "react";


const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const Map = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
        document.head.appendChild(script);

        script.addEventListener("load", () => {
            const map = new window.google.maps.Map(document.getElementById("map"), {
                zoom: 8,
                center: { lat: 39.89999849300659, lng: 116.40963315365688 },
                mapId: "b3a9f6fe5e026ce2"
            });
        });
    }, []);

    return <div id="map" style={{ height: "400px", width: "100%" }} />;
};

export default Map;
