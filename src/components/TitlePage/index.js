import React from "react";

/* On peut utiliser (props) et {props.title} a la place de {title} */
const Index = ({title}) => {
    return(
        <h1 className="title-page">{title}</h1>
    );
}

export  default Index;