import React from 'react';

function Index({text,handleClick,type}) {
    return (
        <button className="form-button" onClick={handleClick} type={type}>{text}</button>
    );
}

export default Index;