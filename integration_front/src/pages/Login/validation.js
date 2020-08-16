import * as Yup from 'yup';

export const schema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail precisa ser preenchido')
    .email('E-mail precisa ser válido'),
  password: Yup.string()
    .required('Senha precisa ser preenchida')
    .min(6, 'Senha precisa ter no minino 6 caracteres'),
});
