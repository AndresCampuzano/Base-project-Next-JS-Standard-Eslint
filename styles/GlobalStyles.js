import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behavior: smooth;
    }
    body {
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.whiteColor};
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        text-align: center;
        ${"" /* overflow-x: hidden; */}
        color: ${({ theme }) => theme.blackColor};
    }
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.primaryColor};
    }
`

export default GlobalStyles
