import React from 'react';

const Add = (props) => (
    <div>
        <button onClick={props.sub}>-</button>
        <button onClick={props.add}>+</button>
    </div>
);

export default Add;