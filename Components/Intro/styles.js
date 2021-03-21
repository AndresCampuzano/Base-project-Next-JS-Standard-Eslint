import styled from "styled-components"

export const Container = styled.main`
  margin: auto;
  max-width: ${({ theme }) => theme.maxWidth};
  color: ${({ theme }) => theme.blackColor};
`
