import styled from 'styled-components'

export const BarWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 300px;
  background: #000000;
  height: 100vh;
  overflow-y: scroll;
  color: #ffffff;
  padding: 40px 10px 120px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  transition: transform 400ms ease-out;
  transform: ${props => props.showBar ? "translateX(0%)" : "translateX(-100%)"};
`

export const WrapperToggle = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  border: none;
  background: none;
  padding: 10px;
  z-index: 1000;
  cursor: pointer;
  color: #fff;
`