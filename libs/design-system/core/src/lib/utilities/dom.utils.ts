/**
 * DOM utility functions
 */

/**
 * Check if an element is visible
 *
 * @param element - The element to check
 * @returns True if the element is visible
 */
export function isElementVisible(element: HTMLElement): boolean {
  return element.offsetParent !== null && !element.hasAttribute('hidden');
}

/**
 * Check if an element is disabled
 *
 * @param element - The element to check
 * @returns True if the element is disabled
 */
export function isElementDisabled(element: HTMLElement): boolean {
  return element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
}

/**
 * Get the scroll parent of an element
 *
 * @param element - The element
 * @returns The scroll parent element
 */
export function getScrollParent(element: HTMLElement): HTMLElement {
  let parent = element.parentElement;

  while (parent) {
    const overflowY = window.getComputedStyle(parent).overflowY;
    const isScrollable = overflowY !== 'visible' && overflowY !== 'hidden';

    if (isScrollable && parent.scrollHeight > parent.clientHeight) {
      return parent;
    }

    parent = parent.parentElement;
  }

  return document.documentElement;
}

/**
 * Scroll an element into view if needed
 *
 * @param element - The element to scroll into view
 * @param behavior - The scroll behavior
 */
export function scrollIntoViewIfNeeded(
  element: HTMLElement,
  behavior: ScrollBehavior = 'smooth'
): void {
  const rect = element.getBoundingClientRect();
  const isInViewport =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth);

  if (!isInViewport) {
    element.scrollIntoView({ behavior, block: 'nearest' });
  }
}

/**
 * Get element offset relative to document
 */
export function getElementOffset(element: HTMLElement): { top: number; left: number } {
  const rect = element.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft,
  };
}
