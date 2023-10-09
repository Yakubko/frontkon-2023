import React from 'react';

import { App } from '../../app';
import { NotificationsProvider } from './context';

export function Root(): React.ReactElement {
  return (
    <NotificationsProvider>
      <App />
    </NotificationsProvider>
  );
}
