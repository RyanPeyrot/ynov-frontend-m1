import React from 'react';

const Index = ({titleLabel,type,placeholder, inputName,inputValue,inputOnChange}) => {
    return (
        <div>
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