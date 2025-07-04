import 'expo-dev-client';
import 'dotenv/config';
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  name: 'APP_NAME', // TODO: replace with actual app name
  slug: 'app-name',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  extra: {
    firebase: {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
    },
    FCM_SERVICE_KEY: process.env.FCM_SERVICE_KEY,
  },
  ios: {
    bundleIdentifier: 'BUNDLE_ID', // TODO: replace with actual bundle id
    supportsTablet: true,
  },
  android: {
    package: 'BUNDLE_ID', // TODO: replace with actual bundle id
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
});
