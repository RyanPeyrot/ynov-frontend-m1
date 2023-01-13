import React from 'react';
import styles from"./index.module.scss";
const Index = ({name,content}) => {
    return (
        <div className={styles.filed__wrapper}>
            <p className={styles.field__name}>{name}</p>
            <p className={styles.field__content}>{content}</p>
        </div>
    );
};

export default Index;