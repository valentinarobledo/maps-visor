import React, { createContext, useState, useEffect } from 'react';
import firestore from '../firebase';
const MapContext = createContext();

export default MapContext;


export function MapProvider({ children }) {
    const [points, setPoints] = useState([]);
    const [name, setName] = useState('');
    const [position, setPosition] = useState([4.6097, -74.0817]);
  
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
        console.log('from firestore', pointsArray)
        setPoints(pointsArray);
      } catch (error) {
        console.error(error);
      }
    };

    const addPoint = async (e) => {
      try {
        // Your addPoint logic here
      } catch (error) {
        console.error(error);
      }
    };
  
  
    const contextValue = {
      points,
			setPoints,
      name,
      position,
      fetchPoints,
      addPoint,
    
    };
  
    return (
      <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
    );
  }
  