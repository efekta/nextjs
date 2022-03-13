import { PropsWithChildren } from 'react';
import cn from 'classnames';

import s from './Subtitle.module.scss';
import { SubtitleProps } from './Subtitle.props';

export const Subtitle = ({ children, className, ...props }: PropsWithChildren<SubtitleProps>): JSX.Element =>
  <p className={cn(s.subtitle, className)} {...props}>{children}</p>;
