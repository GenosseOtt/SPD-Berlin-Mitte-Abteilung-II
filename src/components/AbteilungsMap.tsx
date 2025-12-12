/* eslint-disable import/no-unresolved */
import React, { useEffect } from "react";
import { GeoJSON, MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import {
  abteilungsgebiete,
  centerOfAbteilungsgebiet,
} from "./abteilungsgebiete";

function style(primaryAbteilung: boolean, highlight: boolean) {
  return {
    fillColor: primaryAbteilung ? "#E3000F" : "#D8949C",
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: highlight ? 0.7 : 0.5,
  };

}
export default function AbteilungsMap() {
  return (
    <MapContainer style={{ height: "400px" }} center={[52.52, 13.39]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {abteilungsgebiete.map((abteilung) => {
        const name = abteilung.properties.name;
        const isAbteilung2 = name === "Abteilung 2";
        return (
          <GeoJSON
            style={style(isAbteilung2, false)}
            eventHandlers={{
              mouseover: (e) => {
                e.target.setStyle(style(isAbteilung2, true));
              },
              mouseout: (e) => {
                e.target.setStyle(style(isAbteilung2, false));
              },
              click: () => {
                alert(name);
              }
            }}
            data={abteilung}
          ></GeoJSON>
        );
      })}
      {abteilungsgebiete.map((abteilung) => (
        <Tooltip 
          key={abteilung.properties.name}
          position={[
            centerOfAbteilungsgebiet(abteilung).y,
            centerOfAbteilungsgebiet(abteilung).x,
          ]}
        >
          {abteilung.properties.name}
        </Tooltip>
      ))}
    </MapContainer>
  );
}
