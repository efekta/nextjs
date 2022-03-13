import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface TabProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isSelected?: boolean;
}
