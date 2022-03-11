import cn from 'classnames';

import s from './Button.module.scss';
import { ButtonProps } from './Button.props';

export const Button = ({
                           variant = 'primary',
                           size = 'medium',
                           full = false,
                           className,
                           children,
                           type = 'button',
                           disabled = false,
                           ...props
                       }: ButtonProps): JSX.Element =>
    <button
        className={cn(s.button, s[variant], s[size], { [s.full]: full }, className)}
        disabled={disabled}
        type={type}
        {...props}
    >
        {children}
    </button>;
