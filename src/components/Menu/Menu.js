import React from 'react';
import styles from './Menu.module.css'

const Menu = () => {
    return (
        <div className={styles.Root}>
            <div className={styles.Container}>
                <a href="#invite">Приглашение</a>
                <a href="#programm">Программа дня</a>
                <a href="#questions">Вопросы</a>
                <a href="#ceremony">Церемония</a>
                <a href="#banket">Банкет</a>
            </div>
        </div>
    );
};

export default Menu;