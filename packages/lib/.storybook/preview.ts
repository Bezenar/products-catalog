/// <reference types="vite/client" />

import '../src/assets/styles/SCSSVariablesInJS.module.scss';
import '../src/assets/styles/index.scss';

const preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
