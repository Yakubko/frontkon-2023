import React from 'react';

import './list.css';

interface ListProps {
  data: string[];
}

export function List({ data }: ListProps): React.ReactElement {
  return (
    <ul id='ul-list'>
      {data.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
}
