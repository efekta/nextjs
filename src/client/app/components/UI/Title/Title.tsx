import cn from "classnames";

import s from './Title.module.scss';
import {TitleProps} from "./Title.props";

export const Title = ({variant = 'h2', children, className, ...props}: TitleProps): JSX.Element => {
  switch (variant) {
    case 'h1':
      return <h1 className={cn(className, s.title)} {...props}>{children}</h1>;
    case 'h2':
      return <h2 className={cn(className, s.title)} {...props}>{children}</h2>
    case 'h3':
      return <h3 className={cn(className, s.title)} {...props}>{children}</h3>
    default:
      return <></>;
  }
}
