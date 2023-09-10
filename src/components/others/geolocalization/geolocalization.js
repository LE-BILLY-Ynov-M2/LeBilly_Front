import React, { useState, useEffect, useMemo } from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import styles from "./geolocalization.module.scss"

export default function Index() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDbr6FgqPsctO5kXmIFoYL7X7TuaXAGX_o",
    })
    if (!isLoaded) return <div>Loading...</div>
    return <Map />
}
function Map() {
    const center = { lat: 48.561366, lng: -3.148352 }
    return (
        <GoogleMap zoom={15} center={center} mapContainerClassName={styles.mapcontainer}>
            {center && <Marker position={center} />}
        </GoogleMap>
    )
}
