import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

/**
 * Button Component (Dumb/Presentational)
 *
 * A versatile button component with multiple variants, sizes, and states.
 * Fully accessible with ARIA attributes and keyboard navigation support.
 *
 * @example
 * ```html
 * <ds-button variant="primary" size="md" (clicked)="handleClick()">
 *   Click me
 * </ds-button>
 *
 * <ds-button variant="outline" [loading]="isLoading">
 *   Submit
 * </ds-button>
 *
 * <ds-button variant="danger" [disabled]="true">
 *   Delete
 * </ds-button>
 * ```
 */
@Component({
  selector: 'ds-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: {
    '[attr.role]': '"button"',
    '[attr.aria-disabled]': 'disabled() || loading()',
    '[attr.aria-busy]': 'loading()',
    '[class]': 'computedClasses()',
  },
})
export class ButtonComponent {
  /**
   * Visual variant of the button
   */
  variant = input<ButtonVariant>('primary');

  /**
   * Size of the button
   */
  size = input<ButtonSize>('md');

  /**
   * Whether the button is disabled
   */
  disabled = input<boolean>(false);

  /**
   * Whether the button is in loading state
   */
  loading = input<boolean>(false);

  /**
   * Whether the button should take full width
   */
  fullWidth = input<boolean>(false);

  /**
   * HTML button type
   */
  type = input<ButtonType>('button');

  /**
   * ARIA label for accessibility
   */
  ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });

  /**
   * Event emitted when button is clicked
   */
  clicked = output<MouseEvent>();

  /**
   * Computed CSS classes based on inputs
   */
  computedClasses = computed(() => {
    const classes = [
      'ds-button',
      `ds-button--${this.variant()}`,
      `ds-button--${this.size()}`,
    ];

    if (this.disabled()) {
      classes.push('ds-button--disabled');
    }

    if (this.loading()) {
      classes.push('ds-button--loading');
    }

    if (this.fullWidth()) {
      classes.push('ds-button--full-width');
    }

    return classes.join(' ');
  });

  /**
   * Check if button should be interactive
   */
  isInteractive = computed(() => !this.disabled() && !this.loading());

  /**
   * Handle button click
   */
  handleClick(event: MouseEvent): void {
    if (!this.isInteractive()) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.clicked.emit(event);
  }

  /**
   * Handle keyboard events (Enter and Space)
   */
  handleKeydown(event: KeyboardEvent): void {
    if (!this.isInteractive()) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.clicked.emit(event as unknown as MouseEvent);
    }
  }
}
