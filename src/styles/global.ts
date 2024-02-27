import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background: #F7F8FA;
    font-family: 'Open Sans', sans-serif;
    color: #94979E;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Kumbh Sans', sans-serif;
  }
`