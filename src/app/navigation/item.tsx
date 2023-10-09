import React from 'react';

export interface ItemProps {
  title: string;
  active?: boolean;
  badge?: number;
}

export function Item({ title, active, badge }: ItemProps): React.ReactElement {
  return (
    <a className={`navigation-item${active ? ' active' : ''}`}>
      {`${title} ${badge ? ` (${badge === -1 ? '⏳' : badge})` : ''}`}
    </a>
  );
}
