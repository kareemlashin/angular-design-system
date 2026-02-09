import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { FocusOptions } from '../types/accessibility.types';

/**
 * Service for managing focus and focus trapping
 *
 * Provides utilities for focus management in accessible components
 */
@Injectable({
  providedIn: 'root',
})
export class FocusManagerService {
  private platformId = inject(PLATFORM_ID);
  private previouslyFocusedElement: HTMLElement | null = null;

  /**
   * Focus an element with options
   *
   * @param element - The element to focus
   * @param options - Focus options
   */
  focusElement(element: HTMLElement | null, options: FocusOptions = {}): void {
    if (!isPlatformBrowser(this.platformId) || !element) {
      return;
    }

    const { preventScroll = false, forceFocus = false, delay = 0 } = options;

    // Check if element is disabled
    const isDisabled = element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';

    if (isDisabled && !forceFocus) {
      return;
    }

    const focusFn = () => {
      element.focus({ preventScroll });
    };

    if (delay > 0) {
      setTimeout(focusFn, delay);
    } else {
      focusFn();
    }
  }

  /**
   * Store the currently focused element
   *
   * Useful for restoring focus after modal/dialog closes
   */
  storeFocus(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.previouslyFocusedElement = document.activeElement as HTMLElement;
  }

  /**
   * Restore focus to previously focused element
   *
   * @param fallbackElement - Element to focus if no previous element exists
   */
  restoreFocus(fallbackElement?: HTMLElement): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const elementToFocus = this.previouslyFocusedElement || fallbackElement;

    if (elementToFocus && document.body.contains(elementToFocus)) {
      this.focusElement(elementToFocus);
    }

    this.previouslyFocusedElement = null;
  }

  /**
   * Get all focusable elements within a container
   *
   * @param container - The container element
   * @returns Array of focusable elements
   */
  getFocusableElements(container: HTMLElement): HTMLElement[] {
    if (!isPlatformBrowser(this.platformId)) {
      return [];
    }

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ].join(', ');

    const elements = Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors));

    // Filter out hidden elements
    return elements.filter((element) => {
      return element.offsetParent !== null && !element.hasAttribute('hidden');
    });
  }

  /**
   * Get the first focusable element within a container
   *
   * @param container - The container element
   * @returns First focusable element or null
   */
  getFirstFocusableElement(container: HTMLElement): HTMLElement | null {
    const focusableElements = this.getFocusableElements(container);
    return focusableElements[0] || null;
  }

  /**
   * Get the last focusable element within a container
   *
   * @param container - The container element
   * @returns Last focusable element or null
   */
  getLastFocusableElement(container: HTMLElement): HTMLElement | null {
    const focusableElements = this.getFocusableElements(container);
    return focusableElements[focusableElements.length - 1] || null;
  }

  /**
   * Trap focus within a container
   *
   * Useful for modals and dialogs
   *
   * @param container - The container element
   * @param event - The keyboard event
   * @returns True if focus was trapped, false otherwise
   */
  trapFocus(container: HTMLElement, event: KeyboardEvent): boolean {
    if (event.key !== 'Tab') {
      return false;
    }

    const focusableElements = this.getFocusableElements(container);

    if (focusableElements.length === 0) {
      event.preventDefault();
      return true;
    }

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    const activeElement = document.activeElement as HTMLElement;

    // Shift + Tab (backwards)
    if (event.shiftKey) {
      if (activeElement === firstElement) {
        lastElement.focus();
        event.preventDefault();
        return true;
      }
    }
    // Tab (forwards)
    else {
      if (activeElement === lastElement) {
        firstElement.focus();
        event.preventDefault();
        return true;
      }
    }

    return false;
  }
}
