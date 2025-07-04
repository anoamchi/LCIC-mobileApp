import { View, Text } from 'react-native';
import { PrayerTime } from '../lib/types';

export default function PrayerCard({ prayer }: { prayer: PrayerTime }) {
  return (
    <View className="p-4 mb-2 bg-white rounded-lg shadow">
      <Text className="font-bold text-lg">{prayer.prayer}</Text>
      <Text>Adhan: {prayer.adhan}</Text>
      <Text>Iqamah: {prayer.iqamah}</Text>
    </View>
  );
}
