import * as yup from 'yup';
import { EmailValidation } from './fields.validation';

export const LoginValidation = yup
    .object()
    .shape({
        password: yup.string().min(6, 'Пароль должен быть не менее 6 символов').required('Пароль обязательный'),
    })
    .concat(EmailValidation);
