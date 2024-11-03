import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from "./Header.module.css";

const Header: React.FC = () => {
    const themeContext = useContext(ThemeContext)

    if(!themeContext){
        return
    }
    const { theme } = themeContext

  return (
    <header className='header'>
        <h1>Theme Switcher</h1>
    </header>
  );
};

export default Header