import React, {useState, useContext, useEffect} from "react";
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapEventsHandler from './MapEventsHandler';
import MapContext from "../context/MapContext";

function Map(){

	const { points, setPoints, fetchPoints } = useContext(MapContext);
  const [name, setName] = useState('');
  const [position, setPosition] = useState([4.6097, -74.0817]); 

	useEffect(()=>{
		fetchPoints();
	},[])

	

	const addPoint = (lat, lng) => {
		console.log('puntos', lat, lng);
    const newPoint = {
      id: Date.now().toString(),
      latitud: lat,
      longitud: lng,
      nombre: name,
    };

    setPoints([...points, newPoint]);
    setName('');
  };
	

	const handleMapClick = (latlng) => {
		const { lat, lng } = latlng;
		//console.log(`Clicked on ${lat}, ${lng}`);
		addPoint(lat, lng)
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
								<span>Lat: {point.lat} </span> <br />
								<span>Lng: {point.lng}</span>
							</div>
						</Popup>
				</Marker>
        	))}
      </MapContainer>
    )
}

export default Map