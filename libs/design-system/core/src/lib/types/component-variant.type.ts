/**
 * Standard component visual variants
 */
export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Feedback/status variants for components
 */
export type FeedbackVariant = 'success' | 'warning' | 'danger' | 'info';

/**
 * All available component variants including feedback types
 */
export type ComponentVariantExtended = ComponentVariant | FeedbackVariant;
