import React from 'react';
import styles from './Header.module.css'

const Header = () => {

    return (
        <div className={styles.Root}>
            <div className={styles.TextWrapper}>
                <span className={styles.Title}>Глеб и Алена</span>
                <div className={styles.TitleMobile}>
                    <span>Глеб</span>
                    <span>и</span>
                    <span>Алена</span>
                </div>
                <span className={styles.Date}>23.08.2024</span>
            </div>
            <div className={styles.Background}>
                <div className={styles.BgLeft}></div>
                <div className={styles.BgCenter}></div>
                <div className={styles.BgRight}></div>
            </div>
        </div>
    );
};

export default Header;