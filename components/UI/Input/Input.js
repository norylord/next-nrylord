import styles from './Input.module.sass'

const Input = ({onChange, value, placeholder, name}) => {
    return (
        <input onChange={onChange} value={value} placeholder={placeholder} name={name} className={styles.input}/>
    );
};

export default Input;
