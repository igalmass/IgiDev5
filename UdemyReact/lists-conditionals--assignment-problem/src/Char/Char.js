import React from 'react';


const char = (props) => {
    const style = {
        display: 'inline-block',
        border: '1px solid black',
        padding: '17px',
        margin: '17px',
        textAlign: 'center'
    }


    return <div style={style} onClick={props.click}>{props.theChar}</div>

}

export default char;