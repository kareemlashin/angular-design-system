import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import type { AriaLive, LiveAnnouncementOptions } from '../types/accessibility.types';

/**
 * Service for making live announcements to screen readers
 *
 * Creates an ARIA live region and announces messages for accessibility
 */
@Injectable({
  providedIn: 'root',
})
export class LiveAnnouncerService {
  private platformId = inject(PLATFORM_ID);
  private liveElement: HTMLElement | null = null;
  private timeoutId?: number;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.createLiveElement();
    }
  }

  /**
   * Announce a message to screen readers
   *
   * @param message - The message to announce
   * @param options - Configuration options
   *
   * @example
   * ```typescript
   * liveAnnouncer.announce('Item added to cart', { politeness: 'polite' });
   * ```
   */
  announce(message: string, options: LiveAnnouncementOptions = {}): void {
    if (!isPlatformBrowser(this.platformId) || !this.liveElement) {
      return;
    }

    const {
      politeness = 'polite',
      duration = 7000,
      clearPrevious = true,
    } = options;

    // Clear previous timeout
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }

    // Clear previous message if requested
    if (clearPrevious) {
      this.clear();
    }

    // Set politeness level
    this.liveElement.setAttribute('aria-live', politeness);

    // Announce message
    // Use setTimeout to ensure screen readers pick up the change
    setTimeout(() => {
      if (this.liveElement) {
        this.liveElement.textContent = message;
      }

      // Clear message after duration
      this.timeoutId = window.setTimeout(() => {
        this.clear();
      }, duration);
    }, 100);
  }

  /**
   * Clear any active announcement
   */
  clear(): void {
    if (this.liveElement) {
      this.liveElement.textContent = '';
    }
  }

  /**
   * Create the live region element
   */
  private createLiveElement(): void {
    if (this.liveElement) {
      return;
    }

    this.liveElement = document.createElement('div');
    this.liveElement.setAttribute('class', 'ds-live-announcer');
    this.liveElement.setAttribute('aria-live', 'polite');
    this.liveElement.setAttribute('aria-atomic', 'true');

    // Visually hide but keep accessible to screen readers
    Object.assign(this.liveElement.style, {
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: '0',
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: '0',
    });

    document.body.appendChild(this.liveElement);
  }
}
