import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled'
import api from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;
    if (name.length < 3) {
      formErrors = true;
      toast.error('Nome deve ter entre no mínino 3 caracteres')
    }
    if (!isEmail(email)) {
      toast.error('E-mail inválido')
    }
    if (password.length < 6) {
      formErrors = true;
      toast.error('Senha deve ter entre no mínino 6 caracteres')
    }

    if (formErrors) return;

    try {
      await api.post('users', {
        name,
        email,
        password,
      })
      toast.success('Você fez seu cadastro');
      setTimeout(() => {
        history.push('/login')
      }, 3000)

    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      errors.map((err) => toast.error(err));
    }
  }
  return (
    <Container>
      <h1>Crie sua conta</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome
          <input type="name" maxLength={255} placeholder="Seu nome" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label htmlFor="email">
          E-mail
          <input type="email" value={email} placeholder="Seu email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label htmlFor="password">
          Senha
          <input type="password" maxLength={50} placeholder="Sua senha" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Criar minha conta</button>
      </Form>
    </Container>
  );
}
