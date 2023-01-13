import React from 'react';
import styles from './index.module.scss'

function Index({text,handleClick,type,btnClass}) {
    return (
        <button className={btnClass} onClick={handleClick} type={type}>{text}</button>
    );
}

export default Index;