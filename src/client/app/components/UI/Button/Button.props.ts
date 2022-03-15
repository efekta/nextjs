import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: ButtonVariant | string;
    full?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    size?: 'small' | 'medium'
}
