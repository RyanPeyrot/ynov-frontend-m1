import React from 'react';
import styles from './index.module.scss'

const Index = ({modalTitle,show,children, handleModal}) => {

    return ( show &&
            <div className={styles.wrapper}>
                <div onClick={handleModal} className={styles.overlay}></div>
                <div className={`${styles.modal__main}`}>
                    <div className={styles.modal__header}>
                    <h1>{modalTitle}</h1>
                    <button onClick={handleModal} className={styles.closeBtn}>X</button>
                    </div>
                    <div className={styles.modal__content}>
                        {children}
                    </div>
                </div>
            </div>
    );
};

export default Index;