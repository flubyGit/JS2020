import React from 'react';
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed>
        Login
        <small>Small</small>
      </Title>
      <Paragraph>Lorem ipsum dolor sit amet consectetur</Paragraph>
    </Container>
  );
}
