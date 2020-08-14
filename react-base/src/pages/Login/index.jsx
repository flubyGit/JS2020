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
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum corporis
        quisquam illo culpa autem ipsam voluptatum maxime molestias. Quae in
        perferendis velit veniam rem optio illo consectetur ullam laborum sint.
      </Paragraph>
    </Container>
  );
}
