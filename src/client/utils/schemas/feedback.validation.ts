import * as yup from 'yup';
import { EmailValidation, NameValidation, TelValidation } from './fields.validation';

export const FeedBackValidation = yup
    .object()
    .shape({
        company: yup.string().min(3, 'Пожалуйста, введите корректную компанию'),
    })
    .concat(EmailValidation)
    .concat(NameValidation)
    .concat(TelValidation);
