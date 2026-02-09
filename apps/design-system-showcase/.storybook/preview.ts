import type { Preview } from '@storybook/angular';

// Import design tokens for all stories
import '../../../libs/design-system/tokens/src/lib/scss/_tokens.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'gray',
          value: '#f3f4f6',
        },
        {
          name: 'dark',
          value: '#1f2937',
        },
      ],
    },
    // Accessibility addon configuration
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'label',
            enabled: true,
          },
          {
            id: 'button-name',
            enabled: true,
          },
          {
            id: 'aria-hidden-focus',
            enabled: true,
          },
          {
            id: 'tabindex',
            enabled: true,
          },
        ],
      },
      manual: false,
    },
    docs: {
      toc: {
        disable: false,
        headingSelector: 'h2, h3',
      },
    },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'circlehollow' },
          { value: 'dark', title: 'Dark', icon: 'circle' },
        ],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
