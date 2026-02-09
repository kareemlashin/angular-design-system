/**
 * Design System Core Library
 *
 * This library provides core utilities, services, directives, and types
 * for building accessible Angular components.
 */

// Services
export * from './lib/services/unique-id.service';
export * from './lib/services/live-announcer.service';
export * from './lib/services/focus-manager.service';
export * from './lib/services/theme.service';

// Directives
export * from './lib/directives/auto-focus.directive';
export * from './lib/directives/trap-focus.directive';
export * from './lib/directives/click-outside.directive';

// Types
export * from './lib/types/component-size.type';
export * from './lib/types/component-variant.type';
export * from './lib/types/accessibility.types';

// Utilities
export * from './lib/utilities/keyboard.utils';
export * from './lib/utilities/aria.utils';
export * from './lib/utilities/dom.utils';
