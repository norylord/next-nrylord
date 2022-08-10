import styles from './CardList.module.sass'
import Card from "../Card/Card";
import {useContext} from "react";
import {CardsContext} from "../../context/Cards";

const CardList = () => {
    const {cards} = useContext(CardsContext)

    return (
        <div className={styles.card__list}>
            {cards.length
                ? cards.map(card =>
                    <Card
                        key={card.id}
                        title={card.title}
                        price={card.price}
                        desc={card.description}
                        image={card.image}
                        currency={card.currency}
                        id={card.id}
                    />)
                : <h1>Данные загружаются</h1>}
        </div>
    );
};

export default CardList;
