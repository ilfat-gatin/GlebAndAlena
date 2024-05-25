import React from 'react';
import { useTimer } from "react-timer-hook";
import styles from './Timer.module.css'

const Timer = () => {
    const date = new Date("2023-07-17T15:30:00.00+03:00")
    const {
        seconds,
        minutes,
        hours,
        days
    } = useTimer({expiryTimestamp: date})

    return (
        <div className={styles.Root}>
            <div className={styles.Container}>
                <div className={styles.Item}>
                    <span className={styles.Value}>{days}</span>
                    <span className={styles.Text}>ДНЕЙ</span>
                </div>
                <div className={styles.Item}>
                    <span className={styles.Value}>{hours}</span>
                    <span className={styles.Text}>ЧАСОВ</span>
                </div>
                <div className={styles.Item}>
                    <span className={styles.Value}>{minutes}</span>
                    <span className={styles.Text}>МИНУТ</span>
                </div>
                <div className={styles.Item}>
                    <span className={styles.Value}>{seconds}</span>
                    <span className={styles.Text}>СЕКУНД</span>
                </div>
            </div>
        </div>
    );
};

export default Timer;