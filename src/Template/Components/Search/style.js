import styled from 'styled-components'

export const SearchWrapper = styled.div`
  padding: 0 30px;
  border-radius: 9999px;
  background: #fff;
  display: flex;
  align-items: center;
  margin: 20px 0;
  margin-right: 15%;
  img {
    height: 24px;
    width: 24px;
    object-fit: cover;
    filter: invert(1);
  }
  input {
    font-size: 18px;
    padding: 12px;
    width: 100%;
    border: none;
    outline: none;
    font-weight: bold;
  }
`