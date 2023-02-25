import React from 'react';
import styles from './index.module.scss'
import close from '../../../public/close.png'

const Index = ({modalTitle,show,children, handleModal, clearFilter,validFilter}) => {

    return ( show &&
            <div className={styles.wrapper}>
                <div onClick={handleModal} className={styles.overlay}></div>
                <div className={`${styles.modal__main}`}>
                    <div className={styles.modal__header}>
                        <div onClick={handleModal} className={styles.closeBtn}><img src={close.src}/></div>
                        <h1>{modalTitle}</h1>
                        <div></div>
                    </div>
                    <div className={styles.modal__content}>
                        {children}
                    </div>
                    <div className={styles.modal__footer}>
                        <div onClick={clearFilter} className={styles.clearBtn}>Clear</div>
                        <div onClick={validFilter} className={styles.validBtn}>Display result(s)</div>
                    </div>
                </div>
            </div>
    );
};

export default Index;