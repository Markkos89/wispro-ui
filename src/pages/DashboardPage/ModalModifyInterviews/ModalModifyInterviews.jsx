import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { ButtonWithIconAndTooltip } from "../../../components/ButtonWithIconAndTooltip";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function ModalModifyCandidate({
  show,
  handleClose,
  candidate,
  updateCandidate,
  interviews,
  handleAddInterviewRow,
}) {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("data");
    console.log(data);
    if (!data) {
      Swal.fire(
        "Error!",
        "Al menos un campo de busqueda debe estar completo",
        "error"
      );
    } else {
      console.log(data);
      await updateCandidate(data);
      // Swal.fire("Exito!", "El registro se actualizó correctamente.", "success");
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Modificar Entrevistas/Notas</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          hidden
          id="candidateId"
          name="candidateId"
          defaultValue={candidate.id}
          ref={register}
        />
        <Modal.Body>
          {interviews &&
            interviews.map((interview, index) => {
              console.log(interview);
              return (
                <div key={index}>
                  <Form.Row>
                    <Form.Group as={Col} md={6}>
                      <Form.Label>Pregunta {index + 1}</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Aca podria ir la pregunta si se hizo o el titulo de una nota, ej: 'Tecnologias que maneja'"
                        defaultValue={interview.pregunta}
                        ref={register}
                        name={"pregunta"}
                      />
                    </Form.Group>
                    <Form.Group as={Col} md={6}>
                      <Form.Label>Respuesta {index + 1}</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Aca podria ir la respuesta de la pregunta o el contenido de la nota, ej: 'React, Node..'"
                        ref={register}
                        name="respuesta"
                        defaultValue={interview.respuesta}
                      />
                    </Form.Group>
                  </Form.Row>
                </div>
              );
            })}
          <Form.Row>
            <ButtonWithIconAndTooltip
              icon={faPlus}
              placement="top"
              variant="success"
              fn={() => handleAddInterviewRow(interviews)}
              btnSize="sm"
              tooltipText="Agregar fila"
            />
          </Form.Row>
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
}

export default ModalModifyCandidate;
