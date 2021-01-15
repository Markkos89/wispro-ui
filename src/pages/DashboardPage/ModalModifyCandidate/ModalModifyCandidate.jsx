import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Col, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import isObjectEmpty from '../../../utils/isObjectEmpty'

const ModalModifyCandidate = ({
  show,
  handleClose,
  candidate,
  updateCandidate
}) => {
  const { register, handleSubmit, formState } = useForm();
  const [formErrors, setFormErrors] = useState({})

  const onSubmit = async (data) => {
    console.log(data)
    /* if (!data) {
      Swal.fire(
        "Error!",
        "Al menos un campo de busqueda debe estar completo",
        "error"
      );
    } else {
      console.log(data);
      await updateCandidate(data);

      handleClose();
    } */
  };

  useEffect(() => {
    setFormErrors(formState.errors)
  }, [formState])

  return (
    <Modal show={show} size="lg">
      <Modal.Header closeButton onHide={handleClose}>
        <Modal.Title>Modificar Candidato</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          hidden
          id="userId"
          name="id"
          defaultValue={candidate.id}
          ref={register}
        />

        <Modal.Body>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                defaultValue={candidate.firstname}
                name="firstname"
                ref={register({
                  minLength: {value: 2, message: 'El nombre debe tener al menos 2 caracteres'},
                  maxLength: {value: 100, message: 'El nombre no puede tener mas de 100 caracteres'},
                  required: {value: true, message: 'Se requiere nombre'}
                })}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                defaultValue={candidate.lastname}
                ref={register({
                  minLength: {value: 2, message: 'El apellido debe tener al menos 2 caracteres'},
                  maxLength: {value: 50, message: 'El apellido no puede tener mas de 50 caracteres'},
                  required: {value: true, message: 'Se requiere apellido'}
                })}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                defaultValue={candidate.email}
                ref={register({
                  pattern: {value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: 'El email no es valido'},
                  required: {value: true, message: 'Se requiere un email'}
                })}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>DNI</Form.Label>
              <Form.Control
                type='number'
                name="dni"
                defaultValue={candidate.dni}
                ref={register({
                  max: {value: 100000000, message: 'El DNI no puede ser mayor a 100.000.000'},
                  min: {value: 1000000, message: 'El DNI no puede ser menor a 1.000.000'},
                  required: {value: true, message: 'Se requiere DNI'},
                  valueAsNumber: true
                })}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              name="address"
              defaultValue={candidate.address}
              ref={register({
                minLength: {value: 3, message: 'La direccion debe tener al menos 3 caracteres'},
                maxLength: {value: 100, message: 'La direccion no puede tener mas de 100 caracteres'},
                required: {value: true, message: 'Se requiere una direccion'}
              })}
            />
          </Form.Group>

          
          {!isObjectEmpty(formErrors) && 
            <Alert variant='danger' className='text-left'>
              <ul>
                {
                  Object.values(formErrors).map((error, idx) => {
                    return <li key={idx}>{error.message}</li>
                  })
                }
              </ul>
            </Alert>
          }
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" type="button" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit">
            Guardar Cambios
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalModifyCandidate;
