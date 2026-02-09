import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Theme types
 */
export type Theme = 'light' | 'dark' | 'auto';

/**
 * Service for managing theme (light/dark mode)
 *
 * Handles theme switching and persistence
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'ds-theme';

  /**
   * Current theme signal
   */
  currentTheme = signal<Theme>('auto');

  /**
   * Actual applied theme (resolved from 'auto')
   */
  appliedTheme = signal<'light' | 'dark'>('light');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeTheme();
      this.watchSystemTheme();
    }
  }

  /**
   * Set the theme
   *
   * @param theme - The theme to set ('light', 'dark', or 'auto')
   *
   * @example
   * ```typescript
   * themeService.setTheme('dark');
   * themeService.setTheme('auto'); // Follow system preference
   * ```
   */
  setTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.currentTheme.set(theme);

    // Save to localStorage
    try {
      localStorage.setItem(this.STORAGE_KEY, theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage', error);
    }

    // Apply theme
    this.applyTheme(theme);
  }

  /**
   * Toggle between light and dark themes
   */
  toggleTheme(): void {
    const current = this.appliedTheme();
    const newTheme = current === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  /**
   * Get the current theme from localStorage
   */
  private getStoredTheme(): Theme | null {
    if (!isPlatformBrowser(this.platformId)) {
      return null;
    }

    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored as Theme | null;
    } catch (error) {
      console.warn('Failed to read theme from localStorage', error);
      return null;
    }
  }

  /**
   * Get the system theme preference
   */
  private getSystemTheme(): 'light' | 'dark' {
    if (!isPlatformBrowser(this.platformId)) {
      return 'light';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  /**
   * Apply the theme to the document
   */
  private applyTheme(theme: Theme): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const resolvedTheme = theme === 'auto' ? this.getSystemTheme() : theme;

    this.appliedTheme.set(resolvedTheme);

    // Apply to document
    document.documentElement.setAttribute('data-theme', resolvedTheme);

    // Also add a class for easier CSS targeting
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${resolvedTheme}-theme`);
  }

  /**
   * Initialize theme on service creation
   */
  private initializeTheme(): void {
    const stored = this.getStoredTheme();
    const theme = stored || 'auto';
    this.currentTheme.set(theme);
    this.applyTheme(theme);
  }

  /**
   * Watch for system theme changes
   */
  private watchSystemTheme(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    mediaQuery.addEventListener('change', (event) => {
      // Only react to system changes if theme is set to 'auto'
      if (this.currentTheme() === 'auto') {
        const newTheme = event.matches ? 'dark' : 'light';
        this.appliedTheme.set(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        document.documentElement.classList.remove('light-theme', 'dark-theme');
        document.documentElement.classList.add(`${newTheme}-theme`);
      }
    });
  }
}
