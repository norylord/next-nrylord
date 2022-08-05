import styles from '../styles/Home.module.sass'
import CardCreateForm from "../components/CardCreateForm/CardCreateForm";
import CardList from "../components/CardList/CardList";
import {useEffect, useState} from "react";
import RequestService from "../services/cards/RequestService";

export default function Home() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        localStorage.setItem('cards', JSON.stringify(cards))
    }, [cards])

    useEffect(() => {
        const data = localStorage.getItem('cards')
        if (data) {
            setCards(JSON.parse(data))
        } else {
            localStorage.setItem("cards", JSON.stringify(RequestService.getCards()));
        }
    }, [])


    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Добавление товара</h1>
            <div className={styles.main__container}>
                <CardCreateForm cards={cards} setCards={setCards}/>
                <CardList cards={cards}/>
            </div>
        </div>
    )
}
