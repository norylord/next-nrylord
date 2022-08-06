import styles from './Card.module.sass'
import {CardsContext} from "../../context/Cards";
import {useContext} from "react";

const Card = ({title, image, desc, price, currency, id}) => {
    const cardClass = styles.card
    const bodyClass = styles.card__body
    const titleClass = [styles.card__title, 'text_title'].join(' ')
    const descClass = [styles.card__description, 'text_p'].join(' ')
    const priceClass = [styles.card__price, 'text_price'].join(' ')

    const {cardsActions} = useContext(CardsContext)

    const cardPrice = parseInt(price).toLocaleString("ru", {
        style: "currency",  // определяем объект со свойствами, определяющими параметры сравнения
        currency: currency,
        currencyDisplay: 'code',
        maximumFractionDigits: 0,
    })

    const checkForImage = (url) => {
        const reg = /(http[s]?:\/\/.*\.(?:png|jpg|gif|svg|jpeg))/i
        if (url.match(reg)) {
            return <img
                src={url}
                alt={title}
            />
        }
        return <div className={styles.imgError}>Картинка не валидна</div>

    }

    return (
        <div className={cardClass}>
            {
                checkForImage(image)
            }
            <div className={bodyClass}>
                <p className={titleClass}>{title}</p>
                <p className={descClass}>{desc}</p>
                <p className={priceClass}>{cardPrice}</p>
                <button onClick={() => cardsActions.removeCard(id)}>Удалить</button>

            </div>
        </div>
    );
};

export default Card;
