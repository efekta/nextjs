import cn from 'classnames';
import { PropsWithChildren } from 'react';

import s from './ErrorMessage.module.scss';
import { ErrorMessageProps } from './ErrorMessage.props';

export const ErrorMessage = ({ className, children }: PropsWithChildren<ErrorMessageProps>): JSX.Element => {
    return (
        <p
            className={cn(s.error, className)}
        >
            {children}
        </p>
    );
};
