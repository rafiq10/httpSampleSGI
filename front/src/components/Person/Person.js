import React from 'react';

const person = (props) => (
  <tr key={props.name} onClick={props.clicked}><td>{props.name}</td></tr>
)

export default person;