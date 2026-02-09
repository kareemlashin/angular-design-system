/**
 * ARIA role types for accessibility
 */
export type AriaRole =
  | 'button'
  | 'checkbox'
  | 'radio'
  | 'textbox'
  | 'combobox'
  | 'listbox'
  | 'option'
  | 'menu'
  | 'menuitem'
  | 'menuitemcheckbox'
  | 'menuitemradio'
  | 'tab'
  | 'tabpanel'
  | 'dialog'
  | 'alertdialog'
  | 'alert'
  | 'status'
  | 'tooltip'
  | 'navigation'
  | 'main'
  | 'region'
  | 'banner'
  | 'contentinfo'
  | 'complementary'
  | 'search';

/**
 * ARIA live region politeness settings
 */
export type AriaLive = 'off' | 'polite' | 'assertive';

/**
 * Configuration for focus management
 */
export interface FocusOptions {
  /**
   * Whether to prevent scroll when focusing
   */
  preventScroll?: boolean;

  /**
   * Whether to focus even if the element is disabled
   */
  forceFocus?: boolean;

  /**
   * Delay before focusing (in milliseconds)
   */
  delay?: number;
}

/**
 * Configuration for live announcements
 */
export interface LiveAnnouncementOptions {
  /**
   * Politeness level of the announcement
   */
  politeness?: AriaLive;

  /**
   * Duration to keep the announcement visible (in milliseconds)
   */
  duration?: number;

  /**
   * Whether to clear previous announcements
   */
  clearPrevious?: boolean;
}

/**
 * Keyboard event key codes
 */
export enum KeyCode {
  ENTER = 'Enter',
  SPACE = ' ',
  TAB = 'Tab',
  ESCAPE = 'Escape',
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
  HOME = 'Home',
  END = 'End',
  PAGE_UP = 'PageUp',
  PAGE_DOWN = 'PageDown',
}
