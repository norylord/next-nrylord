import React, {useContext} from 'react';
import {CardsContext} from "../../../context/Cards";
import styles from './Select.module.sass'

const Select = ({options, onChange, value}) => {
    const {cardsActions} = useContext(CardsContext)
    return (
        <select
            className={styles.select}
            onChange={e => cardsActions.sortCards(e.target.value)}
        >
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default Select;