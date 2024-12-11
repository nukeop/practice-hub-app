/** @type {import('tailwindcss').Config} */

import sharedConfig from '../../tailwind.config';

export default {
    ...sharedConfig,
    content: [
        ...sharedConfig.content,
        './packages/common/**/*.{js,ts,jsx,tsx}'
    ],
};
