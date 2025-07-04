import { format } from 'date-fns';
import { collection, doc, setDoc } from 'firebase/firestore';
import app, { firestore } from '../app/services/firebase';

async function seed() {
  const dateKey = format(new Date(), 'yyyyMMdd');
  const ref = doc(collection(firestore, 'prayerTimes'), dateKey);
  await setDoc(ref, {
    times: [
      { prayer: 'Fajr', adhan: new Date(), iqamah: new Date() },
    ],
  });
  console.log('seeded', dateKey);
}

seed().finally(() => {
  app.delete?.();
});
