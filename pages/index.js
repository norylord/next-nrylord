import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import CardCreateForm from "../components/CardCreateForm/CardCreateForm";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Добавление товара</h1>
            <div className={styles.main__container}>
                <CardCreateForm/>
                <div className={styles.cards__container}></div>
            </div>

        </div>
    )
}
