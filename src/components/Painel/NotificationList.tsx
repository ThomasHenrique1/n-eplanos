/* eslint-disable @typescript-eslint/no-explicit-any */
import { NotificationItem } from './NotificationItem';

export const NotificationList = ({ notifications }: { notifications: any[] }) => (
  <ul className="divide-y divide-white/10">
    {notifications.map(notification => (
      <NotificationItem key={notification.id} {...notification} />
    ))}
  </ul>
);