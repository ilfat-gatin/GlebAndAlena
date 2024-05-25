import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.Root}>
            <div className={styles.Container}>
                <span className={styles.Title}>София и Ильфат</span>
                <p className={styles.Text}>Сайт-приглашение на свадьбу</p>
            </div>
        </div>
    );
};

export default Footer;