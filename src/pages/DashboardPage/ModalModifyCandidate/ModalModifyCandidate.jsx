import React, { useEffect } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Select from "react-select";

const ModalModifyCandidate = ({
  show,
  handleClose,
  candidate,
  skills,
  setSkills,
  updateCandidate,
  linkedin,
  setLinkedin,
  github,
  setGithub,
}) => {
  const { register, handleSubmit } = useForm();

  const options = [
    { value: "react", label: "react" },
    { value: "nodejs", label: "nodejs" },
    { value: "javascript", label: "javascript" },
    { value: "angular", label: "angular" },
    { value: "git", label: "git" },
    { value: "github", label: "github" },
    { value: "git flow", label: "git flow" },
    { value: "redux", label: "redux" },
    { value: "redux-thunk", label: "redux-thunk" },
    { value: "html5", label: "html5" },
    { value: "css3", label: "css3" },
    { value: "vuejs", label: "vuejs" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Mongoose", label: "Mongoose" },
    { value: "MySQL", label: "MySQL" },
    { value: "SQL Server", label: "SQL Server" },
    { value: "ORM", label: "ORM" },
    { value: "Sequelize", label: "Sequelize" },
    { value: "SCRUM", label: "SCRUM" },
  ];

  useEffect(() => {
    if (candidate.linkedin !== "") setLinkedin(candidate.linkedin);
    if (candidate.github !== "") setGithub(candidate.github);
  }, [candidate, setLinkedin, setGithub]);

  const onSubmit = async (data) => {
    if (!data) {
      Swal.fire(
        "Error!",
        "Al menos un campo de busqueda debe estar completo",
        "error"
      );
    } else {
      data.habilities = skills;
      data.linkedin = linkedin;
      data.github = github;
      console.log(data);
      await updateCandidate(data);

      handleClose();
    }
  };

  const onChangeHabilities = (value) => {
    setSkills(value);
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Modificar Candidato</Modal.Title>
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
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre Completo"
                defaultValue={candidate.name}
                ref={register}
                name="name"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="E-mail"
                ref={register}
                name="email"
                defaultValue={candidate.email}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titulo profesional"
                ref={register}
                name="profession"
                defaultValue={candidate.profession}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Skills</Form.Label>
              <Select
                required
                name="habilities"
                defaultValue={skills.length && skills}
                onChange={onChangeHabilities}
                options={options}
                isMulti
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="addLinkedin">
            <Form.Label>Linkedin</Form.Label>
            <Form.Control
              required
              type="text"
              name="linkedin"
              placeholder="Ingrese el link a Linkedin"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="addGithub">
            <Form.Label>Github</Form.Label>
            <Form.Control
              required
              type="text"
              name="github"
              placeholder="Ingrese el link a Github"
              value={github}
              onChange={(e) => setGithub(e.target.value)}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese la ciudad"
                ref={register}
                name="city"
                defaultValue={candidate.city}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Provincia</Form.Label>
              <Form.Control
                type="text"
                defaultValue={candidate.province}
                ref={register}
                name="province"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Pais</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el pais"
                ref={register}
                name="country"
                defaultValue={candidate.country}
              />
            </Form.Group>
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
};

export default ModalModifyCandidate;
