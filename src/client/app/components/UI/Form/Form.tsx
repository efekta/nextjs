import { PropsWithChildren } from 'react';

import s from './Form.module.scss';
import { FormProps } from './Form.props';

export const Form = ({ children }: PropsWithChildren<FormProps>): JSX.Element =>
    <form className={s.form}>{children}</form>;

