/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, ErrorMessage, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import { schema } from './validation';
import { loginRequest } from '../../store/modules/auth/actions';

export default function Login(props) {
  const dispatch = useDispatch();
  const prevPath = get(props, 'location.state.prevPath', '/');
  function handleSubmitLogin(values) {
    dispatch(
      loginRequest({
        email: values.email,
        password: values.password,
        prevPath,
      })
    );
  }
  return (
    <Container>
      <h1>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
        onSubmit={(values) => handleSubmitLogin(values)}
      >
        {({ handleChange, handleSubmit, values }) => (
          <Form onSubmit={handleSubmit}>
            <label htmlFor="email">
              E-mail
              <Field
                as="input"
                type="email"
                value={values.email}
                onChange={handleChange}
                name="email"
                placeholder="Seu email"
              />
              <ErrorMessage name="email" />
            </label>
            <label htmlFor="password">
              Senha
              <Field
                as="input"
                type="password"
                value={values.password}
                onChange={handleChange}
                name="password"
                placeholder="Sua Senha"
              />
              <ErrorMessage name="password" />
            </label>
            <button type="submit">Acessar</button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
