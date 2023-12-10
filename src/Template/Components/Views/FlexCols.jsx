import { RecentCard } from '../Items/RecentCard'
import { FlexContainer } from './style'

export const FlexCols = ({items}) => {
  return (
    <FlexContainer>
      {items.map((item) => <RecentCard data={item}/>)}
    </FlexContainer>
  )
}