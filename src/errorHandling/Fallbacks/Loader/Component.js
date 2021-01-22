import React from 'react'
import { messages } from 'config'
import { Container } from 'react-bootstrap'

const LoaderErrorBoundaryFallback = () => (
  <Container>
    <h5>{messages.loader.fail}</h5>
  </Container>
)

export default LoaderErrorBoundaryFallback
