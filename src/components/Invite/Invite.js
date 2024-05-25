import React from 'react';
import emailjs from '@emailjs/browser'
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from './Invite.module.css';
import heart from '../../assets/images/heart.jpg';
import close from '../../assets/icons/closeIcon.svg';
import Modal from 'react-modal';

Modal.setAppElement('#root')
Modal.defaultStyles.overlay.backgroundColor = '#ffffffe6'


const Invite = () => {
    const [isApproved, setIsApproved] = React.useState(false)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [width, setWidth] = React.useState(document.documentElement.clientWidth);
    const formRef = React.useRef()
    let subtitle;

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            height: width < 600 ? "100%" : "",
            width: width < 600 ? "100%" : ""
        },
    };

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(document.documentElement.clientWidth)
        })
    }, [])

    function handleApprove() {
        setIsApproved(true);
        openModal()
    }

    function handleDecline() {
        setIsApproved(false);
        openModal()
    }
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = 'black';
        subtitle.style.textAlign = 'center';
        subtitle.style.marginBottom = '1rem'
    }

    function closeModal() {
        setIsOpen(false);
    }

    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('service_w8i9szg', 'template_ctniyue', formRef.current, 'hPdbqVl2XXXwzEPN_')
            .then(() => {
                setIsOpen(false)
                showSuccessToast()
            }, () => {
                setIsOpen(false)
                showErrorToast()
            })
    }

    function showSuccessToast() {
        toast.success('Ваш ответ успешно отправлен!', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    function showErrorToast(){
        toast.error('Ошибка! Пожалуйста, свяжитесь с Ильфатом, его контакты вы можете найти в разделе "Вопросы".', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    return (
        <div id="invite" className={styles.Root}>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
            />
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className={styles.ModalContent}>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{isApproved ? "Я принимаю приглашение" : "Не смогу быть"}</h2>
                    <button onClick={closeModal} className={styles.CloseBtn}>
                        <img src={close} alt="close"/>
                    </button>
                    <form ref={formRef} onSubmit={sendEmail}>
                        {isApproved && <div>
                            <div className={styles.InputWrapper}>
                                <label htmlFor="name">Ваше имя</label>
                                <input required name="name" type='text' id='name' placeholder='Ваше имя'
                                       className={styles.Input}/>
                            </div>
                            <div className={styles.InputWrapper}>
                                <label htmlFor="count">Количество персон</label>
                                <select required name="count" id="count" className={styles.Input}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                            <div className={styles.InputWrapper}>
                                <p>Останетесь на ночь /на второй день?</p>
                                <div className={styles.Flex}>
                                    <input type="radio" id="nightYes" name="night" value="Да"/>
                                    <label htmlFor="nightYes">Да</label>
                                    <input type="radio" id="nightNo" name="night" value="Нет"/>
                                    <label htmlFor="nightNo">Нет</label>
                                </div>
                            </div>
                            <div className={styles.InputWrapper}>
                                <p>Предпочтения по алкоголю</p>
                                <div className={styles.Flex}>
                                    <input type="checkbox" id='shampain' name="shampain" value="Шампанское"/>
                                    <label htmlFor="shampain">Шампанское</label>
                                    <input type="checkbox" id='wine' name="wine" value="Вино"/>
                                    <label htmlFor="wine">Вино</label>
                                    <input type="checkbox" id='strong' name="strong" value="Крепкое"/>
                                    <label htmlFor="strong">Крепкий алкоголь</label>
                                </div>
                            </div>
                            <div className={styles.InputWrapper}>
                                <label htmlFor="message" className={styles.Message}>Сообщение молодоженам</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className={styles.Textarea}
                                    placeholder="Молодожены получат ваше сообщение"></textarea>
                            </div>
                            <button type='submit' className={styles.SubmitBtn}>Отправить</button>
                        </div>}
                        {!isApproved && <div>
                            <div className={styles.InputWrapper}>
                                <label htmlFor="name">Ваше имя</label>
                                <input name="name" type='text' id='name' placeholder='Ваше имя'
                                       className={styles.Input}/>
                            </div>
                            <div className={styles.InputWrapper}>
                                <label htmlFor="message" className={styles.Message}>Сообщение молодоженам</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className={styles.Textarea}
                                    placeholder="Молодожены получат ваше сообщение"></textarea>
                            </div>
                            <button type='submit' className={styles.SubmitBtn}>Отправить</button>
                        </div>}
                    </form>
                </div>
            </Modal>
            <div className={styles.Container}>
                <h1 className={styles.Title}>Дорогие друзья!</h1>
                <p className={styles.Text}>Мы создаем семью и хотим провести этот день в кругу близких людей.</p>
                <p className={styles.Text}>Мы будем рады, если вы разделите это событие с нами!</p>
                <p className={styles.Text}>Пожалуйста, подтвердите или отклоните участие.</p>
                <div className={styles.BtnWrapper}>
                    <button className={styles.DeclineBtn} onClick={handleDecline}>Отклонить</button>
                    <img src={heart} alt="" className={styles.Img}/>
                    <button className={styles.ApproveBtn} onClick={handleApprove}>Подтвердить</button>
                </div>
            </div>
        </div>
    );
};

export default Invite;