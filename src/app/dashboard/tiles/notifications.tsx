import React from 'react';
import { useAddNotification, useNotifications } from '../../../iterations';
import { List } from '../list';

export function NotificationsTile(): React.ReactElement {
  return (
    <div id='dashboard-table' className='dashboard-tile'>
      <div className='dashboard-tile-header'>Notifications</div>

      <AddNotification />

      <NotificationList />
    </div>
  );
}

function AddNotification(): React.ReactElement {
  const addNotification = useAddNotification();

  return (
    <>
      <button onClick={() => addNotification(`${Date.now()}`)}>Add notification</button>
      <input placeholder='Notification value' disabled />
    </>
  );
}

function NotificationList(): React.ReactElement {
  const notifications = useNotifications();
  return <List data={notifications.map(({ text }) => text)} />;
}
