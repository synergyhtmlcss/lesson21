import React from 'react'
import { Slider } from '../../Components/Views/Slider'
import { BlockItem } from './style'
import { GridCols } from '../../Components/Views/GridCols'
import { FlexCols } from '../../Components/Views/FlexCols'

export const Block = ({data}) => {
  
  return (
    <BlockItem>
      {data.title ? <h3>{data.title}</h3> : null}
      {(() => {
        switch (data.type) {
          case "flex":
            return <FlexCols items={data.items}/>
          case "grid":
            return <GridCols items={data.items}/>
          case "slider":
            return <Slider data={data}/>
          default:
            return <></>
        }
      })()}
    </BlockItem>
  )
}