import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

/**
 * Input Component (Dumb/Presentational)
 *
 * A versatile input component with validation, error states, and accessibility.
 *
 * @example
 * ```html
 * <ds-input
 *   id="email"
 *   label="Email Address"
 *   type="email"
 *   [value]="email"
 *   [error]="emailError"
 *   (valueChange)="email = $event"
 * />
 * ```
 */
@Component({
  selector: 'ds-input',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ds-input" [class.ds-input--error]="!!error()" [class.ds-input--disabled]="disabled()">
      @if (label()) {
        <label [for]="id()" class="ds-input__label">
          {{ label() }}
          @if (required()) {
            <span class="ds-input__required" aria-label="required">*</span>
          }
        </label>
      }

      <div class="ds-input__wrapper">
        <input
          [id]="id()"
          [type]="type()"
          [value]="value()"
          [placeholder]="placeholder()"
          [disabled]="disabled()"
          [readonly]="readonly()"
          [required]="required()"
          [attr.aria-label]="ariaLabel() || label()"
          [attr.aria-describedby]="error() ? errorId : (hint() ? hintId : null)"
          [attr.aria-invalid]="!!error()"
          (input)="handleInput($event)"
          (blur)="handleBlur($event)"
          (focus)="handleFocus($event)"
          class="ds-input__field"
        />
      </div>

      @if (error()) {
        <span [id]="errorId" class="ds-input__error" role="alert">
          {{ error() }}
        </span>
      }

      @if (hint() && !error()) {
        <span [id]="hintId" class="ds-input__hint">
          {{ hint() }}
        </span>
      }
    </div>
  `,
  styles: [`
    @import '@design-system/tokens';

    .ds-input {
      display: flex;
      flex-direction: column;
      gap: $spacing-2;
    }

    .ds-input__label {
      font-size: $font-size-sm;
      font-weight: $font-weight-medium;
      color: $color-text-primary;
      display: flex;
      align-items: center;
      gap: $spacing-1;
    }

    .ds-input__required {
      color: $color-danger;
    }

    .ds-input__wrapper {
      position: relative;
    }

    .ds-input__field {
      width: 100%;
      padding: $spacing-3 $spacing-4;
      font-size: $font-size-base;
      font-family: $font-family-base;
      line-height: $line-height-normal;
      color: $color-text-primary;
      background-color: $color-background;
      border: $border-width-thin solid $color-border;
      border-radius: $border-radius-input;
      transition: $transition-input;

      &::placeholder {
        color: $color-text-tertiary;
      }

      &:hover:not(:disabled):not(:readonly) {
        border-color: $color-border-hover;
      }

      &:focus {
        outline: none;
        border-color: $color-border-focus;
        box-shadow: $shadow-focus;
      }

      &:disabled {
        background-color: $color-background-disabled;
        color: $color-text-disabled;
        cursor: not-allowed;
      }

      &:readonly {
        background-color: $color-background-secondary;
      }
    }

    .ds-input--error .ds-input__field {
      border-color: $color-border-error;

      &:focus {
        box-shadow: $shadow-focus-danger;
      }
    }

    .ds-input__error {
      font-size: $font-size-sm;
      color: $color-danger;
    }

    .ds-input__hint {
      font-size: $font-size-sm;
      color: $color-text-secondary;
    }
  `]
})
export class InputComponent {
  id = input.required<string>();
  type = input<InputType>('text');
  label = input<string>('');
  value = input<string>('');
  placeholder = input<string>('');
  disabled = input<boolean>(false);
  readonly = input<boolean>(false);
  required = input<boolean>(false);
  error = input<string | null>(null);
  hint = input<string>('');
  ariaLabel = input<string>('');

  valueChange = output<string>();
  blurred = output<FocusEvent>();
  focused = output<FocusEvent>();

  errorId = computed(() => `${this.id()}-error`);
  hintId = computed(() => `${this.id()}-hint`);

  handleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.valueChange.emit(value);
  }

  handleBlur(event: FocusEvent): void {
    this.blurred.emit(event);
  }

  handleFocus(event: FocusEvent): void {
    this.focused.emit(event);
  }
}
