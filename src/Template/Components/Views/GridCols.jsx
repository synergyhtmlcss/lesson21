import { useEffect, useState } from 'react'
import useMeasure from 'react-use-measure'
import { GridContainer } from './style';
import { PlaylistCard } from '../Items/PlaylistCard';

export const GridCols = ({items}) => {
  const [ref, bounds] = useMeasure()
  const [cols, setCols] = useState(4);
  useEffect(() => {
    if (bounds.width >= 1024) setCols(4)
    if (bounds.width < 1024 && bounds.width >= 767) setCols(3)
    if (bounds.width < 767) setCols(2)
  }, [bounds.width])
  return (
    <GridContainer cols={cols || 4} ref={ref}>
      {items.map((item) => <PlaylistCard data={item}/>)}
    </GridContainer>
  )
}