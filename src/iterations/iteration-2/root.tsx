import React from 'react';

import { App } from '../../app';

import { LanguageContext, useContextValue } from '../shared';

function NotificationsProvider({ children }: React.PropsWithChildren): React.ReactElement {
  const value = useContextValue();

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function Root(): React.ReactElement {
  return (
    <NotificationsProvider>
      <App />
    </NotificationsProvider>
  );
}
