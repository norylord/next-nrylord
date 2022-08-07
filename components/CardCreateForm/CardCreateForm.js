import styles from "./CardCreateForm.module.sass";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {useContext, useEffect, useState} from "react";
import {CardsContext} from "../../context/Cards";
import {Form, Formik, Field, ErrorMessage, useFormik} from "formik";
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
        cardName: Yup.string().min(3).required('Поле обязательно для ввода'),
        cardDescription: Yup.string(),
        cardImage: Yup.string().required('Поле обязательно для ввода'),
        cardPrice: Yup.number().positive().integer().required('Поле обязательно для ввода')
    })

    const initialValues = {
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardPrice: '',
    }

    const {values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting} = useFormik(
        {
            initialValues: initialValues,
            validationSchema: validationSchema,
            onSubmit,
        }
    )

    console.log(errors)
    return (
        <form className={styles.form__container} autoComplete='off' onSubmit={handleSubmit}>
            <div className={styles.form__input}>
                <label htmlFor="cardName" className={styles.form__input__label}>Название товара</label>
                <Input onChange={handleChange} name='cardName'
                       placeholder='Введите наименование товара' id='cardName' value={values.cardName}
                       errorEnterData={errors.cardName && touched.cardName} onBlur={handleBlur}
                />
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
                    товара</label>
                <Input name='cardImage' placeholder='Введите ссылку' id='cardImage' value={values.cardImage}
                       onChange={handleChange} touched={touched.cardImage} onBlur={handleBlur}
                       errorEnterData={errors.cardImage && touched.cardImage}
                />
            </div>
            <div className={styles.form__input}>
                <label htmlFor="cardPrice" className={styles.form__input__label}>Цена товара</label>
                <Input type="number" name='cardPrice' placeholder='Введите цену' id='cardPrice'
                       value={values.cardPrice} onChange={handleChange} errors={errors.cardPrice}
                       touched={touched.cardPrice} onBlur={handleBlur}
                       errorEnterData={errors.cardPrice && touched.cardPrice}
                />
            </div>
            <Button disabled={Object.keys(errors).length !== 0} type="submit" title={'Добавить товар'}/>
        </form>
    );
};

export default CardCreateForm;
