import styles from './Button.module.sass'

const Button = ({title, disabled, onClick}) => {
    return (
        <button className={styles.button} disabled={disabled} onClick={onClick}>
            {title}
        </button>
    );
};
export default Button;
