import React from 'react'
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css"
import Mark from "./Mark"
import { useQuery } from 'react-query';
import axios from 'axios';

function Map() {

    const { data: countriesData } = useQuery(
        "countriesData",
        async () => {
          const response = await axios.get(
            "https://disease.sh/v3/covid-19/countries"
          );
          return response.data;
        }
      );
  return (
        <MapContainer
          bounds={[
            [-60, -180],
            [85, 180],
          ]}
          zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <Mark countriesData={countriesData} />
        </MapContainer>
  )
}

export default Map