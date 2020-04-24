import React from 'react';

const listItem = (props) => (
    <ul>{ props.items.map((item, index) => <li key={index}>{item}</li>) }
  </ul>
);

export default listItem;