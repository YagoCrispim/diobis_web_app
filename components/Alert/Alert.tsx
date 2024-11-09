import React from 'react'
import * as CSS from './Alert.styled'

interface Props {
  children: React.ReactNode
  type: 'success' | 'alert' | 'warning' | 'message'
}

const Alert = ({ children, type = 'success' }: Props) => {
  return <CSS.Container type={type}>{children}</CSS.Container>
}

export { Alert }
