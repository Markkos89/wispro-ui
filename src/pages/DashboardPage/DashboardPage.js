import React, { useState, useEffect } from "react";
import { Row, Col, Container, Table } from "react-bootstrap";
import styled from "styled-components";
import { ButtonWithIconAndTooltip } from "../../components/ButtonWithIconAndTooltip";
import { faEdit, faTrash, faChartLine } from "@fortawesome/free-solid-svg-icons";
import ModalModifyCandidate from "./ModalModifyCandidate";
import UsersFilter from '../../components/UsersFilter'
import DeleteUserModal from '../../components/DeleteUserModal'
import isObjectEmpty from "utils/isObjectEmpty";
import UserStatiticsModal from '../../components/UserStatiticsModal'

import accessData from '../../data/access.json'

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
  getAllData
}) => {
  const [usuarios, setUsuarios] = useState([])
  const [usuariosFilter, setUsuariosFilter] = useState([])
  const [candidateToModify, setCandidateToModify] = useState({})
  const [userToDelete, setUserToDelete] = useState({})
  const [userAccessToView, setUserAccessToView] = useState([])

  useEffect(() => {
    async function fetchData() {
      await getCandidates();
    }
    fetchData();
  }, [getCandidates])

  useEffect(() => {
    setUsuarios(getAllData);
  }, [getAllData])

  useEffect(() => setUsuariosFilter(usuarios), [usuarios])


  const updateCandidate = updatedUser => {

    setUsuarios(prevState => prevState.map(user => {
      if(user.id === updatedUser.id) return {
        ...updatedUser,
        updatedAt: new Date().toISOString()
      }
      return user
    }))
    setCandidateToModify({})
  }

  const deleteCandidate = () => {
    setUsuarios(prevState => prevState.filter(user => user.id !== userToDelete.id))
    setUserToDelete({})
  };

  const handleAccessButton = userId => {
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
    <React.Fragment>
      <StyleDashboard>
        <StyleTable>
          <Container>
            <Row>
              <Col>
                <h1>Lista de Candidatos</h1>
              </Col>
            </Row>
            <UsersFilter
              originalUserList={usuarios}
              setFiltredUsersList={setUsuariosFilter}
            />
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
                    {usuariosFilter.map((candidate, index) => {
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
                                fn={() => setCandidateToModify(candidate)}
                                btnSize="sm"
                                tooltipText="Modificar Candidato"
                              />
                            </td>
                            <td>
                              <ButtonWithIconAndTooltip
                                icon={faTrash}
                                placement="top"
                                variant="danger"
                                fn={() => setUserToDelete(candidate)}
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
        show={!isObjectEmpty(candidateToModify)}
        handleClose={() => setCandidateToModify({})}
        candidate={candidateToModify}
        updateCandidate={updateCandidate}
      />
      <DeleteUserModal
        show={!isObjectEmpty(userToDelete)}
        user={userToDelete}
        deleteUser={deleteCandidate}
        handleClose={() => setUserToDelete({})}
      />
      <UserStatiticsModal
        show={userAccessToView.length ? true : false}
        accessData={userAccessToView}
        handleClose={() => setUserAccessToView([])}
      />
    </React.Fragment>
  );
};

export default DashboardPage;
