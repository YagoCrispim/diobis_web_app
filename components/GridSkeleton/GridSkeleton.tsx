import React from 'react'
import Card from '../Card/Card'
import { LayoutGrid } from '../LayoutGrid/LayoutGrid'

const GridSkeleton = () => {
  return (
    <LayoutGrid>
      {Array.apply(null, Array(12)).map((_: any, index) => (
        <Card loading key={index} link="" data={undefined} />
      ))}
    </LayoutGrid>
  )
}

export { GridSkeleton }
