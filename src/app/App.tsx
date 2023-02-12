import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/NavBar";



const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
         <Navbar/>
            <AppRouter/>
            <button style={{color: "red", margin: '10px'}} onClick={toggleTheme}>TOGGLE</button>

        </div>
    );
};

export default App;