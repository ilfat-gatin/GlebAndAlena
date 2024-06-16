import React from 'react';
import styles from './Menu.module.css'

const Menu = () => {
    const menuRef = React.useRef();

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 800) {
                menuRef.current.style.display = 'flex'
            } else {
                menuRef.current.style.display = 'none'
            }
        })
    }, [])

    return (
        <div className={styles.Root} ref={menuRef}>
            <div className={styles.Container}>
                <a href="#invite">Приглашение</a>
                <a href="#programm">Программа дня</a>
                <a href="#questions">Вопросы</a>
                <a href="#banket">Банкет</a>
            </div>
        </div>
    );
};

export default Menu;