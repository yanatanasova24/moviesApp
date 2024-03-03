import React, {createContext, FC, PropsWithChildren, useEffect, useState} from 'react';

const ThemeContext = createContext<any>(null);
interface IProps extends PropsWithChildren{

}

const ThemeProvider:FC<IProps> = ({children}) => {
    const getTheme = () => {
        const theme = localStorage.getItem("theme");
        if (!theme) {
            // Default theme is taken as dark-theme
            localStorage.setItem("theme", "light");
            return "light";
        } else {
            return theme;
        }
    };

    const [theme, setTheme] = useState(getTheme);

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const refreshTheme = () => {
            localStorage.setItem("theme", theme);
        };

        refreshTheme();
    }, [theme]);

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme, changeTheme }}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
};

export {ThemeProvider, ThemeContext};