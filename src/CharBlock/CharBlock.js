import React from 'react';

const charBlock = (props) => {
    return <div className='Char'>
        <p onClick={props.deleteMe}>{props.text}</p>
    </div>
};

export default charBlock;
