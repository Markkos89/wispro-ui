import React from 'react'
import { messages } from 'config'
import { Container } from 'react-bootstrap'

const NotFound = () => (
  <Container>
    <h2>404 Not Found - {messages[404]}</h2>
  </Container>
)

export default NotFound
