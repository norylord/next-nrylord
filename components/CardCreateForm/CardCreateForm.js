import styles from "./CardCreateForm.module.sass";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const CardCreateForm = () => {
    return (
        <div className={styles.form__container}>
            <div className={styles.form__input}>
                <label htmlFor="cardName" className={styles.form__input__label}>Название товара</label>
                <Input name='cardName' placeholder='Введите наименование товара' id='cardName'/>
            </div>
            <div className={styles.form__description__input}>
                <label htmlFor="cardName" className={styles.form__input__label}>Описание товара</label>
                <textarea placeholder='Введите описание товара'/>
            </div>
            <div className={styles.form__input}>
                <label htmlFor="cardName" className={styles.form__input__label}>Ссылка на изображение
                    товара</label>
                <Input name='cardName' placeholder='Введите ссылку' id='cardName'/>
            </div>
            <div className={styles.form__input}>
                <label htmlFor="cardName" className={styles.form__input__label}>Цена товара</label>
                <Input name='cardName' placeholder='Введите цену' id='cardName'/>
            </div>
            <Button title={'Добавить товар'}/>
        </div>
    );
};

export default CardCreateForm;
