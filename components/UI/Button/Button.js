import styles from './Button.module.sass'

const Button = ({title, ...tail}) => {
    return (
        <button className={styles.button}>
            {title}
        </button>
    );
};
export default Button;
