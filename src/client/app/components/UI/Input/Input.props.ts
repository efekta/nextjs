import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    title?: string;
    full?: boolean;
    message?: string;
    errors?: boolean;
    mask?: string;
    type?: 'text' | 'password';
}
