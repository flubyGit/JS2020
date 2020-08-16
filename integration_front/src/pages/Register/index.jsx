/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Formik, ErrorMessage, Field } from 'formik';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import api from '../../services/axios';
import history from '../../services/history';
import { schema } from './validation';
import Loading from '../../components/Loading';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);

  async function handleRegisterUser(values) {
    try {
      setIsLoading(true);
      await api.post('users', {
        name: values.name,
        email: values.email,
        password: values.password,
      });
      toast.success('Você fez seu cadastro');
      setIsLoading(false);

      setTimeout(() => {
        history.push('/login');
      }, 3000);
    } catch (error) {
      const errors = get(error, 'response.data.errors', []);
      errors.map((err) => toast.error(err));
      setIsLoading(false);
    }
  }
  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Crie sua conta</h1>
      <Formik
        enableReinitialize
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => handleRegisterUser(values)}
        validationSchema={schema}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Nome
              <Field
                as="input"
                type="name"
                name="name"
                maxLength={255}
                placeholder="Seu nome"
                value={values.name}
                onChange={handleChange}
              />
              <ErrorMessage name="name" />
            </label>
            <label htmlFor="email">
              E-mail
              <Field
                as="input"
                type="email"
                name="email"
                value={values.email}
                placeholder="Seu email"
                onChange={handleChange}
              />
              <ErrorMessage name="email" />
            </label>
            <label htmlFor="password">
              Senha
              <Field
                as="input"
                type="password"
                name="password"
                maxLength={50}
                placeholder="Sua senha"
                value={values.password}
                onChange={handleChange}
              />
              <ErrorMessage name="password" />
            </label>
            <button type="submit">Criar minha conta</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
