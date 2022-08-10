import styles from '../styles/Home.module.sass'
import CardCreateForm from "../components/CardCreateForm/CardCreateForm";
import CardList from "../components/CardList/CardList";
import {CardsProvider} from "../context/Cards";

export default function Home() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Добавление товара</h1>
            <div className={styles.main__container}>
                <CardsProvider>
                    <CardCreateForm/>
                    <CardList/>
                </CardsProvider>
            </div>
        </div>
    )
}
