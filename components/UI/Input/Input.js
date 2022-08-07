import styles from './Input.module.sass'

const Input = ({onChange, value, placeholder, name, id, type, errors, onBlur, touched, errorEnterData}) => {
    return (
        <input id={id} onChange={onChange} value={value} placeholder={placeholder} name={name} type={type}
               onBlur={onBlur}
               className={[styles.input, errorEnterData ? styles.input__error : null].join(' ')}/>
    );
};

export default Input;
