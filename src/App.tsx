import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";



const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={`app ${theme}`}>
            <button style={{color: "red", margin: '10px'}} onClick={toggleTheme}>TOGGLE</button>
             <Link style={{  margin: '10px'}} to={'/'}>Main </Link>
            <Link to={'/about'} >About </Link>
            <Suspense fallback={null}>
            <Routes>
                <Route  path={'/about'} element={<AboutPageAsync />}/>
                <Route  path={'/'} element={<MainPageAsync />}/>
            </Routes>
            </Suspense>
        </div>
    );
};

export default App;