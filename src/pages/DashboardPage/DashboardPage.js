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
import { faEdit, faTrash, faChartLine } from "@fortawesome/free-solid-svg-icons";
import ModalModifyCandidate from "./ModalModifyCandidate";
import UsersFilter from '../../components/UsersFilter'
import DeleteUserModal from '../../components/DeleteUserModal'
import isObjectEmpty from "utils/isObjectEmpty";
import UserStatiticsModal from '../../components/UserStatiticsModal'

import accessData from '../../data/access.json'
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
  updateCandidateData,
  updateCandidateError,
}) => {
  const history = useHistory();
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosFilter, setUsuariosFilter] = useState([]);
  const [showModalModify, setShowModalModify] = useState(false);
  const [candidateToModify, setCandidateToModify] = useState({});
  const [userToDelete, setUserToDelete] = useState({})
  const [userAccessToView, setUserAccessToView] = useState([])

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
  const updateCandidate = (updatedUser) => {
    const updatedList = [...usuarios]
    updatedList.forEach((user, idx) => {
      if(user.id === updatedUser.id){
        updatedList[idx] = updatedUser
        updatedList[idx].updatedAt = new Date().toISOString()
      }
    })

    setUsuarios(updatedList)
    handleCloseModalModifyCandidate()
  }

  const handleModifyCandidate = (candidate) => {
    setCandidateToModify(candidate);
    setShowModalModify(true);
  }

  const deleteCandidate = () => {
    setUsuarios(
      [...usuarios].filter(user => user.id !== userToDelete.id)
    )
    setUserToDelete({})
  };

  const handleDeleteUserButton = (user) => {
    setUserToDelete(user)
  } 

  const handleCloseDeleteModal = () => {
    setUserToDelete({})
  }

  const handleCloseModalModifyCandidate = () => {
    setShowModalModify(false);
    setCandidateToModify({})
  };

  const handleCloseModalUserAccess = () => {
    setUserAccessToView([])
  }

  const handleAccessButton = (userId) => {
    setUserAccessToView(
      accessData.filter(access => access.userId === userId).sort((a, b) => {
        const dateA = new Date(a.date)
        const dateB = new Date(b.date)

        return dateA > dateB ? 1 :
          dateB > dateA ? -1 : 0
      })
    )
  }

  return (
    <>
      {console.log(userAccessToView)}
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
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombre</th>
                      <th>Apellido</th>
                      <th>DNI</th>
                      <th>E-mail</th>
                      <th>Direccion</th>
                      <th>Fecha de alta</th>
                      <th colSpan="3">Opciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuariosFilter &&
                      usuariosFilter.map((candidate, index) => {
                        return (
                          <tr key={candidate.id}>
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
                                fn={() => handleDeleteUserButton(candidate)}
                                btnSize="sm"
                                tooltipText="Eliminar Candidato"
                              />
                            </td>
                            <td>
                              <ButtonWithIconAndTooltip
                                icon={faChartLine}
                                placement="top"
                                variant="primary"
                                fn={() => handleAccessButton(candidate.id)}
                                btnSize="sm"
                                tooltipText="Ver accesos"
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
      <DeleteUserModal
        show={!isObjectEmpty(userToDelete) ? true : false}
        user={userToDelete}
        deleteUser={deleteCandidate}
        handleClose={handleCloseDeleteModal}
      />
      <UserStatiticsModal
        show={userAccessToView.length ? true : false}
        accessData={userAccessToView}
        handleClose={handleCloseModalUserAccess}
      />
    </>
  );
};

export default DashboardPage;
