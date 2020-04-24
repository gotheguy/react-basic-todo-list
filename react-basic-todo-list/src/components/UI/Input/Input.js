import React from 'react';

import './Input.css';

const input = (props) => (
    <input className="Input" value={props.value} onChange={props.onChange} placeholder="Enter a task" />
);

export default input;