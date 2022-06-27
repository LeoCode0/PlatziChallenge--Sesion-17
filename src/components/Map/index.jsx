import React from 'react'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'

import "leaflet/dist/leaflet.css"

export const Map = () => {
  return (
    <MapContainer center={[47.44, 3.16]} zoom={13} className="container" >
      <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      <Marker position={[47.44, 3.16]}>
      </Marker>
    </MapContainer>
  )
}
