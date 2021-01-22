import React, { useState, useEffect } from "react";
import { Row, Col, Table, Container } from "react-bootstrap";
import { ButtonWithIconAndTooltip } from "../../components/ButtonWithIconAndTooltip";
import { faEdit, faTrash, faChartLine } from "@fortawesome/free-solid-svg-icons";
import ModalModifyUser from "../../components/ModifyUserModal";
import UsersFilter from '../../components/UsersFilter'
import DeleteUserModal from '../../components/DeleteUserModal'
import isObjectEmpty from "utils/isObjectEmpty";
import UserStatiticsModal from '../../components/UserStatiticsModal'

import accessData from '../../data/access.json'

const DashboardPage = ({
  getUsers,
  getAllData
}) => {
  const [usuarios, setUsuarios] = useState([])
  const [usuariosFilter, setUsuariosFilter] = useState([])
  const [userToModify, setUserToModify] = useState({})
  const [userToDelete, setUserToDelete] = useState({})
  const [userAccessToView, setUserAccessToView] = useState([])

  useEffect(() => {
    async function fetchData() {
      await getUsers();
    }
    fetchData();
  }, [getUsers])

  useEffect(() => {
    setUsuarios(getAllData);
  }, [getAllData])

  useEffect(() => setUsuariosFilter(usuarios), [usuarios])


  const updateUser = updatedUser => {

    setUsuarios(prevState => prevState.map(user => {
      if(user.id === updatedUser.id) return {
        ...updatedUser,
        updatedAt: new Date().toISOString()
      }
      return user
    }))
    setUserToModify({})
  }

  const deleteUser = () => {
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
    <Container>
      <Row>
        <Col>
          <h1 className='text-center mt-3'>Lista de usuarios</h1>
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
              {usuariosFilter.map((user, index) => {
                  return (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.firstname}</td>
                      <td>{user.lastname}</td>
                      <td>{user.dni}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                      <td>
                        <ButtonWithIconAndTooltip
                          icon={faEdit}
                          placement="top"
                          variant="outline-secondary"
                          fn={() => setUserToModify(user)}
                          btnSize="sm"
                          tooltipText="Modificar usuario"
                        />
                      </td>
                      <td>
                        <ButtonWithIconAndTooltip
                          icon={faTrash}
                          placement="top"
                          variant="outline-danger"
                          fn={() => setUserToDelete(user)}
                          btnSize="sm"
                          tooltipText="Eliminar usuario"
                        />
                      </td>
                      <td>
                        <ButtonWithIconAndTooltip
                          icon={faChartLine}
                          placement="top"
                          variant="dark"
                          fn={() => handleAccessButton(user.id)}
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
      <ModalModifyUser
        show={!isObjectEmpty(userToModify)}
        handleClose={() => setUserToModify({})}
        user={userToModify}
        updateUser={updateUser}
      />
      <DeleteUserModal
        show={!isObjectEmpty(userToDelete)}
        user={userToDelete}
        deleteUser={deleteUser}
        handleClose={() => setUserToDelete({})}
      />
      <UserStatiticsModal
        show={userAccessToView.length ? true : false}
        accessData={userAccessToView}
        handleClose={() => setUserAccessToView([])}
      />
    </Container>
  );
};

export default DashboardPage;
