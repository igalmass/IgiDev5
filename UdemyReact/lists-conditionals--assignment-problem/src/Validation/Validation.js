import React from 'react';

const validation = (props) => {
    const MIN_LENGTH = 10;

    let textToDisplay = '';
    if (props.theTextLength < MIN_LENGTH){
        textToDisplay = "Text is too short"    
    } else {
        textToDisplay = "Text is too long";
    }

    return <div>{textToDisplay}</div>;
}

export default validation;