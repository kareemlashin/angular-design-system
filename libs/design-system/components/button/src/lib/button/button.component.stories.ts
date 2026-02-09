import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button shows a loading spinner',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button should take full width',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type',
    },
    clicked: {
      action: 'clicked',
      description: 'Event emitted when button is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading" (clicked)="clicked($event)">
      Primary Button
    </ds-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [size]="size">Secondary Button</ds-button>`,
  }),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [size]="size">Outline Button</ds-button>`,
  }),
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [size]="size">Ghost Button</ds-button>`,
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [size]="size">Delete</ds-button>`,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <ds-button size="sm">Small</ds-button>
        <ds-button size="md">Medium</ds-button>
        <ds-button size="lg">Large</ds-button>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="display: flex; gap: 1rem;">
          <ds-button variant="primary">Primary</ds-button>
          <ds-button variant="secondary">Secondary</ds-button>
          <ds-button variant="outline">Outline</ds-button>
          <ds-button variant="ghost">Ghost</ds-button>
          <ds-button variant="danger">Danger</ds-button>
        </div>
      </div>
    `,
  }),
};

export const Loading: Story = {
  args: {
    loading: true,
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [loading]="loading">Loading...</ds-button>`,
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [disabled]="disabled">Disabled</ds-button>`,
  }),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<ds-button [variant]="variant" [fullWidth]="fullWidth">Full Width Button</ds-button>`,
  }),
};

export const WithIcon: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 1rem;">
        <ds-button variant="primary">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0L9.5 6H16L11 9.5L12.5 16L8 12L3.5 16L5 9.5L0 6H6.5L8 0Z"/>
          </svg>
          With Icon
        </ds-button>
      </div>
    `,
  }),
};
