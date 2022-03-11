import * as yup from 'yup';
import { LoginValidation } from './login.validation';

export const RegisterValidation = yup.object().shape({
    name: yup.string().required('Имя обязательно'),
    passwordConfirm: yup
        .string()
        .required('Пожалуйста, повторите пароль')
        .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
    tel: yup.string().required('Пожалуйста, введите свой номер телефона'),
})
    .concat(LoginValidation);
