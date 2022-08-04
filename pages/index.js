import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Добавление товара</h1>
            <div className={styles.main__container}>
                <div className={styles.form__container}>
                    <div className={styles.form__input}>
                        <label htmlFor="cardName" className={styles.form__input__label}>Название товара</label>
                        <Input name='cardName' placeholder='Введите наименование товара' id='cardName'/>
                    </div>
                    <div className={styles.form__description__input}>
                        <label htmlFor="cardName" className={styles.form__input__label}>Описание товара</label>
                        <textarea placeholder='Введите описание товара'/>
                    </div>
                    <div className={styles.form__input}>
                        <label htmlFor="cardName" className={styles.form__input__label}>Ссылка на изображение
                            товара</label>
                        <Input name='cardName' placeholder='Введите ссылку' id='cardName'/>
                    </div>
                    <div className={styles.form__input}>
                        <label htmlFor="cardName" className={styles.form__input__label}>Цена товара</label>
                        <Input name='cardName' placeholder='Введите цену' id='cardName'/>
                    </div>
                    <Button title={'Добавить товар'}/>
                </div>
                <div className={styles.cards__container}></div>
            </div>

        </div>
    )
}
