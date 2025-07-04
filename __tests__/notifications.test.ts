import * as Notifications from 'expo-notifications';
import { schedulePrayerNotifications } from '../app/services/notifications';
import { PrayerTime } from '../app/lib/types';

jest.mock('expo-notifications');

const mockSchedule = Notifications.scheduleNotificationAsync as jest.Mock;

beforeEach(() => {
  mockSchedule.mockClear();
});

test('schedules two notifications per prayer', async () => {
  const times: PrayerTime[] = [
    { prayer: 'Fajr', adhan: new Date(), iqamah: new Date() },
  ];
  await schedulePrayerNotifications(times);
  expect(mockSchedule).toHaveBeenCalledTimes(2);
});
