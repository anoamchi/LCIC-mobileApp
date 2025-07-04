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
