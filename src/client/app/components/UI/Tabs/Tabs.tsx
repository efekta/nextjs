import cn from 'classnames';

import s from './Tabs.module.scss';
import { TabsProps } from './Tabs.props';
import { PropsWithChildren } from 'react';

export const Tabs = ({children, className, ...props}: PropsWithChildren<TabsProps>): JSX.Element => {

    return (
        <ul className={cn(s.tabs, className)} {...props}>
            {children}
        </ul>
    );
};
