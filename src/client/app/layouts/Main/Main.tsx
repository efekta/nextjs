import cn from 'classnames';
import s from './Main.module.scss';
import {MainProps} from "./Main.props";

export const Main = ({children, className, ...props}: MainProps): JSX.Element =>
    <main className={cn(s.main, className)} {...props}>{children}</main>
