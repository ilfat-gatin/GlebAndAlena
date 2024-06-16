import React from 'react';
import styles from './Questions.module.css'

const Questions = () => {
    return (
        <div className={styles.Root} id="questions">
            <div className={styles.Container}>
                <h1 className={styles.Title}>Отвечаем на ваши вопросы</h1>

                <p className={styles.Question}>Будет ли дресс-код?</p>
                <p className={styles.Answer}>Для нас самое главное - ваше присутствие! Но мы будем рады, если девушки выберут вечерние или коктейльные платья в указанных оттенках, а мужчины — костюм в любых оттенках.</p>
                <div className={styles.Colors}>
                    <div className={`${styles.Color} ${styles.Color1}`}></div>
                    <div className={`${styles.Color} ${styles.Color2}`}></div>
                    <div className={`${styles.Color} ${styles.Color3}`}></div>
                    <div className={`${styles.Color} ${styles.Color4}`}></div>
                    <div className={`${styles.Color} ${styles.Color5}`}></div>
                    <div className={`${styles.Color} ${styles.Color6}`}></div>
                </div>

                <p className={styles.Question}>Возможно ли приехать на своем автомобиле?</p>
                <p className={styles.Answer}>Да, на территории ресторана имеется парковка.</p>

                <p className={styles.Question}>Кому можно задать вопросы по организации мероприятия?</p>
                <p className={styles.Answer}>Любые вопросы вы можете задать нам.</p>
                <p className={styles.Answer}>Глеб: +7(995)506-42-11</p>
                <p className={styles.Answer}>Алена: +7(986)738-10-47</p>
            </div>
        </div>
    );
};

export default Questions;