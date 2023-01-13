import React from 'react';
import styles from './index.module.scss'
function Index({alertContent,alertType,alertState}) {
        return (
            <div className={`${styles.alert__main} ${styles[alertType]} ${styles[alertState]}`}>
                <p>{alertContent}</p>
            </div>
        );
}

export default Index;