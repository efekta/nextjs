import cn from 'classnames';

import s from './Footer.module.scss';
import { FooterProps } from './Footer.props';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(s.footer, className)} {...props}>

        </footer>
    );
};
