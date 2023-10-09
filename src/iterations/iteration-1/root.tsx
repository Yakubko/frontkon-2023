import React from 'react';

import { App } from '../../app';

import { LanguageContext, useContextValue } from '../shared';

export function Root(): React.ReactElement {
  const { notifications, addNotification } = useContextValue();

  return (
    <LanguageContext.Provider value={{ notifications, addNotification }}>
      <App />
    </LanguageContext.Provider>
  );
}
