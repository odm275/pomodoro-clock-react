import React from 'react';

const Add = (props) =>  (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.setTime}</h2>
        <button onClick={props.sub}>-</button>
        <button onClick={props.add}>+</button>
    </div>
);

export default Add;