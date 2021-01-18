import React from 'react'
import {Modal} from 'react-bootstrap'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
 
export default ({accessData, show, handleClose}) => {

  const dateValueFormatter = (value) => {
    return new Date(value).toLocaleDateString()
  }


  return <Modal show={show} size='lg'>
    <Modal.Header closeButton onHide={handleClose}>
      <Modal.Title>Accesos del usuario</Modal.Title>
    </Modal.Header>

    <Modal.Body >
      <LineChart data={accessData} width={725} height={300}> 
        <Line type="monotone" dataKey="access" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc"/>
        <XAxis dataKey="date" tickFormatter={(value, idx) => idx} hide={true}/>
        <YAxis/>
        <Tooltip labelFormatter={dateValueFormatter}/>
      </LineChart>
    </Modal.Body>
  </Modal>

}