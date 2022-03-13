import * as yup from 'yup';
import { LoginValidation } from './login.validation';
import { NameValidation, TelValidation } from './fields.validation';

export const RegisterValidation = yup
    .object()
    .shape({
        lastName: yup.string().min(3, 'Пожалуйста, введите корректную фамилию'),
        passwordConfirm: yup
            .string()
            .required('Пожалуйста, повторите пароль')
            .oneOf([yup.ref('password'), null], 'Пароли должны совпадать'),
    })
    .concat(LoginValidation)
    .concat(NameValidation)
    .concat(TelValidation);
