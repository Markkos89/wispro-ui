import React from 'react'
import styled from 'styled-components'

const StyleCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`

const Card = props => {
  return <StyleCard className={props.className}>{props.children}</StyleCard>
}

export default Card
