import React from 'react';
import styles from './Banket.module.css'
import svg from '../../assets/images/shampagne.jpg'

const Banket = () => {
    return (
        <div className={styles.Root} id="banket">
            <div className={styles.Container}>
                <h1 className={styles.Title}>Банкет</h1>
                <img src={svg} alt="" className={styles.Img}/>
                <h2 className={styles.SubTitle}>Усадьба Голубочка</h2>
                <p className={styles.Adress}>Московская область, д. Горки Сухаревские, ул Центральная 66</p>
            </div>
            <iframe
                title="banket"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A1192e3590a9da3a20542e63cb8c9fcf41c9a5d5cce050252cef652f9d23d81d6&amp;source=constructor"
                width="100%" height="400" frameBorder="0"></iframe>
        </div>
    );
};

export default Banket;