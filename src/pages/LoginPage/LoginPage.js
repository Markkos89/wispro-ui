import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col, Form, Container, Button } from 'react-bootstrap'
import Particles from 'react-particles-js'
import Card from '../../components/card'
import { useHistory } from 'react-router-dom'

const StyleLogin = styled.div`
  display: flex;
  width: 100vm;
  height: 100vh;
  background-color: #000;
  margin-top: 0px;

  & .particulas {
    position: absolute;
    margin-top: 0px;
    width: 100%;
    height: 100%;
  }

  & .card-login {
    position: relative;
    width: 350px;
    height: 350px;
    margin: auto;
    padding: 15px;
    background: #ccc;
  }

  & .titulo-card-login {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 18px;
  }

  & h6 {
    text-align: center;
    font-size: 1.5em;
  }

  & .passwordLabel {
    display: flex;
    flex-direction: row;
  }

  & .button-show-hide {
    border: none;
    outline: none;
    background: #265a88;
  }
`

const LoginPage = ({ login, logout, loggedIn }) => {
  const [formLogin, setFormLogin] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const history = useHistory()

  useEffect(() => {
    logout()
  }, [logout])

  const onChangeEmail = event => {
    setFormLogin({
      ...formLogin,
      email: event.target.value
    })
  }

  const onChangePassword = event => {
    setFormLogin({
      ...formLogin,
      password: event.target.value
    })
  }

  const onReset = () => {
    setFormLogin({
      email: '',
      password: ''
    })
  }

  const handleSubmit = () => {
    if (formLogin.email && formLogin.password) {
      login(formLogin.email, formLogin.password)
    } else {
      alert('Completa email y contraseña!')
      onReset()
    }
  }

  useEffect(() => {
    if (loggedIn) {
      history.push('/dashboard')
    }
  }, [loggedIn, history])

  return (
    <StyleLogin>
      <Particles
        className='particulas'
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false
              }
            },
            size: {
              value: 2,
              random: true,
              anim: {
                speed: 3,
                size_min: 0.3
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              random: true,
              speed: 1,
              direction: 'top',
              out_mode: 'out'
            }
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble'
              },
              onclick: {
                enable: true,
                mode: 'repulse'
              }
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0.8
              },
              repulse: {
                distance: 400,
                duration: 4
              }
            }
          }
        }}
      />
      <Card className='card-login'>
        <Container>
          <Row className='titulo-card-login'>
            <Col xs={12} sm={9}>
              <h6>Iniciar sesion</h6>
            </Col>
          </Row>
          <Form>
            <Form.Group controlId='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type='text'
                name='email'
                placeholder=''
                value={formLogin.email}
                onChange={onChangeEmail}
              />
            </Form.Group>
            <Form.Group controlId='password'>
              <Form.Label>Password</Form.Label>
              <Form.Group className='passwordLabel'>
                <Form.Control
                  required
                  type={!showPassword ? 'password' : 'text'}
                  name='password'
                  placeholder=''
                  value={formLogin.password}
                  onChange={onChangePassword}
                />
                <Button
                  size='sm'
                  variant='secondary'
                  onClick={() => {
                    setShowPassword(!showPassword)
                  }}>
                  {showPassword ? 'hide' : 'show'}
                </Button>
              </Form.Group>
            </Form.Group>
          </Form>
          <Button
            variant='dark'
            className='float-right'
            size='sm'
            type='submit'
            onClick={handleSubmit}>
            Entrar
          </Button>
        </Container>
      </Card>
    </StyleLogin>
  )
}

export default LoginPage
