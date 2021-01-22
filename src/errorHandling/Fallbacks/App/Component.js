import React from 'react'
import { faRedo as ResetIcon } from '@fortawesome/free-solid-svg-icons'
import { resetApp } from 'utils'
import { messages, email } from 'config'
import { Container, Button } from 'react-bootstrap'

const AppErrorBoundaryFallback = () => (
  <Container>
    <h5>{messages.app.crash.title}</h5>

    <div className='mt-5'>
      <div>
        <Button target='_blank' rel='noreferrer' href={`mailto: ${email}`}>
          {messages.app.crash.options.email}
        </Button>
      </div>
      <h6>or</h6>
      <div>
        <Button onClick={resetApp}>
          {messages.app.crash.options.reset} <ResetIcon />
        </Button>
      </div>
    </div>
  </Container>
)

export default AppErrorBoundaryFallback
