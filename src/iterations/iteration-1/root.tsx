import React from 'react';

import { App } from '../../app';

import { LanguageContext, useContextValue } from '../shared';

export function Root(): React.ReactElement {
  const value = useContextValue();

  return (
    <LanguageContext.Provider value={value}>
      <App />
    </LanguageContext.Provider>
  );
}
