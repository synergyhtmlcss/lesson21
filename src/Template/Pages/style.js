import styled from 'styled-components'

export const PageWrapper = styled.div`
padding-bottom: 250px;
  color: #fff;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(180deg, #222 0%, #1F1F1F 13.35%, #171717 29.42%, #161616 37.77%, #151515 41.25%, #131313 51.47%, #121212 63.31%, #121212 86.38%, #121212 104.65%, rgba(18, 18, 18, 0.00) 114.66%), #FFF;
  background-attachment: fixed;
  .container {
    max-width: 1084px;
    margin: 0 0 0 300px;
    padding: 20px 30px;
  }
  h2 {
    margin: 20px 0 10px;
    font-weight: bold;
    font-size: 38px;
  }
  @media screen and (max-width: 1280px) {
    .container {
      margin: 0 auto;
      width: auto;
    }
  }
  @media screen and (min-width: 1680px) {
    .container {
      margin: 0 auto;
      width: auto;
    }
  }
`