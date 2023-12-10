import styled from 'styled-components'

export const NowPlayingItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  & > img {
    height: 70px;
    width: 70px;
    object-fit: cover;
  }
  & > div {
    font-weight: bold;
    h5 {
      margin: 0;
      font-size: 18px;
    }
    span {
      font-size: 15px;
      color: #B3B3B3;
    }
  }
  button {
    cursor: pointer;
    border: none;
    background: transparent;
    img {
      height: 24px;
      width: 24px;
      object-fit: cover;
    }
    transition: opacity 300ms ease ;
    &:hover {
      opacity: 0.6;
    }
  }
`