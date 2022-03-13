import cn from 'classnames';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

import s from './Tab.module.scss';
import { TabProps } from './Tab.props';

export const Tab = ({ children, isSelected, ...props }: PropsWithChildren<TabProps>): JSX.Element => {
    return (
        <li className={cn(s.tab, isSelected && s.selected)}>
            <button type='button' className={s.title} {...props}>
                {children}
            </button>
            {
                isSelected &&
                <motion.div className={s.underline} layoutId='underline' aria-hidden />
            }
        </li>
    );
};
