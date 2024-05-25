import React from 'react';
import styles from './Programm.module.css'

const Programm = () => {
    return (
        <div className={styles.Root} id="programm">
            <div className={styles.Container}>
                <h1 className={styles.Title}>Программа дня</h1>
                <div className={styles.ProgrammItem1}>
                    <div className={styles.Left}>
                        <h2 className={styles.ItemTitle}>Регистрация</h2>
                        <table className={styles.Table}>
                            <tbody>
                                <tr>
                                    <td>Дата</td>
                                    <td>17 июля 2023 года</td>
                                </tr>
                                <tr>
                                    <td>Время</td>
                                    <td>15:30-16:00 (сбор 14:30)</td>
                                </tr>
                                <tr>
                                    <td>Место проведения</td>
                                    <td>Отдел ЗАГС Московский областной Дворец бракосочетания № 2</td>
                                </tr>
                                <tr>
                                    <td>Адрес</td>
                                    <td>Московская область, г. Красногорск, ул Международная 12 (ТЦ Вегас)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={styles.Right}></div>
                </div>
                <div className={styles.ProgrammItem2}>
                    <div className={styles.Left2}></div>
                    <div className={styles.Right2}>
                        <h2 className={styles.ItemTitle}>Банкет</h2>
                        <table className={styles.Table}>
                            <tbody>
                            <tr>
                                <td>Дата</td>
                                <td>17 июля 2023 года</td>
                            </tr>
                            <tr>
                                <td>Время</td>
                                <td>18:00-23:00 <br/> (сбор 17:00-17:30)</td>
                            </tr>
                            <tr>
                                <td>Место проведения</td>
                                <td>Усадьба "Голубочка"</td>
                            </tr>
                            <tr>
                                <td>Адрес</td>
                                <td>Московская область, д. Горки Сухаревские, ул Центральная 66</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programm;