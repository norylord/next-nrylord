import styles from './Button.module.sass'

const Button = ({title, ...tail}) => {
    return (
        <button className={styles.button} disabled={tail.disabled}>
            {title}
        </button>
    );
};
export default Button;
