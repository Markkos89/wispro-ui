/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/state-in-constructor */
import React, { useState, useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { ButtonWithIconAndTooltip } from "../../components/ButtonWithIconAndTooltip";
// import TableTemplate from "../../components/Tables/TableTemplate";
import { useHistory } from "react-router-dom";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import ModalModifyCandidate from "./ModalModifyCandidate";
import UsersFilter from '../../components/UsersFilter'
// import Swal from "sweetalert2";

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
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosFilter, setUsuariosFilter] = useState([]);
  const [showModalModify, setShowModalModify] = useState(false);
  const [candidateToModify, setCandidateToModify] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getCandidates();
      console.log(response);
    }
    fetchData();
  }, [getCandidates]);

  useEffect(() => {
    setUsuarios(getAllData);
  }, [getAllData]);

 

  // const deleteEmployee = (id) => {
  //   const confirmDelete = window.confirm("Delete employee forever?");
  //   if (confirmDelete) {
  //     axios
  //       .delete(`${url}/${id}`)
  //       .then((res) => console.log(res.data))
  //       .then(() => setCandidates(candidates.filter((el) => el.id !== id)));
  //   }
  // };

  const handleModifyCandidate = (candidate) => {
    setCandidateToModify(candidate);
    setShowModalModify(true);
  }

  const handleDeleteCandidate = () => {
    console.log("handleDeleteCandidate");
  };

  const handleCloseModalModifyCandidate = () => {
    setShowModalModify(false);
    setCandidateToModify({})
  };

  return (
    <>
      <StyleDashboard>
        <StyleTable>
          <Container>
            {/* <Row>
              <Col xs={5} sm={5}>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={openAddFormHandler}
                >
                  Agregar Candidato
                </Button>
              </Col>
            </Row> */}
            <Row>
              <Col>
                <h1>Lista de Candidatos</h1>
              </Col>
            </Row>
            <UsersFilter originalUserList={usuarios} setFiltredUsersList={setUsuariosFilter}></UsersFilter>
            <Row>
              <Col xs={12} sm={12} className="text-center">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>DNI</th>
                      <th>E-mail</th>
                      <th>Direccion</th>
                      <th>Fecha de alta</th>
                      <th colSpan="2">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuariosFilter &&
                      usuariosFilter.map((candidate, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{candidate.firstname}</td>
                            <td>{candidate.lastname}</td>
                            <td>{candidate.dni}</td>
                            <td>{candidate.email}</td>
                            <td>{candidate.address}</td>
                            <td>{new Date(candidate.createdAt).toLocaleDateString()}</td>
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
        updateCandidate={updateCandidate}
      />
    </>
  );
};

export default DashboardPage;
