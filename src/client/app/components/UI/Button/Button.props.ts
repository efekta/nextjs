import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    full?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    size?: 'small' | 'medium'
}
