import { KeyCode } from '../types/accessibility.types';

/**
 * Check if a keyboard event matches a specific key
 *
 * @param event - The keyboard event
 * @param key - The key to check
 * @returns True if the event matches the key
 */
export function isKey(event: KeyboardEvent, key: KeyCode | string): boolean {
  return event.key === key;
}

/**
 * Check if Enter key was pressed
 */
export function isEnterKey(event: KeyboardEvent): boolean {
  return isKey(event, KeyCode.ENTER);
}

/**
 * Check if Space key was pressed
 */
export function isSpaceKey(event: KeyboardEvent): boolean {
  return isKey(event, KeyCode.SPACE);
}

/**
 * Check if Escape key was pressed
 */
export function isEscapeKey(event: KeyboardEvent): boolean {
  return isKey(event, KeyCode.ESCAPE);
}

/**
 * Check if Tab key was pressed
 */
export function isTabKey(event: KeyboardEvent): boolean {
  return isKey(event, KeyCode.TAB);
}

/**
 * Check if an arrow key was pressed
 */
export function isArrowKey(event: KeyboardEvent): boolean {
  return [
    KeyCode.ARROW_UP,
    KeyCode.ARROW_DOWN,
    KeyCode.ARROW_LEFT,
    KeyCode.ARROW_RIGHT,
  ].includes(event.key as KeyCode);
}

/**
 * Check if Enter or Space key was pressed (common for button-like interactions)
 */
export function isActivationKey(event: KeyboardEvent): boolean {
  return isEnterKey(event) || isSpaceKey(event);
}

/**
 * Prevent default behavior and stop propagation for a keyboard event
 */
export function preventKeyEvent(event: KeyboardEvent): void {
  event.preventDefault();
  event.stopPropagation();
}
