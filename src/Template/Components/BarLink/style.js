import styled from 'styled-components'
import { Link } from "react-router-dom"

export const BarLinkItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  color: inherit;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  padding: 6px 23px;
  max-width: 100%;
  border-radius: 6px;
  transition: background-color 150ms ease-in-out;
  img {
    height: 30px;
    width: 30px;
    object-fit: cover;
  }
  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    background: #282828;
  }
`