import React, { useState, useEffect, useContext } from 'react'
import MapContext from '../context/MapContext';

const Table = () => {

    const { points, setPoints, fetchPoints }= useContext(MapContext);


		const deletePoint = (point) => {
			setPoints(points.filter((p) => p.id !== point.id));
		};

    useEffect(()=>{
      fetchPoints();
    },[])
    
    
  return (
    <table className='w-100 text-center p-3'>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Latitud</th>
                <th>Logitud</th>
								<th></th>
            </tr>
        </thead>
        <tbody>
        {points.map((point) => (
					<tr key={point.id}>
						<td>{point.name}</td>
						<td>{point.lat}</td>
						<td>{point.lng}</td>
						<td>
							<button className='btn btn-info m-2'>Editar</button>
							<button onClick={()=>deletePoint(point)} className='btn btn-danger m-2'>Eliminar</button>
						</td>
					</tr>
        	))}
        </tbody>
    </table>
  )
}

export default Table