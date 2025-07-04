import { View, FlatList, RefreshControl } from 'react-native';
import { useCallback } from 'react';
import { usePrayerTimes } from '../hooks/usePrayerTimes';
import PrayerCard from '../components/PrayerCard';
import { format } from 'date-fns';

export default function TimetableScreen() {
  const dateKey = format(new Date(), 'yyyyMMdd');
  const { data, loading, refetch } = usePrayerTimes(dateKey);

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <View className="flex-1 p-4">
      <FlatList
        data={data || []}
        keyExtractor={(item) => item.prayer}
        renderItem={({ item }) => <PrayerCard prayer={item} />}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
    </View>
  );
}
