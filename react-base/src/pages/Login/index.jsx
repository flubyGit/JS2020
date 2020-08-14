import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();
  function handleReduxClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clickedButtonRequest());
  }
  return (
    <Container>
      <Title isRed>
        Login
        <small>Small</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet consectetur</Paragraph>
      <button type="button" onClick={handleReduxClick}>
        Enviar
      </button>
    </Container>
  );
}
