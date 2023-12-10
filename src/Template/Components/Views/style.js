import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const GridContainer = styled.div`
  gap: 15px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 1fr);
`

export const SliderItem = styled.div`
  flex: none;
`

export const SliderWrapper = styled.div`
  margin: 15px 0;
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  max-width: 100%;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`