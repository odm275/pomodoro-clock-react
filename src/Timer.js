import React from 'react';

const Timer = (props) => (
    <div>
        <h1>{props.time}</h1>
        <button onClick={props.start}>Start</button>
    </div>
);

export default Timer;