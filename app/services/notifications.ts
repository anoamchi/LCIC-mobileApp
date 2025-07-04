import * as Notifications from 'expo-notifications';
import { PrayerTimes } from '../lib/types';

export async function requestNotifPermissions() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    await Notifications.requestPermissionsAsync();
  }
}
export async function schedulePrayerNotifications(prayerTimes: PrayerTimes[]) {
  await cancelAllPrayerNotifications();
  prayerTimes.forEach((t) => {
    Notifications.scheduleNotificationAsync({
      content: { title: t.prayer, body: 'Adh\u0101n in 5 min' },
      trigger: new Date(t.adhan.getTime() - 5 * 60 * 1000),
    });
    Notifications.scheduleNotificationAsync({
      content: { title: t.prayer, body: 'Iq\u0101mah in 1 min' },
      trigger: new Date(t.iqamah.getTime() - 60 * 1000),
    });
  });
}

export async function cancelAllPrayerNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
