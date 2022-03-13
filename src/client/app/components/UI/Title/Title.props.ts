import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>{
  variant?: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}
