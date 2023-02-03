import { GoogleMap, Marker, useLoadScript, InfoWindow, Data } from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";
import usePlacesAutocomplete, { getGeocode,getLatLng } from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from "@reach/combobox";
import mapStyles from "./mapStyles";
import "@reach/combobox/styles.css"
import { formatRelative } from "date-fns";

const MAP_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const libraries = ["places"];
const mapContainerStyle = { height: "80vh", width: "100vw" };
const center = { lat: 39.90347617567012, lng:116.40889549242631 };
const options = {styles:mapStyles, disableDefaultUI: true};

const Map = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: MAP_API_KEY,
        libraries,
    });

    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);

    const onMapClick = React.useCallback((event) => {
        setMarkers((current) => [
            ...current, 
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(18);
    }, []);
    <locate panTo={panTo} />

    if (loadError) return "Error loading maps";
    if(!isLoaded) return "Loading";

    
    return (
    <div>
        <h2>Map<span role="img" aria-label="rainbow">🌈</span></h2>
        <Search panTo={panTo}/>
        <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={10} 
            center={center} 
            options={options} 
            onClick={onMapClick}
            onLoad={onMapLoad}
        >
            {markers.map(marker => (
                <Marker 
                    key={marker.time.toISOString()}
                    position={{ lat:marker.lat, lng:marker.lng }}
                    // icon={{
                    //     url:"/bear.svg",
                    //     scaledSize: new window.google.maps.Size(30,30),
                    //     origin: new window.google.maps.Point(0,0),
                    //     anchor: new window.google.maps.Point(15,15),
                    // }}
                    onClick={() => {
                        setSelected(marker);
                    }}
                />
            ))}
        
        {selected ? (
            <InfoWindow 
                position={{ lat: selected.lat, lng: selected.lng }} 
                onCloseClick={() => {
                    setSelected(null);
                }}
            >
                <div>
                    <h3 id="infoWindow">LGBT Site</h3>
                    <p id="infoWindow">Added {formatRelative(selected.time, new Date())}</p>
                </div>
            </InfoWindow>): null}
        </GoogleMap>
    </div>
    )
};

function locate({panTo}) {
    return (        
    <button className="locate" onClick={() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                panTo({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
                // console.log(position);
            }, 
            () => null
        )
    }}>
        Search
    </button>)
}

function Search ({ panTo }) {
    const { 
        ready, 
        value, 
        suggestions: { status, data }, 
        setValue, 
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 39.90347, lng: () => 116.40889 },
            radius: 200 * 1000
        },
    });

    return (
        <div className="search">
            <Combobox onSelect={async (address) => {
                setValue(address, false);
                clearSuggestions()

                try {
                    const results = await getGeocode({ address });
                    const { lat, lng } = await getLatLng(results[0]);
                    panTo({ lat, lng });
                    // console.log(results[0]);
                    // console.log(lat, lng)
                } catch(error) {
                    console.log("error")
                }

                console.log(address);
                }}
            >
                <ComboboxInput 
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    disabled={!ready}
                    placeholder="Enter an address"
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" && data.map(({id, description}) => (
                            <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}

export default Map;
