import { classNames } from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [])}>
          <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDERY} to={'/'} className={cls.mainLink}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.RED} to={'/about'}>Осайте</AppLink>
          </div>
        </div>
    )
} 
 

  