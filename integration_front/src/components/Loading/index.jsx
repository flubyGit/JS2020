import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled'

function Loading({ isLoading }) {
  if (!isLoading) return <></>
  return (
    <Container>
      <div></div>
      <span>Carregando...</span>
    </Container>
  )
}
Loading.defaultProps = {
  isLoading: false
}
Loading.propTypes = {
  loading: PropTypes.bool
}
export default Loading
