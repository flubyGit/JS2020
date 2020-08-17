/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const { id, name: nameStored, email: emailStored } = useSelector(
    (state) => state.auth.user
  );
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { registerRequest } = actions;

  useEffect(() => {
    if (!id) return;
    setName(nameStored);
    setEmail(emailStored);
  }, [id, nameStored, emailStored]);

  async function handleRegisterUser(e) {
    if (name.length < 3) {
      toast.error('Nome precisa ter 3 caracteres no minino');
    }
    if (!email) {
      toast.error('E-mail precisa ser preenchido');
    }
    if (!id && password.length < 6) {
      toast.error('Senha deve conter no mínino 6 caracteres');
    }
    e.preventDefault();
    dispatch(
      registerRequest({
        name,
        email,
        password,
        id,
      })
    );
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? 'Editar dados' : 'Crie sua conta'}</h1>

      <Form onSubmit={handleRegisterUser}>
        <label htmlFor="name">
          Nome
          <input
            type="name"
            name="name"
            maxLength={255}
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            maxLength={50}
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">{id ? 'Salvar' : 'Criar minha conta'}</button>
      </Form>
    </Container>
  );
}
