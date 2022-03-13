import { PropsWithChildren } from 'react';
import cn from 'classnames';

import s from './Text.module.scss';
import { TextProps } from './Text.props';

export const Text = ({ children, className, ...props }: PropsWithChildren<TextProps>): JSX.Element =>
  <p className={cn(s.subtitle, className)} {...props}>{children}</p>;
