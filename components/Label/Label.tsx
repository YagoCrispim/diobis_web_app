import React from 'react'
import * as CSS from './Label.styled'

interface Props {
  color: string
  value: string
}

const Label = ({ color, value }: Props) => {
  return (
    <CSS.Container>
      <CSS.Value color={color}>{value}</CSS.Value>
    </CSS.Container>
  )
}

export default Label
