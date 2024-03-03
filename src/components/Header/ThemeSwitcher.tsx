import React, {useContext, useState} from 'react';

import "./themeSwitcher.css"
import {ThemeContext} from "../../hoc";


const ThemeSwitcher = () => {

    const {theme, changeTheme} = useContext(ThemeContext);

    return (
            <div className={theme}>
                <div className="TumblerWrapper" onClick={()=>{changeTheme()}}>
                    <div className="Tumbler">
                    </div>
                </div>
            </div>
    );
};

export {ThemeSwitcher};