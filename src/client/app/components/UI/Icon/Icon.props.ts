import { SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  icon: string;
  width?: string | number;
  height?: string | number;
}
