import React from 'react'
import * as CSS from './LayoutGrid.styled'

interface Props {
  children: React.ReactNode
}

const LayoutGrid = ({ children }: Props) => {
  return <CSS.Grid>{children}</CSS.Grid>
}

export { LayoutGrid }
