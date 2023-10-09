import React from 'react';

import { useNotifications } from '../iterations';

interface NotificationBadgeWrapperProps {
  renderItem: (props: { badge?: number }) => React.ReactNode;
}

export function NotificationBadgeWrapper({ renderItem }: NotificationBadgeWrapperProps): React.ReactElement {
  const notifications = useNotifications();
  return <>{renderItem({ badge: notifications.length })}</>;
}

// Replace in app/navigation/item-list for notification item
// <NotificationBadgeWrapper renderItem={(props) => <Item {...props} title='Notifications' />} />

export function NetworkBadgeWrapper({ renderItem }: NotificationBadgeWrapperProps): React.ReactElement {
  const [badge, setBadge] = React.useState(-1);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setBadge(99);
    }, 2 * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{renderItem({ badge })}</>;
}

// Replace in app/navigation/item for notification item
// <NetworkBadgeWrapper renderItem={(props) => <Item {...props} title='Settings' />} />
