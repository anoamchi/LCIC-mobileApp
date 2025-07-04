import { useEffect, useState, useCallback } from 'react';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '../services/firebase';
import { PrayerTimes } from '../lib/types';

export function usePrayerTimes(dateKey: string) {
  const [data, setData] = useState<PrayerTimes[] | null>(null);
  const [loading, setLoading] = useState(true);

  const refetch = useCallback(() => {
    const docRef = doc(collection(firestore, 'prayerTimes'), dateKey);
    return onSnapshot(docRef, (docSnap) => {
      setData(docSnap.data()?.times || []);
      setLoading(false);
    });
  }, [dateKey]);

  useEffect(() => {
    const unsubscribe = refetch();
    return unsubscribe;
  }, [refetch]);

  return { data, loading, refetch };
}
