import React from 'react';

function Index({text,fonction}) {
    return (
        <button className="form-button" onClick={fonction}>{text}</button>
    );
}

export default Index;