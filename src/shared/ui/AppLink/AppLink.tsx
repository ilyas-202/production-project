import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss'
import { classNames } from "shared/lib/classNames/classNames";
import { FC } from 'react';

export enum AppLinkTheme {
    PRiMARY = 'primary',
    SECONDERY = 'secondery',
    RED = 'red'

}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, theme = AppLinkTheme.PRiMARY, ...otherProps} = props
    return (
        <Link to={to}  className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
        {children}
        </Link>
    );
};