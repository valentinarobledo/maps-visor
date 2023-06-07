import React from 'react';
import { useMapEvents } from 'react-leaflet';

const MapEventHandler = ({onMapClick}) => {
    useMapEvents({
        click(e) {
        onMapClick(e.latlng); // Pass the latlng object to the callback function
        },
    });

  return (
    null
  )
}

export default MapEventHandler

  