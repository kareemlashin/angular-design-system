import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Checkbox Component (Dumb/Presentational)
 *
 * A versatile checkbox with indeterminate state and accessibility.
 *
 * @example
 * ```html
 * <ds-checkbox
 *   id="terms"
 *   label="Accept terms and conditions"
 *   [checked]="acceptedTerms"
 *   (checkedChange)="acceptedTerms = $event"
 * />
 * ```
 */
@Component({
  selector: 'ds-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  host: {
    '[class.ds-checkbox]': 'true',
    '[class.ds-checkbox--error]': '!!error()',
    '[class.ds-checkbox--disabled]': 'disabled()'
  }
})
export class CheckboxComponent {
  id = input.required<string>();
  label = input<string>('');
  checked = input<boolean>(false);
  indeterminate = input<boolean>(false);
  disabled = input<boolean>(false);
  required = input<boolean>(false);
  error = input<string | null>(null);
  hint = input<string>('');
  ariaLabel = input<string>('');

  checkedChange = output<boolean>();
  blurred = output<FocusEvent>();
  focused = output<FocusEvent>();

  errorId = computed(() => `${this.id()}-error`);
  hintId = computed(() => `${this.id()}-hint`);

  handleChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.checkedChange.emit(target.checked);
  }

  handleBlur(event: FocusEvent): void {
    this.blurred.emit(event);
  }

  handleFocus(event: FocusEvent): void {
    this.focused.emit(event);
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      if (!this.disabled()) {
        this.checkedChange.emit(!this.checked());
      }
    }
  }
}
