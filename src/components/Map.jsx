import React, {useState, useContext, useEffect} from "react";
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapEventsHandler from './MapEventsHandler';
import MapContext from "../context/MapContext";

function Map(){

	const { points, addPoint, deletePoint } = useContext(MapContext);
  const [name, setName] = useState('');
  const [position, setPosition] = useState([4.6097, -74.0817]); 

	const handleMapClick = (latlng) => {
		const { lat, lng } = latlng;
		//console.log(`Clicked on ${lat}, ${lng}`);
		addPoint(lat, lng)
		setName('Punto nuevo')
	};

	const customIcon = new Icon({
		iconUrl: require("../img/marker-icon.png"),
		iconSize: [ 38, 38 ]
	})

    return(
    <MapContainer
			center={position}
			zoom={6}
			onClick={() => console.log('Map clicked')}
      >
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<MapEventsHandler onMapClick={handleMapClick} />
			{points.map((point) => (
				<Marker
					key={point.id}
					position={[point.lat, point.lng]}
					icon={customIcon}>
						<Popup>
				
							<div className="text-center">
								{point.name} <br />
								<span>Lat: {(point.lat).toFixed(3)} </span> <br />
								<span>Lng: {(point.lng).toFixed(3)}</span>
							</div>

							<div className="delete-icon text-center" onClick={()=>deletePoint(point)}>
								<svg className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="#dc3545" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"/></svg>
							</div>
						</Popup>
				</Marker>
        	))}
      </MapContainer>
    )
}

export default Map