import React, { useState } from "react";
import { Row, Col, Form, Container, Card, Button } from "react-bootstrap";
import styled from "styled-components";
import { closeForm } from "../../utils/CloseForm";
import Select from "react-select";

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
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1000px;
  background-color: #edf1f2 !important;
`;

const H6 = styled.h6`
  margin-bottom: 10px;
  color: #858484;
`;

const StylContainer = styled(Container)`
  margin-top: 150px;
`;

const StyledCardHeader = styled(Card.Header)`
  background-color: #3277b2;
  color: #ffffff;
  font-weight: bold;
`;

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

function AddCandidate({ postCandidate, postData, postLoading, postError }) {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    profession: "",
    city: "",
    province: "",
    country: "",
    habilities: [],
    linkedin: "",
    github: "",
  });

  const onChangeName = (event) => {
    setEmployee({
      ...employee,
      name: event.target.value,
    });
  };

  const onChangeProfession = (event) => {
    setEmployee({
      ...employee,
      profession: event.target.value,
    });
  };

  const onChangeHabilities = (value) => {
    setEmployee({
      ...employee,
      habilities: value,
    });
  };

  const onChangeCity = (event) => {
    setEmployee({
      ...employee,
      city: event.target.value,
    });
  };

  const onChangeProvince = (event) => {
    setEmployee({
      ...employee,
      province: event.target.value,
    });
  };

  const onChangeCountry = (event) => {
    setEmployee({
      ...employee,
      country: event.target.value,
    });
  };

  const onChangeEmail = (event) => {
    setEmployee({
      ...employee,
      email: event.target.value,
    });
  };

  const onChangeLinkedin = (event) => {
    setEmployee({
      ...employee,
      linkedin: event.target.value,
    });
  };
  const onChangeGithub = (event) => {
    setEmployee({
      ...employee,
      github: event.target.value,
    });
  };

  const isInputFieldEmpty = () => {
    return (
      employee.name === "" ||
      employee.profession === "" ||
      employee.habilities.length === 0 ||
      employee.city === "" ||
      employee.province === "" ||
      employee.country === "" ||
      employee.email === "" ||
      employee.linkedin === "" ||
      employee.github === ""
    );
  };

  const handleSubmit = (data) => {
    data.habilities = data.habilities.map((el) => el.value);
    postCandidate(data);
  };

  return (
    <Wrapper>
      <StylContainer>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <H6>
              Por favor complete el formulario para agregar al candidate y luego
              haga click en el botón Guardar.
            </H6>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={9}>
            <Card>
              <StyledCardHeader>Agregar Candidato</StyledCardHeader>
              <Card.Body>
                <Form onSubmit={() => handleSubmit(employee)}>
                  <Form.Group controlId="addName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="name"
                      placeholder="Ingrese el nombre completo"
                      value={employee.name}
                      onChange={onChangeName}
                    />
                  </Form.Group>
                  <Form.Group controlId="addProfession">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="profession"
                      placeholder="Ingrese el título"
                      value={employee.profession}
                      onChange={onChangeProfession}
                    />
                  </Form.Group>
                  <Form.Group controlId="addEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="email"
                      placeholder="Ingrese el email"
                      value={employee.email}
                      onChange={onChangeEmail}
                    />
                  </Form.Group>
                  <Form.Group controlId="addCountry">
                    <Form.Label>Linkedin</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="linkedin"
                      placeholder="Ingrese el link a Linkedin"
                      value={employee.linkedin}
                      onChange={onChangeLinkedin}
                    />
                  </Form.Group>
                  <Form.Group controlId="addCountry">
                    <Form.Label>Github</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="github"
                      placeholder="Ingrese el link a Github"
                      value={employee.github}
                      onChange={onChangeGithub}
                    />
                  </Form.Group>
                  <Form.Group controlId="addCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="city"
                      placeholder="Ingrese la ciudad"
                      value={employee.city}
                      onChange={onChangeCity}
                    />
                  </Form.Group>
                  <Form.Group controlId="addProvince">
                    <Form.Label>Provincia</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="province"
                      placeholder="Ingrese la provincia"
                      value={employee.provincia}
                      onChange={onChangeProvince}
                    />
                  </Form.Group>
                  <Form.Group controlId="addCountry">
                    <Form.Label>Pais</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      name="country"
                      placeholder="Ingrese el país"
                      value={employee.country}
                      onChange={onChangeCountry}
                    />
                  </Form.Group>
                  <Form.Group controlId="addHability">
                    <Form.Label>Skills</Form.Label>
                    <Select
                      required
                      type="text"
                      name="habilities"
                      as="select"
                      value={employee.habilities}
                      onChange={onChangeHabilities}
                      options={options}
                      isMulti
                    />
                  </Form.Group>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => closeForm()}
                  >
                    Cancel
                  </Button>
                  <StyledButton
                    className="style-button"
                    size="sm"
                    type="submit"
                    disabled={isInputFieldEmpty()}
                  >
                    Submit
                  </StyledButton>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </StylContainer>
    </Wrapper>
  );
}

export default AddCandidate;
