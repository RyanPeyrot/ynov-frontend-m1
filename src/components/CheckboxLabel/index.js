import React, {createRef} from 'react';
import styles from './index.module.scss'

const Index = ({label,id,defaultChecked,onChange}) => {
    let chBoxRef = createRef;
    return (
        <div>
            <input ref={chBoxRef} onChange={onChange} className={styles.chInput} type={"checkbox"} value={label} defaultChecked={defaultChecked}/>
            <label className={styles.chLabel} key={id} htmlFor={id}>{label}</label>
        </div>
    );
};

export default Index;