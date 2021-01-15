import React, { useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

export default ({originalUserList, setFiltredUsersList}) => {
  const [orderBy, setOrderBy] = React.useState('')
  const [search, setSearch] = React.useState('')

  useEffect(()=> {

    const filterUsers = (usersList) => {
      return (
        usersList.filter(user => {
          return user.firstname.includes(search) || user.lastname.includes(search)
        })
      )
    }

    const orderUsers = (usersList) => {
      if(orderBy === 'firstname'){
        return ([...usersList].sort((a, b) => {
          return a.firstname.toLowerCase().localeCompare(b.firstname.toLowerCase())
        }))
      }else if(orderBy === 'lastname'){
        return ([...usersList].sort((a, b) => {
          return a.lastname.toLowerCase().localeCompare(b.lastname.toLowerCase())
        }))
      }else if(orderBy === 'dni'){
        return ([...usersList].sort((a, b) => {
          return a.dni - b.dni
        }))
      }else if(orderBy === 'createdAt'){
        return ([...usersList].sort((a, b) => {
          const dateA = new Date(a.createdAt)
          const dateB = new Date(b.createdAt)
  
          return dateA > dateB ? 1 :
            dateB > dateA ? -1 :
            0
        }))
      }else if(orderBy === ''){
        return usersList
      }else if(orderBy === '' && search === ''){
        return originalUserList
      }

      return usersList
    }

    setFiltredUsersList(
      orderUsers(
        filterUsers(originalUserList)
      )
    )

  }, [orderBy, search, originalUserList, setFiltredUsersList])


  return <Row className='mt-5 mb-3'>
    <Col xs={9}>
      <Form.Control as="input" placeholder="Buscar por nombre o apellido" onChange={(event) => setSearch(event.target.value)} value={search}></Form.Control>
    </Col>
    <Col xs={3}>
      <Form.Control as='select' onChange={(event) => setOrderBy(event.target.value)} defaultValue={orderBy}>
        <option value=''>Ordenar por...</option>
        <option value='firstname'>Nombre</option>
        <option value='lastname'>Apellido</option>
        <option value='dni'>DNI</option>
        <option value='createdAt'>Fecha de alta</option>
      </Form.Control>
    </Col>
  </Row>
  
}