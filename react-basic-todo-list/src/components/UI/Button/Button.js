import React from 'react';

import './Button.css';

const button = (props) => (
    <button className="Button" onClick={props.clicked}>Add</button>
);

export default button;