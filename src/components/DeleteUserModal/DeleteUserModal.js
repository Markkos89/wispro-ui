import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default ({show, user, deleteUser, handleClose}) => {

  return <Modal show={show}>
    <Modal.Header closeButton onHide={handleClose}>
      <Modal.Title className='text-center'>Eliminar usuario</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>Estas seguro que quieres eliminar el usuario llamado {user.firstname} {user.lastname} con DNI {user.dni}?</p>
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" type='button' onClick={handleClose}>Cancelar</Button>
      <Button variant="warning" type='button' onClick={deleteUser}>Eliminar</Button>
    </Modal.Footer>
  </Modal>
}