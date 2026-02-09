# Design System Tokens

This library contains all design tokens for the Angular design system, including colors, typography, spacing, shadows, borders, animations, breakpoints, and z-index values.

## Overview

Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values in order to maintain a scalable and consistent visual system.

## Token Organization

Our tokens follow a **three-tier system**:

1. **Primitive tokens**: Raw values (e.g., `$primitive-blue-500: #3b82f6`)
2. **Semantic tokens**: Contextual meanings (e.g., `$color-primary: $primitive-blue-600`)
3. **Component tokens**: Component-specific values (e.g., `$button-padding: $spacing-4`)

## Usage

### In SCSS Files

```scss
@import '@design-system/tokens';

.my-button {
  padding: $spacing-4 $spacing-6;
  background-color: $color-primary;
  border-radius: $border-radius-md;
  transition: $transition-button;

  &:hover {
    background-color: $color-primary-hover;
  }

  @include respond-to('md') {
    padding: $spacing-6 $spacing-8;
  }
}
```

### In CSS (Runtime Theming)

```css
@import '@design-system/tokens/css/tokens.css';

.my-button {
  padding: var(--spacing-4) var(--spacing-6);
  background-color: var(--color-primary);
}
```

## Available Tokens

- **Colors**: Primitive palettes, semantic colors, text, background, border colors
- **Typography**: Font families, sizes, weights, line heights, letter spacing
- **Spacing**: 8px-based grid system (0 to 96)
- **Shadows**: Elevation system (xs to 2xl), focus shadows
- **Borders**: Widths, radius values
- **Animations**: Durations, easing functions, transitions
- **Breakpoints**: Responsive breakpoints with mixins
- **Z-Index**: Stacking context scale
- **Mixins**: Utility mixins for common patterns

See the full documentation in the token files under `src/lib/scss/`.
