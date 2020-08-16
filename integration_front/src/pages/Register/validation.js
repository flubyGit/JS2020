import * as Yup from 'yup';

export const schema = Yup.object().shape({
  name: Yup.string()
    .required('Nome precisa ser preenchido')
    .min(3, 'Campo nome deve ter no minino 3 caracteres'),
  email: Yup.string()
    .required('E-mail precisa ser preenchido')
    .email('E-mail precisa ser válido'),
  password: Yup.string()
    .required('Senha precisa ser preenchida')
    .min(6, 'Senha precisa ter no minino 6 caracteres'),
});
