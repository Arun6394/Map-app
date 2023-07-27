import React from 'react';
import { useSelector } from 'react-redux';
import "./RegionInfo.css"

const RegionInfo = () => {
  const selectedRegion = useSelector((state) => state.selectedRegion);

  const regionInfoData = {
    us: {
      currency: 'USD',
      speedUnit: 'mph',
      distanceUnit: 'miles',
      volumeUnit: 'gallons',
      timezone: 'America/New_York',
    },
    in: {
      currency: 'INR',
      speedUnit: 'kmph',
      distanceUnit: 'kilometers',
      volumeUnit: 'liters',
      timezone: 'Asia/Kolkata',
    },
    uk: {
      currency: 'GBP',
      speedUnit: 'mph',
      distanceUnit: 'miles',
      volumeUnit: 'liters',
      timezone: 'Europe/London',
    },
  };

  const regionData = regionInfoData[selectedRegion.region] || {};

  return (
    <div className="region-info">
      <h3>Region Info</h3>
      <p>Currency: {regionData.currency}</p>
      <p>Speed Unit: {regionData.speedUnit}</p>
      <p>Distance Unit: {regionData.distanceUnit}</p>
      <p>Volume Unit: {regionData.volumeUnit}</p>
      <p>Timezone: {regionData.timezone}</p>
    </div>
  );
};

export default RegionInfo;
