import PropTypes from "prop-types"
import { Container } from "./styles"

export const Intro = ({ webPage }) => {
  return (
    <>
      <Container>
        <h1>This is the home page....</h1>
        <a href="https://andrescampuzano.com" target="_blank" rel="noreferrer">
          👉check {webPage}
        </a>
      </Container>
    </>
  )
}

Intro.propTypes = {
  webPage: PropTypes.string.isRequired,
}
