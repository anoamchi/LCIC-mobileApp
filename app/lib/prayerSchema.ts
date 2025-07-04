import { z } from 'zod';

export const PrayerTimeSchema = z.object({
  prayer: z.string(),
  adhan: z.string(),
  iqamah: z.string(),
});

export const PrayerTimesSchema = z.array(PrayerTimeSchema);
export type PrayerTimes = z.infer<typeof PrayerTimesSchema>;
