import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import bg from "../img/bg.jpg"
import "./MainLayout.css"
import {ThemeContext} from "../hoc";

const MainLayout = () => {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`MainLayout ${theme}`}
             style={{backgroundImage: `url(${bg})`}}>
            <div>
                <Header/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};