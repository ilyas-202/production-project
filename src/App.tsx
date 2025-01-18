import './styles/index.scss'
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense, useContext, useState } from 'react';
import { ThemeContext } from './themes/ThemeContext';
import { useTheme } from './themes/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
    const {theme, toggleTheme} = useTheme()


    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGLLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>Осайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    ) 
}