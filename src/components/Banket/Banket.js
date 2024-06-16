import React from 'react';
import styles from './Banket.module.css'
import svg from '../../assets/images/shampagne.jpg'

const Banket = () => {
    return (
        <div className={styles.Root} id="banket">
            <div className={styles.Container}>
                <h1 className={styles.Title}>Банкетный зал</h1>
                <img src={svg} alt="" className={styles.Img}/>
                <h2 className={styles.SubTitle}>Ресторанный комплекс «Дикий»</h2>
                <p className={styles.Adress}>Республика Татарстан, д.Кзыл-Иль , улица Солнечная 1Е</p>
            </div>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab19d7667588d441151ecd42a644afe32b9edad6d2f338feeaa4ba1d385cf9b62&amp;source=constructor"
                width="100%" height="400" frameBorder="0"></iframe>
        </div>
    );
};

export default Banket;