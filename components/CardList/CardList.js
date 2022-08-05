import styles from './CardList.module.sass'
import Card from "../Card/Card";
import {useEffect, useState} from "react";
import RequestService from "../../services/cards/RequestService";

const CardList = ({cards}) => {

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
                    />)
                : <h1>Данные загружаются</h1>}
        </div>
    );
};

export default CardList;
