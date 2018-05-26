import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: '#aaa'
    }    

    return <input type="text" style={style} onChange={props.userNameChangedHandler} value={props.userName} />

}

export default userInput;