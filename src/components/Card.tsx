import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import styles from "./Card.module.css";

const Card: React.FC = () => {
    const themeContext = useContext(ThemeContext)

    if(!themeContext){
        return
    }
    const { theme } = themeContext

  return (
    <div className='card'>
        <p>Card component</p>
    </div>
  );
};

export default Card