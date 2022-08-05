import styles from './Card.module.sass'

const Card = ({title, image, desc, price, currency}) => {
    const cardClass = styles.card
    const bodyClass = styles.card__body
    const titleClass = [styles.card__title, 'text_title'].join(' ')
    const descClass = [styles.card__description, 'text_p'].join(' ')
    const priceClass = [styles.card__price, 'text_price'].join(' ')

    const cardPrice = price.toLocaleString("ru", {
        style: "currency",  // определяем объект со свойствами, определяющими параметры сравнения
        currency: currency,
        currencyDisplay: 'code',
        maximumFractionDigits: 0,
    })
    return (
        <div className={cardClass}>
            <img
                src={image}
                alt={title}
            />
            <div className={bodyClass}>
                <p className={titleClass}>{title}</p>
                <p className={descClass}>{desc}</p>
                <p className={priceClass}>{cardPrice}</p>
            </div>
        </div>
    );
};

export default Card;
