import React, { useState, useEffect, useContext } from 'react'
import MapContext from '../context/MapContext';
import ModalEdit from './ModalEdit';

const Table = () => {

  const { points, deletePoint }= useContext(MapContext);
  const [ pointReference, setPointReference ] = useState([]);
  const [ show, setShow ] = useState(false);
   
  const setEdit = (point) => {
    setPointReference(point);
    console.log('punto a editar', point);
    setShow(true);
  }

  return (
    <>
    <div className="text-center bg-gris rounded">
      <p className='color-white fw-bold mb-0 pb-1'>Coordenadas</p>
    </div>
    <div className='box-items'>
      { points.map((point)=>(
        <div className="box-item bg-white my-2" key={point.id}>
          <div className='text-end delete' onClick={()=>deletePoint(point)}>
            <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#dc3545" d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7Zm2-4h2V8H9v9Zm4 0h2V8h-2v9Z"/></svg>
          </div>
          <div className="d-flex">
            <p className='mb-0 me-1 gris'>{point.name}</p>
            <div onClick={()=>setEdit(point)}>
              <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#5D6D7E" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <span className='d-flex gris2'>Lat: {point.lat}</span>
            <span className='d-flex gris2'>Lng: {point.lng}</span>
          </div>
        </div>
      ))

      }
    </div>
      <ModalEdit show={show} setShow={setShow} point={pointReference} />
    </>
  )
}

export default Table