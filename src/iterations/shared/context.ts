import React from 'react';

import type { LanguageContextValue, Notification } from './types';

export const LanguageContext = React.createContext<LanguageContextValue>({
  notifications: [],
  addNotification: () => {},
});

export function useNotifications(): LanguageContextValue['notifications'] {
  const { notifications } = React.useContext(LanguageContext);
  return notifications;
}

export function useAddNotification(): LanguageContextValue['addNotification'] {
  const { addNotification } = React.useContext(LanguageContext);
  return addNotification;
}

export function useContextValue(): LanguageContextValue {
  const timersRef = useTimerCleaner();
  const [notifications, setNotification] = React.useState<Notification[]>([]);

  const addNotification: LanguageContextValue['addNotification'] = (notification) => {
    const newNotification: Notification = { id: Date.now(), text: notification };

    setNotification([...notifications, newNotification]);
    timersRef.current[newNotification.id] = setTimeout(() => {
      delete timersRef.current[newNotification.id];
      setNotification((current) => current.filter(({ id }) => id !== newNotification.id));
    }, 2 * 1000);
  };

  return { notifications, addNotification };
}

function useTimerCleaner(): React.MutableRefObject<Record<string, NodeJS.Timeout>> {
  const timersRef = React.useRef<Record<string, NodeJS.Timeout>>({});

  // Clear all timeouts on un-mount
  React.useEffect(
    () => () => {
      Object.values(timersRef.current).forEach(clearTimeout);
    },
    [],
  );

  return timersRef;
}
