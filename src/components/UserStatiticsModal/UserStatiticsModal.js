import React from 'react'
import {Modal} from 'react-bootstrap'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
 
export default ({accessData, show, handleClose}) => {
  
  const getHighchartsOptios = () => ({
    title: '',
    chart: {
      type: 'line'
    },
    series: [
      {
        name: 'accesos',
        data: accessData.map(access => access.access)
      }
    ], 
    xAxis: {
      categories:  accessData.map(access => new Date(access.date).toLocaleDateString())
    },
    yAxis: {
      title: {
        text: 'Cantidad de accesos'
      }
    },
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 800,
            maxHeight: 300
          }
        }
      ]
    }
  })


  return <Modal show={show} size='lg'>
    <Modal.Header closeButton onHide={handleClose}>
      <Modal.Title>Accesos del usuario</Modal.Title>
    </Modal.Header>

    <Modal.Body >
      <HighchartsReact
        highcharts={Highcharts}
        options={getHighchartsOptios()}
      />
    </Modal.Body>
  </Modal>

}