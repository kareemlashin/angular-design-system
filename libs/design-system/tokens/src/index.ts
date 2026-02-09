/**
 * Design System Tokens
 *
 * This library provides design tokens (colors, typography, spacing, etc.)
 * for the Angular design system.
 *
 * ## Usage
 *
 * ### In SCSS files:
 * ```scss
 * @import '@design-system/tokens';
 *
 * .my-component {
 *   color: $color-primary;
 *   padding: $spacing-4;
 *   border-radius: $border-radius-md;
 * }
 * ```
 *
 * ### In CSS (custom properties):
 * ```css
 * @import '@design-system/tokens/css/tokens.css';
 *
 * .my-component {
 *   color: var(--color-primary);
 *   padding: var(--spacing-4);
 * }
 * ```
 */

// Export path information for consumers
export const TOKENS_SCSS_PATH = 'libs/design-system/tokens/src/lib/scss/_tokens.scss';
export const TOKENS_CSS_PATH = 'libs/design-system/tokens/src/lib/css/tokens.css';

// Type definitions for TypeScript consumers
export type ComponentSize = 'sm' | 'md' | 'lg';
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type FeedbackType = 'success' | 'warning' | 'danger' | 'info';

export * from './lib/tokens';
