import { Injectable } from '@angular/core';

/**
 * Service for generating unique IDs for accessibility
 *
 * Used to create unique IDs for ARIA relationships (aria-labelledby, aria-describedby, etc.)
 */
@Injectable({
  providedIn: 'root',
})
export class UniqueIdService {
  private idCounter = 0;
  private readonly prefix = 'ds';

  /**
   * Generate a unique ID
   *
   * @param componentName - Optional component name to include in the ID
   * @returns A unique ID string
   *
   * @example
   * ```typescript
   * const id = uniqueIdService.generate('button');
   * // Returns: 'ds-button-1'
   * ```
   */
  generate(componentName?: string): string {
    this.idCounter++;
    const parts = [this.prefix];

    if (componentName) {
      parts.push(componentName);
    }

    parts.push(this.idCounter.toString());

    return parts.join('-');
  }

  /**
   * Reset the ID counter (useful for testing)
   */
  reset(): void {
    this.idCounter = 0;
  }
}
