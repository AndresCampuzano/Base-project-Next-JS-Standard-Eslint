import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: ${({ theme }) => theme.blackColor};
        ${"" /* overflow-x: hidden; */}
        text-align: center;
        background-color: ${({ theme }) => theme.whiteColor};
    }
    a {
        color: ${({ theme }) => theme.primaryColor};
        text-decoration: none;
    }
`

export default GlobalStyles
