import React from "react";
import styles from "./index.module.scss";

/* On peut utiliser (props) et {props.title} a la place de {title} */
const Index = ({title}) => {
    return(
        <h1 className={styles.Title__main}>{title}</h1>
    );
}

export  default Index;
