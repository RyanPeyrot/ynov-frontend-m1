import React from 'react';
import styles from './index.module.scss'

const Index = ({titleLabel,type,placeholder, inputName,inputValue,inputOnChange}) => {
    return (
        <div className={styles.input__wrapper}>
            <label htmlFor={inputName}>{titleLabel}</label>
            <input
                className="input-form"
                name={inputName}
                type={type}
                placeholder={placeholder != null ? placeholder :  titleLabel}
                value={inputValue}
                onChange={inputOnChange}
            />
        </div>
    );
};

export default Index;