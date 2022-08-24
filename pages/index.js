import styles from '../styles/Home.module.sass'
import CardCreateForm from "../components/CardCreateForm/CardCreateForm";
import CardList from "../components/CardList/CardList";
import {CardsProvider} from "../context/Cards";
import Select from "../components/UI/Select/Select";

export default function Home() {

    return (
        <div className={styles.container}>
            <CardsProvider>

                <div className={styles.title}>
                    <h1>Добавление товара</h1>
                    <Select options={[
                        {value: 'title', name: 'По заголовку'},
                        {value: 'price', name: 'Цена (по возрастанию)'},
                        {value: 'priceDown', name: 'Цена (по убыванию)'},
                    ]}/>
                </div>
                <div className={styles.main__container}>
                    <CardCreateForm/>
                    <CardList/>
                </div>
            </CardsProvider>
        </div>
    )
}
