import * as Notifications from 'expo-notifications';
import { PrayerTimes } from '../lib/types';

export async function requestPermissionsAsync() {
  const settings = await Notifications.getPermissionsAsync();
  if (!settings.granted) {
    await Notifications.requestPermissionsAsync();
  }
}

export async function schedulePrayerNotifications(prayerTimes: PrayerTimes[]) {
  // TODO: schedule notifications 5 min before adhan and 1 min before iqamah
}

export async function cancelAllPrayerNotifications() {
  await Notifications.cancelAllScheduledNotificationsAsync();
}
