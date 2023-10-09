import React from 'react';

import { useNotifications } from '../../iterations';
import { Item } from './item';

export function ItemList(): React.ReactElement {
  const notifications = useNotifications();

  return (
    <div id='navigation-list'>
      <Item active title='Dashboard' />
      <Item title='Profile' />
      <Item title='Settings' />
      <Item title='Notifications' badge={notifications.length} />

      <Item title='...' />
    </div>
  );
}
