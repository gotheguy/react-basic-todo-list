import React from 'react';

import './Input.css';

const handleFocus = (event) => {
    event.target.value = "";
};

const input = (props) => (
    <input className="Input" value={props.value || ''} onChange={props.onChange} onFocus={handleFocus} placeholder="Add a task" />
);

export default input;