import React, { useEffect, useState } from 'react'
import ioClient from 'socket.io-client'
import { Col, Container, Row } from 'react-bootstrap'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default () => {
  const [resources, setResources] = useState([])  

  useEffect(() => {
    const socket = ioClient(process.env.REACT_APP_HEROKU_API_URL || "http://localhost:3000")
    socket.on('resources-consume', data => {
      setResources(prevState => {
        if(prevState.length < 15) return [...prevState, data]
        if(prevState.length === 15) return [...prevState.slice(1), data]
      })
    })
  }, [])

  const getHighchartsOptios = typeResource => ({
    chart: {
      type: 'area'
    },
    title: {
      text: `consumo de ${typeResource.toUpperCase()}`
    },
    series: [
      {
        name: typeResource,
        data: resources.map(values => parseFloat(values[typeResource]))
      }
    ],
    xAxis: {
      allowDecimals: false
    }
  })

  return <Container>
    <Row className='text-center'>
      <Col>
        <HighchartsReact
          highcharts={Highcharts}
          options={getHighchartsOptios('cpu')}
          constructorType={'chart'}
        />
      </Col>
      <Col>
        <HighchartsReact
          highcharts={Highcharts}
          options={getHighchartsOptios('ram')}
          constructorType={'chart'}
        />
      </Col>
    </Row>
    <Row className='text-center'>
      <Col>
        <HighchartsReact
          highcharts={Highcharts}
          options={getHighchartsOptios('red')}
          constructorType={'chart'}
        />
      </Col>
    </Row>
  </Container>
}