import { IconProps } from './Icon.props';

export const Icon = ({ width, height, icon, className, ...props }: IconProps): JSX.Element =>
    <svg width={width} height={height} {...props}>
        <use href={`./sprite/sprite.svg#${icon}`} />
    </svg>;
