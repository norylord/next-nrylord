import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import CardCreateForm from "../components/CardCreateForm/CardCreateForm";
import CardList from "../components/CardList/CardList";

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Добавление товара</h1>
            <div className={styles.main__container}>
                <CardCreateForm/>
                <CardList/>
            </div>
        </div>
    )
}
