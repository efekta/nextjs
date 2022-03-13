import cn from 'classnames';
import { ForwardedRef, forwardRef, MouseEvent } from 'react';

import { useInputMask } from '@client/hooks/useInputMask';

import { ErrorMessage, Icon } from '@/ui';

import s from './Input.module.scss';
import { InputProps } from './Input.props';

export const Input = forwardRef(
    (
        { message, errors, type = 'text', full = false, mask = '', className, placeholder = ' ', title, ...props }: InputProps,
        ref: ForwardedRef<HTMLInputElement>
    ) => {
        const inputMask = useInputMask(mask);

        return (
            <>
                <label className={cn(s.label, full && s.full, errors && s.error, className)}>
                    <input
                        className={cn(s.input, errors && s.error)}
                        type={type}
                        ref={ref}
                        {...props}
                        {...(mask?.length > 0 ? inputMask : '')}
                        placeholder={placeholder}
                    />
                    <span className={s.title}>{title}</span>
                </label>
                {errors && <ErrorMessage>{message}</ErrorMessage>}
            </>
        );
    }
);
