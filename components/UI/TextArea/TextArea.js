import React from 'react';
import styles from './TextArea.module.sass'

const TextArea = ({name, id, onChange, placeholder, value, errors, onBlur, touched}) => {

    return (
        <textarea name={name} id={id} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur}
                  className={[styles.textarea, errors && touched ? styles.textarea__error : null].join(' ')}/>
    );
};

export default TextArea;
