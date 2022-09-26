import * as yup from 'yup';

export const loginValidation = yup.object({
  username: yup
    .string()
    .required('Es necesario un Nombre')
    .max(15, 'El nombre no debe tener más de 15 carateres'),
  password: yup
    .string()
    .required('Es necesario una Contraseña')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});
