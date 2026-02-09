/**
 * Utility functions for ARIA attributes
 */

/**
 * Convert a boolean to an ARIA boolean string
 *
 * @param value - The boolean value
 * @returns 'true' or 'false' as a string
 */
export function toAriaBoolean(value: boolean | undefined | null): 'true' | 'false' {
  return value ? 'true' : 'false';
}

/**
 * Convert a value to an ARIA attribute value
 *
 * @param value - The value to convert
 * @returns The value as a string or undefined
 */
export function toAriaValue(value: string | number | boolean | undefined | null): string | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }

  if (typeof value === 'boolean') {
    return toAriaBoolean(value);
  }

  return String(value);
}

/**
 * Build ARIA labelling attributes
 *
 * @param label - Direct label text
 * @param labelledBy - ID of labelling element
 * @param describedBy - ID of describing element
 * @returns Object with ARIA attributes
 */
export function buildAriaLabelling(
  label?: string,
  labelledBy?: string,
  describedBy?: string
): Record<string, string | undefined> {
  return {
    'aria-label': label,
    'aria-labelledby': labelledBy,
    'aria-describedby': describedBy,
  };
}

/**
 * Build ARIA state attributes for a button
 */
export function buildButtonAriaState(
  pressed?: boolean,
  expanded?: boolean,
  disabled?: boolean
): Record<string, string | undefined> {
  return {
    'aria-pressed': pressed !== undefined ? toAriaBoolean(pressed) : undefined,
    'aria-expanded': expanded !== undefined ? toAriaBoolean(expanded) : undefined,
    'aria-disabled': disabled !== undefined ? toAriaBoolean(disabled) : undefined,
  };
}
