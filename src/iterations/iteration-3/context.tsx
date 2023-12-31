import React from 'react';

import { useContextValue, type LanguageContextValue } from '../shared';

export const LanguageContext1 = React.createContext<LanguageContextValue['notifications']>([]);
export const LanguageContext3 = React.createContext<LanguageContextValue['addNotification']>(() => {});

export function NotificationsProvider({ children }: React.PropsWithChildren): React.ReactElement {
  const { notifications, addNotification } = useContextValue();

  return (
    <LanguageContext1.Provider value={notifications}>
      <LanguageContext3.Provider value={addNotification}>{children}</LanguageContext3.Provider>{' '}
    </LanguageContext1.Provider>
  );
}

export function useNotifications(): LanguageContextValue['notifications'] {
  return React.useContext(LanguageContext1);
}

export function useAddNotification(): LanguageContextValue['addNotification'] {
  return React.useContext(LanguageContext3);
}

// Replace in ../shared/context
/*

  const addNotification = React.useCallback<LanguageContextValue['addNotification']>((notification) => {

  }, []);

// second

  setNotification((currentNotifications) => [...currentNotifications, newNotification]);

*/
