import React, {FC, PropsWithChildren} from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css'
import {ThemeSwitcher} from "./ThemeSwitcher";
import {useAppContext} from "../../hooks";

interface IProps extends PropsWithChildren{

}

const Header:FC<IProps> = () => {

    const context = useAppContext();

    const headerTitle = context.pageTitle;

    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            <div><button onClick={(e)=> {
                e.preventDefault();
                navigate(-1)}}>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nO2YvW0CQRQGP+ogIyIjIzNCoh4QRpRgAjdARkhKSAGE14f/GnCAsMZaEVoIdi/gfXinghlpb2/fkyqVSuVfAcyBD+ALmMkJ4JW/jGQsn1jKWD4xVmSAFZdpgI5M5RMTGcsfZCwf9/bhNvm9jOUTQxnL72Qs/wMMZCqf2MpY/gT0ZSqf2MhY/gj0FAHgmXzWigLnYSSHb6CrKADv7gFznI9QAnix/YhbRMS5RgsjYv3ICiNiPSUKIuI95goi4j2nCyLiDTSZETFHysyImEN9RkTctUpGxETmEU3o1eJDLHcfYr1+JeJJTgAL4BN4A6b39qlUKhW14hfWB6JZZTUnTAAAAABJRU5ErkJggg==" alt={"back"}/></button></div>
            <NavLink to={'movies'}>All Movies</NavLink>
            <div className={css.HeaderTitle}>{headerTitle}</div>
            <NavLink to={'genres'}>Genres</NavLink>
            <ThemeSwitcher />
        </div>
    );
};

export {Header};