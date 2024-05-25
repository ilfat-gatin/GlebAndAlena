import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.Root}>
            <div className={styles.TextWrapper}>
                <span className={styles.Title}>София и Ильфат</span>
                <div className={styles.TitleMobile}>
                    <span>София</span>
                    <span>и</span>
                    <span>Ильфат</span>
                </div>
                <span className={styles.Date}>17.07.2023</span>
            </div>
        </div>
    );
};

export default Header;