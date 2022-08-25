import styles from "./CardCreateForm.module.sass";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {useContext} from "react";
import {CardsContext} from "../../context/Cards";
import {ErrorMessage, Field, useFormik} from "formik";
import * as Yup from "yup";
import TextArea from "../UI/TextArea/TextArea";


const CardCreateForm = () => {


    const {cardsActions} = useContext(CardsContext)

    const onSubmit = (values, action) => {
        const date = new Date()
        const newCard = {
            id: date.getTime(),
            title: values.cardName,
            description: values.cardDescription,
            image: values.cardImage,
            price: values.cardPrice,
            currency: 'RUB'
        }
        cardsActions.addCard(newCard)
        action.resetForm()
    }

    const urlReg = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/
    const validationSchema = Yup.object().shape({
        cardName: Yup.string().min(3, 'Введите минимум 3 символа').max(50, 'Максимум 50 симоволов').required('Поле обязательно для ввода'),
        cardDescription: Yup.string(),
        cardImage: Yup.string().required('Поле обязательно для ввода'),
        cardPrice: Yup.number().typeError('Введите целое значение').positive('Введите положительное значение').integer('Введите целое значение').required('Поле обязательно для ввода')
    })

    const initialValues = {
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardPrice: '',
    }

    const {values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, dirty} = useFormik(
        {
            initialValues: initialValues,
            validationSchema: validationSchema,
            onSubmit,
        }
    )

    const checkForNumber = e => {
        e.preventDefault();
        const {value} = e.target;
        const regex = new RegExp('/\d/gi');
        if (regex.test(value.toString())) {
            value.match(regex) && handleChange(e)
        }
    }
    
    return (
        <form className={styles.form__container} autoComplete='off' onSubmit={handleSubmit}>
            <div className={styles.form__input}>
                <label htmlFor="cardName" className={styles.form__input__label}>Название товара<span
                    style={{color: '#FF8484', fontSize: '12px'}}>*</span></label>
                <Input onChange={handleChange} name='cardName'
                       placeholder='Введите наименование товара' id='cardName' value={values.cardName}
                       errorEnterData={errors.cardName && touched.cardName} onBlur={handleBlur}
                />
                <div
                    className={styles.form__error_message}>
                    {errors.cardName && touched.cardName ?
                        <p>{errors.cardName}</p>
                        : <p>&nbsp;</p>
                    }
                </div>
            </div>
            <div className={styles.form__description__input}>
                <label htmlFor="cardDescription" className={styles.form__input__label}>Описание товара</label>
                <TextArea touched={touched.cardDescription} name='cardDescription' id='cardDescription'
                          onChange={handleChange}
                          placeholder='Введите описание товара'
                          errorEnterData={errors.cardDescription && touched.cardDescription}
                          value={values.cardDescription} onBlur={handleBlur}/>
            </div>
            <div className={styles.form__input}>
                <label htmlFor="cardImage" className={styles.form__input__label}>Ссылка на изображение
                    товара <span style={{color: '#FF8484', fontSize: '12px'}}>*</span></label>
                <Input name='cardImage' placeholder='Введите ссылку' id='cardImage'
                       value={values.cardImage}
                       onChange={handleChange} touched={touched.cardImage} onBlur={handleBlur}
                       errorEnterData={errors.cardImage && touched.cardImage}
                />
                <div className={styles.form__error_message}>{errors.cardImage && touched.cardImage ?
                    <p>{errors.cardImage}</p> : <p>&nbsp;</p>}</div>
            </div>
            <div className={styles.form__input}>
                <label htmlFor="cardPrice" className={styles.form__input__label}>Цена товара<span
                    style={{color: '#FF8484', fontSize: '12px'}}>*</span></label>
                <Input
                    name='cardPrice'
                    placeholder='Введите цену'
                    id='cardPrice'
                    value={values.cardPrice}
                    onChange={e => {
                        checkForNumber(e)
                    }}
                    errors={errors.cardPrice}
                    touched={touched.cardPrice} onBlur={handleBlur}
                    errorEnterData={errors.cardPrice && touched.cardPrice}
                />
                <div className={styles.form__error_message}>{errors.cardPrice && touched.cardPrice ?
                    <p>{errors.cardPrice}</p> : <p>&nbsp;</p>}</div>
            </div>

            <Button disabled={!(isValid && dirty)}
                    type="submit" title={'Добавить товар'}/>
        </form>
    );
};

export default CardCreateForm;
