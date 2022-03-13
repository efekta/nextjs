import * as yup from 'yup';
import { phoneRegExp } from '@client/utils/utils';

export const EmailValidation = yup.object().shape({
    email: yup.string().email('Пожалуйста, введите корректный email').required('Почта обязательная'),
});

export const NameValidation = yup.object().shape({
    name: yup.string().min(2, 'Пожалуйста, введите корректное имя'),
});

export const TelValidation = yup.object().shape({
    tel: yup.string().matches(phoneRegExp, 'Пожалуйста, укажите корректный номер телефона'),
});
