import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'be.city.conquest',
  appName: 'CityConquest',
  webDir: 'dist/web-angular-ctofwal/browser',
  server: {
    androidScheme: 'https'
  }
};

export default config;
