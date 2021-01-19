import React, { useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

export default ({originalUserList, setFiltredUsersList}) => {
  const [orderBy, setOrderBy] = React.useState('')
  const [search, setSearch] = React.useState('')

  useEffect(()=> {
    const filterUsers = usersList => {
      const idx = search.length
      const mayusValue = search.toUpperCase()
      
      return usersList.filter(user =>
        ((user.firstname.toUpperCase().slice(0, idx)) === mayusValue) || ((user.lastname.toUpperCase().slice(0, idx)) === mayusValue)
      )
    }
  
    const orderUsers = usersList => {
      const sortByName = (name, a, b) => a[name].toLowerCase().localeCompare(b[name].toLowerCase())
  
      if(orderBy === 'firstname' || orderBy === 'lastname') return usersList.sort((a, b) => sortByName(orderBy, a, b))
      if(orderBy === 'dni') return usersList.sort((a, b) => a.dni - b.dni)
      if(orderBy === 'createdAt') return usersList.sort((a, b) => {
        const dateA = new Date(a.createdAt)
        const dateB = new Date(b.createdAt)
        return dateA > dateB ? 1 :
          dateB > dateA ? -1 : 0
      })
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
      <Form.Control as='select' onChange={(event) => setOrderBy(event.target.value)} value={orderBy}>
        <option value=''>Ordenar por...</option>
        <option value='firstname'>Nombre</option>
        <option value='lastname'>Apellido</option>
        <option value='dni'>DNI</option>
        <option value='createdAt'>Fecha de alta</option>
      </Form.Control>
    </Col>
  </Row>
  
}