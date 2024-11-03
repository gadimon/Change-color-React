import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeButton: React.FC = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return null; 
    }

    const { theme, toggleTheme } = themeContext;

    return (
        <button
            className={`button ${theme === 'light' ? 'light-theme' : 'dark-theme'}`}
            onClick={toggleTheme}
        >
            Toggle Theme
        </button>
    );
};

export default ThemeButton;
