import React from 'react'
import styles from './Ceremony.module.css'
import img from '../../assets/images/wedding-rings.svg'

const Ceremony = () => {
    return (
        <div className={styles.Root} id="ceremony">
            <div className={styles.Container}>
                <h1 className={styles.Title}>Церемония</h1>
                <img src={img} alt="" className={styles.Img}/>
                <h2 className={styles.SubTitle}>Отдел ЗАГС Московский областной Дворец бракосочетания № 2</h2>
                <p className={styles.Adress}>Московская область, г. Красногорск, ул Международная 12 (ТЦ Вегас, 6 этаж)</p>
            </div>
            <iframe
                title="ceremony"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab54006330a16f69f3962b145ed3cb2c41fa6c9bb365df77a424f71cb83ab2a01&amp;source=constructor"
                width="100%" height="400" frameBorder="0"></iframe>
        </div>
    );
};

export default Ceremony;