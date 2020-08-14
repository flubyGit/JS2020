import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  const dispatch = useDispatch();
  function handleReduxClick(e) {
    e.preventDefault();
    dispatch({
      type: 'BUTTON_CLICKED',
    });
    dispatch({
      type: 'BUTTON_CLICKED2',
    });
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
