import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import "./MapArea.css"

const MapArea = () => {
  const selectedRegion = useSelector((state) => state.selectedRegion);

  const { lat, lng, zoom } = selectedRegion;

  return (
    <div className="map-area" >
      <MapContainer className='map-container' center={[lat, lng]} zoom={zoom} style={{ height: '100%', width: '70%%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapArea;
