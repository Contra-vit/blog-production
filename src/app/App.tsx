import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {className} from "shared/lib/classNames/className";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";



const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={className('app', {}, [theme])}>
            <button style={{color: "red", margin: '10px'}} onClick={toggleTheme}>TOGGLE</button>
             <Link style={{  margin: '10px'}} to={'/'}>Main </Link>
            <Link to={'/about'} >About </Link>
            <Suspense fallback={null}>
            <Routes>
                <Route  path={'/about'} element={<AboutPage />}/>
                <Route  path={'/'} element={<MainPage />}/>
            </Routes>
            </Suspense>
        </div>
    );
};

export default App;