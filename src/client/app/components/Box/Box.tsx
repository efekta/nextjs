import { PropsWithChildren } from 'react';

import s from './Box.module.scss';
import {BoxProps} from './Box.props';

export const Box = ({ children }: PropsWithChildren<BoxProps>): JSX.Element =>
    <div className={s.box}>{children}</div>;
