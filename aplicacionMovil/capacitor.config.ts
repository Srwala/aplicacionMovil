import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'aplicacionMovil',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: 'none', // Opciones: 'native', 'none', 'body', 'ionic'
    },
  },
};

export default config;
