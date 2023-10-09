import React from 'react';

import './dashboard.css';
import { NotificationsTile, TableTile } from './tiles';

export function Dashboard(): React.ReactElement {
  return (
    <div id='dashboard'>
      <TableTile />
      <NotificationsTile />
    </div>
  );
}
