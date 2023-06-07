import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import firestore from '../firebase';

function ModalEdit({ show, setShow, point }) {

  const [name, setName] = useState(point.name);


  const handleClose = () => setShow(false);

  const handleSaveChanges = async () => {
    try {
      const updatedPoint = { ...point, name };
      await firestore.collection('points').doc(point.id).update(updatedPoint);
			handleClose();

			point.name = name;

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar nombre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className='form-groupd w-100 rounded px-2' type="text" onChange={(e) => setName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEdit;
