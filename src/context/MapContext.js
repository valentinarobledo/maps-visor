import React, { createContext, useState, useEffect } from 'react';
import firestore from '../firebase';
const MapContext = createContext();

export default MapContext;


export function MapProvider({ children }) {
    const [points, setPoints] = useState([]);
    const [name, setName] = useState('');
  
    useEffect(() => {
      fetchPoints();
    }, []);
  
    const fetchPoints = async () => {
      try {
        const pointsCollection = await firestore.collection('points').get();
        const pointsArray = pointsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPoints(pointsArray);
      } catch (error) {
        console.error(error);
      }
    };

		const addPoint = async (lat, lng) => {
			//const { lat, lng } = e.latlng;
			const newPoint = {
				lat: lat,
				lng: lng,
				name: name,
			};
		
			try {
				await firestore.collection('points').add(newPoint);
				setPoints([...points, newPoint]);
				setName('');
			} catch (error) {
				console.error(error);
			}
		};

		const deletePoint = async (point) => {
			try {
				await firestore.collection('points').doc(point.id).delete();
				setPoints(points.filter((p) => p.id !== point.id));
			} catch (error) {
				console.error(error);
			}
		};
		
  
  
    const contextValue = {
      points,
			setPoints,
      name,
      fetchPoints,
      addPoint,
			deletePoint
    
    };
  
    return (
      <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
    );
  }
  