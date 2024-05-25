import React from 'react';
import styles from './Questions.module.css'

const Questions = () => {
    return (
        <div className={styles.Root} id="questions">
            <div className={styles.Container}>
                <h1 className={styles.Title}>Отвечаем на ваши вопросы</h1>

                <p className={styles.Question}>Будет ли дресс-код?</p>
                <p className={styles.Answer}>Для нас самое главное - ваше присутствие! Но мы будем рады, если девушки выберут вечерние или коктейльные платья в розово-бежевых оттенках, а мужчины — костюм в любых оттенках.</p>
                <div className={styles.Colors}>
                    <div className={`${styles.Color} ${styles.Color1}`}></div>
                    <div className={`${styles.Color} ${styles.Color2}`}></div>
                    <div className={`${styles.Color} ${styles.Color3}`}></div>
                    <div className={`${styles.Color} ${styles.Color4}`}></div>
                    <div className={`${styles.Color} ${styles.Color5}`}></div>
                </div>

                <p className={styles.Question}>Будет ли продолжение банкета?</p>
                <p className={styles.Answer}>Да, после банкета все гости могут остаться на ночь. В этой же усадьбе планируется второй день свадьбы в менее официальной обстановке.</p>

                <p className={styles.Question}>Нужно ли взять что-то с собой?</p>
                <p className={styles.Answer}>Хорошее настроение и удобную одежду, купальник для второго дня.</p>

                <p className={styles.Question}>Возможно ли приехать на своем автомобиле?</p>
                <p className={styles.Answer}>Да, на территории ЗАГСа и усадьбы имеется парковка.</p>

                <p className={styles.Question}>Нужно ли дарить цветы?</p>
                <p className={styles.Answer}>В этом нет необходимости. На мероприятии будет достаточно цветов.</p>

                <p className={styles.Question}>Можно ли не ехать на регистрацию?</p>
                <p className={styles.Answer}>Да, вы можете приехать сразу на банкет.</p>

                <p className={styles.Question}>Кому можно задать вопросы по организации мероприятия?</p>
                <p className={styles.Answer}>Любые вопросы вы можете задать нам.</p>
                <p className={styles.Answer}>София: +7(906)325-89-14</p>
                <p className={styles.Answer}>Ильфат: +7(939)380-87-54</p>
            </div>
        </div>
    );
};

export default Questions;