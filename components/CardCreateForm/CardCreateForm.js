import styles from "./CardCreateForm.module.sass";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {useContext, useEffect, useState} from "react";
import {CardsContext} from "../../context/Cards";

const CardCreateForm = () => {

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [price, setPrice] = useState()

    const {cardsActions} = useContext(CardsContext)

    const createCard = (e, name, desc, image, price) => {
        const date = new Date()
        e.preventDefault();


        const newCard = {
            id: date.getTime(),
            title: name,
            description: desc,
            image: image,
            price: price,
            currency: 'RUB'
        }
        setName('')
        setDesc('')
        setImage('')
        setPrice('')
        cardsActions.addCard(newCard)
    }

    return (
        <form className={styles.form__container} onSubmit={(e) => createCard(e, name, desc, image, price)}>
            <div className={styles.form__input}>
                <label htmlFor="cardName" className={styles.form__input__label}>Название товара</label>
                <Input onChange={(e) => setName(e.target.value)} name='cardName'
                       placeholder='Введите наименование товара' id='cardName' value={name}/>
            </div>
            <div className={styles.form__description__input}>
                <label htmlFor="cardName" className={styles.form__input__label}>Описание товара</label>
                <textarea onChange={(e) => setDesc(e.target.value)} placeholder='Введите описание товара' value={desc}/>
            </div>
            <div className={styles.form__input}>
                <label htmlFor="cardName" className={styles.form__input__label}>Ссылка на изображение
                    товара</label>
                <Input name='cardName' placeholder='Введите ссылку' id='cardName' value={image}
                       onChange={(e) => setImage(e.target.value)}/>
            </div>
            <div className={styles.form__input}>
                <label htmlFor="cardName" className={styles.form__input__label}>Цена товара</label>
                <Input name='cardName' placeholder='Введите цену' id='cardName' value={price}
                       onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <Button type="submit" title={'Добавить товар'}/>
        </form>
    );
};

export default CardCreateForm;
