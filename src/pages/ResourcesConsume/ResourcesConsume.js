import React, { useEffect, useRef } from 'react'
import ioClient from 'socket.io-client'
import { Col, Container, Row } from 'react-bootstrap'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export default () => {  
  const CPUchartRef = useRef(null)
  const RAMchartRef = useRef(null)
  const REDchartRef = useRef(null)

  useEffect(() => {
    const socket = ioClient(process.env.REACT_APP_HEROKU_API_URL || "http://localhost:3000")
    socket.on('resources-consume', data => {

      Object.keys(data).forEach(resource => {
        if(resource === 'cpu'){
          const serie = CPUchartRef.current.chart.series[0]
          serie.addPoint(data.cpu, true, serie.data.length > 25)
        }else if (resource === 'ram'){
          const serie = RAMchartRef.current.chart.series[0]
          serie.addPoint(data.ram, true, serie.data.length > 25)
        }else if (resource === 'red'){
          const serie = REDchartRef.current.chart.series[0]
          serie.addPoint(data.red, true, serie.data.length > 25)
        }
      })
    })

    return () => socket.close()
  }, [])

  const getHighchartsOptios = typeResource => ({
    chart: {
      type: 'areaspline',
      marginRight: 10,
      animation: true
    },
    title: {
      text: `consumo de ${typeResource.toUpperCase()}`
    },
    series: [
      {
        name: typeResource,
        data: []
      }
    ],
    yAxis: {
      labels: {
        format: '{value} %'
      },
      max: 100
    },
    xAxis: {
      labels: {
        enabled: false
      }
    }
  })

  return <Container>
    <Row className='text-center'>
      <Col sm className='mt-3'>
        <HighchartsReact
          highcharts={Highcharts}
          options={getHighchartsOptios('cpu')}
          ref={ CPUchartRef }
        />
      </Col>
      <Col sm className='mt-3'>
        <HighchartsReact
          highcharts={Highcharts}
          options={getHighchartsOptios('ram')}
          ref={ RAMchartRef }
        />
      </Col>
    </Row>
    <Row className='text-center'>
      <Col className='mt-3'>
        <HighchartsReact
          highcharts={Highcharts}
          options={getHighchartsOptios('red')}
          ref={ REDchartRef }
        />
      </Col>
    </Row>
  </Container>
}