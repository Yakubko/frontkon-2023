import React from 'react';

import './navbar.css';
import { useNotifications } from '../../iterations';

export function Navbar(): React.ReactElement {
  const notifications = useNotifications();
  return (
    <div id='navbar'>
      <div id='navbar-breadcrumb'>Dashboard</div>
      <div id='navbar-actions'>
        <div>
          <input placeholder='Search here' />
        </div>
        <div>Notification ({notifications.length})</div>
      </div>
    </div>
  );
}
