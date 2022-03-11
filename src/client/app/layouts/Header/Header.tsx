import cn from 'classnames';

import s from './Header.module.scss';
import {HeaderProps} from './Header.props';

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
        <header className={cn(s.header, className)} {...props}>

        </header>
    );
};
