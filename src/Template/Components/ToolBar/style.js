import styled from 'styled-components'

export const ToolBarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  & > div {
    display: flex;
    align-items: center;
  }
  button {
    cursor: pointer;
    border: none;
    background: transparent;
    transition: opacity 300ms ease;
    &:hover {
      opacity: 0.5;
    }
  }
`