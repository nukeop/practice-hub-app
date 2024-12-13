/** @type {import('tailwindcss').Config} */

import sharedConfig from '../../tailwind.config';

export default {
  ...sharedConfig,
  content: [...sharedConfig.content, './src/**/*.{js,ts,jsx,tsx}'],
};
