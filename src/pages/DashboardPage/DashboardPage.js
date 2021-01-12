/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Button, Table } from "react-bootstrap";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar";
import { ButtonWithIconAndTooltip } from "../../components/ButtonWithIconAndTooltip";
// import TableTemplate from "../../components/Tables/TableTemplate";
import { useHistory } from "react-router-dom";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalModifyCandidate from "./ModalModifyCandidate";
import ModalModifyInterviews from "./ModalModifyInterviews";
// import Swal from "sweetalert2";

const H1 = styled.h1`
  font-size: 2em;
`;

const StyleDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 1000px;
  background-color: #edf1f2 !important;
`;

const StyleTable = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

const StyleSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 150px;
  margin-right: auto;
`;

const DashboardPage = ({
  getCandidates,
  getAllData,
  getAllLoading,
  getAllError,
  updateCandidate,
  updateCandidateData,
  updateCandidateError,
}) => {
  const history = useHistory();
  const [candidates, setCandidates] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [filterCandidates, setFilterCandidates] = useState([]);
  const [showModalModify, setShowModalModify] = useState(false);
  const [candidateToModify, setCandidateToModify] = useState([]);
  const [skills, setSkills] = useState([]);
  const [interviews, setInterviews] = useState([]);
  const [
    candidateToModifyInterviews,
    setCandidateToModifyInterviews,
  ] = useState([]);
  const [showModalModifyInterviews, setShowModalModifyInterviews] = useState(
    false
  );
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await getCandidates();
      console.log(response);
    }
    fetchData();
  }, [getCandidates]);

  useEffect(() => {
    setCandidates(getAllData);
  }, [getAllData]);

  // useEffect(() => {
  //   if (updateCandidateData.length && updateCandidateError === "")
  //     Swal.fire("Exito!", "El registro se actualizó correctamente.", "success");
  //   else Swal.fire("Error!", updateCandidateError, "error");
  // }, [updateCandidateData, updateCandidateError]);

  useEffect(() => {
    setFilterCandidates(
      candidates.filter((candidate) => {
        return (
          (candidate &&
            candidate.name &&
            candidate.name.includes(filterValue)) ||
          (candidate &&
            candidate.habilities &&
            candidate.habilities.includes(filterValue))
        );
      })
    );
  }, [filterValue, candidates]);

  // const deleteEmployee = (id) => {
  //   const confirmDelete = window.confirm("Delete employee forever?");
  //   if (confirmDelete) {
  //     axios
  //       .delete(`${url}/${id}`)
  //       .then((res) => console.log(res.data))
  //       .then(() => setCandidates(candidates.filter((el) => el.id !== id)));
  //   }
  // };

  const openAddFormHandler = () => {
    history.replace("/add-candidate");
  };

  const handleModifyCandidate = (candidate) => {
    setCandidateToModify(candidate);
    setSkills(
      candidate.habilities.map((hab) => {
        return { value: hab, label: hab };
      })
    );
    setGithub(candidate.github);
    setLinkedin(candidate.linkedin);
    setShowModalModify(true);
  };

  const handleInterviewsCandidate = (candidate) => {
    setCandidateToModifyInterviews(candidate);
    setInterviews(candidate.interviews);
    setShowModalModifyInterviews(true);
  };

  const handleDeleteCandidate = () => {
    console.log("handleDeleteCandidate");
  };

  const handleCloseModalModifyCandidate = () => {
    setShowModalModify(false);
  };

  const handleCloseModalModifyInterviews = () => {
    setShowModalModifyInterviews(false);
  };

  const handleAddInterviewRow = (interviews) => {
    const newInterviewsRow = { pregunta: "", respuesta: "" };
    setInterviews([...interviews, newInterviewsRow]);
  };

  return (
    <>
      <StyleDashboard>
        <StyleSearch>
          <SearchBar
            value={filterValue}
            employees={candidates}
            changeHandler={setFilterValue}
          />
        </StyleSearch>
        <StyleTable>
          <Container>
            <Row>
              <Col xs={5} sm={5}>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={openAddFormHandler}
                >
                  Agregar Candidato
                </Button>
              </Col>
              <Col xs={7} sm={7}>
                <H1>Lista de Candidatos</H1>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} className="text-center">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Titulo</th>
                      <th>Skills</th>
                      <th>Provincia</th>
                      <th>Ciudad</th>
                      <th>Pais</th>
                      <th colSpan="3">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterCandidates &&
                      filterCandidates.map((candidate, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{candidate.name}</td>
                            <td>{candidate.profession}</td>
                            <td>
                              {candidate.habilities.map((el) => {
                                return el + ", ";
                              })}
                            </td>
                            <td>{candidate.province}</td>
                            <td>{candidate.city}</td>
                            <td>{candidate.country}</td>
                            <td>
                              <ButtonWithIconAndTooltip
                                icon={faEdit}
                                placement="top"
                                variant="primary"
                                fn={() => handleInterviewsCandidate(candidate)}
                                btnSize="sm"
                                tooltipText="Entrevistas/Notas"
                              />
                            </td>
                            <td>
                              <ButtonWithIconAndTooltip
                                icon={faEdit}
                                placement="top"
                                variant="warning"
                                fn={() => handleModifyCandidate(candidate)}
                                btnSize="sm"
                                tooltipText="Modificar Candidato"
                              />
                            </td>
                            <td>
                              <ButtonWithIconAndTooltip
                                icon={faTrash}
                                placement="top"
                                variant="danger"
                                fn={() => handleDeleteCandidate()}
                                btnSize="sm"
                                tooltipText="Eliminar Candidato"
                              />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </StyleTable>
      </StyleDashboard>
      <ModalModifyCandidate
        show={showModalModify}
        handleClose={handleCloseModalModifyCandidate}
        candidate={candidateToModify}
        skills={skills}
        setSkills={setSkills}
        updateCandidate={updateCandidate}
        linkedin={linkedin}
        setLinkedin={setLinkedin}
        github={github}
        setGithub={setGithub}
      />
      <ModalModifyInterviews
        interviews={interviews}
        setInterviews={setInterviews}
        show={showModalModifyInterviews}
        handleClose={handleCloseModalModifyInterviews}
        candidate={candidateToModifyInterviews}
        updateCandidate={updateCandidate}
        handleAddInterviewRow={handleAddInterviewRow}
      />
    </>
  );
};

export default DashboardPage;
