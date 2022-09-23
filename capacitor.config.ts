/// <reference types="@capacitor/local-notifications" />
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nagaworld.lms',
  appName: 'Sauveli',
  webDir: 'www',
  bundledWebRuntime: false,
  "server": {
    "allowNavigation": ["mobile.singha.app", "sauvel.web.app"],
    "url": "https://mobile.singha.app"
  }
};

export default config;