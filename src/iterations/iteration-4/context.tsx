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

// Replace in /shared/context
/*
export type MergeCallback = (newNotification: Notification, notifications: Notification[]) => Notification[];

interface ContextValueProps {
  mergeCallback: MergeCallback;
}

const defaultMergeCallback: MergeCallback = (newNotification, currentNotifications) => [...currentNotifications, newNotification];

export function useContextValue(
  { mergeCallback }: ContextValueProps = { mergeCallback: defaultMergeCallback },
): LanguageContextValue {


// In addNotification
setNotification((currentNotifications) => mergeCallback(newNotification, currentNotifications));

// here
const [direction, setDirection] = React.useState<'up' | 'down'>('up');

const mergeCallback: MergeCallback = (newNotification, currentNotifications) => {
const notification = { ...newNotification, text: `${currentNotifications.length}` };

return direction === 'up' ? [...currentNotifications, notification] : [notification, ...currentNotifications];
};

const { notifications, addNotification } = useContextValue({ mergeCallback });

React.useEffect(() => {
if (notifications.length > 2) {
  setDirection('down');
} else {
  setDirection('up');
}
}, [notifications]);


// callback

const mergeCallback = React.useCallback<MergeCallback>((newNotification, currentNotifications) => {

// later

const mergeCallbackRef = React.useRef(mergeCallback);
mergeCallbackRef.current = mergeCallback;

*/
