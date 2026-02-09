import { Component, input, output, signal, computed, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SelectOption<T = any> {
  label: string;
  value: T;
  disabled?: boolean;
  group?: string;
}

/**
 * Select Component (Dumb/Presentational)
 *
 * A versatile select dropdown with keyboard navigation and accessibility.
 *
 * @example
 * ```html
 * <ds-select
 *   id="country"
 *   label="Country"
 *   [options]="countries"
 *   [value]="selectedCountry"
 *   (valueChange)="selectedCountry = $event"
 * />
 * ```
 */
@Component({
  selector: 'ds-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  host: {
    '[class.ds-select]': 'true',
    '[class.ds-select--error]': '!!error()',
    '[class.ds-select--disabled]': 'disabled()',
    '(document:click)': 'onDocumentClick($event)'
  }
})
export class SelectComponent<T = any> {
  id = input.required<string>();
  label = input<string>('');
  options = input.required<SelectOption<T>[]>();
  value = input<T | null>(null);
  placeholder = input<string>('Select an option');
  disabled = input<boolean>(false);
  required = input<boolean>(false);
  error = input<string | null>(null);
  hint = input<string>('');
  ariaLabel = input<string>('');
  searchable = input<boolean>(false);

  valueChange = output<T>();
  blurred = output<FocusEvent>();
  focused = output<FocusEvent>();

  isOpen = signal<boolean>(false);
  searchTerm = signal<string>('');
  highlightedIndex = signal<number>(-1);

  private selectRef = viewChild<ElementRef>('selectElement');

  errorId = computed(() => `${this.id()}-error`);
  hintId = computed(() => `${this.id()}-hint`);

  selectedOption = computed(() => {
    const val = this.value();
    return this.options().find(opt => opt.value === val);
  });

  filteredOptions = computed(() => {
    if (!this.searchable() || !this.searchTerm()) {
      return this.options();
    }
    const term = this.searchTerm().toLowerCase();
    return this.options().filter(opt =>
      opt.label.toLowerCase().includes(term)
    );
  });

  groupedOptions = computed(() => {
    const filtered = this.filteredOptions();
    const groups = new Map<string, SelectOption<T>[]>();

    filtered.forEach(option => {
      const group = option.group || '';
      if (!groups.has(group)) {
        groups.set(group, []);
      }
      groups.get(group)!.push(option);
    });

    return groups;
  });

  hasGroups = computed(() => {
    const groups = this.groupedOptions();
    if (groups.size > 1) return true;
    if (groups.size === 1) {
      const firstKey = Array.from(groups.keys())[0];
      return firstKey !== '';
    }
    return false;
  });

  toggleDropdown(): void {
    if (this.disabled()) return;

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  open(): void {
    this.isOpen.set(true);
    this.searchTerm.set('');
    this.highlightedIndex.set(-1);

    // Focus search input if searchable
    if (this.searchable()) {
      setTimeout(() => {
        const searchInput = document.getElementById(`${this.id()}-search`);
        searchInput?.focus();
      });
    }
  }

  close(): void {
    this.isOpen.set(false);
    this.searchTerm.set('');
    this.highlightedIndex.set(-1);
  }

  selectOption(option: SelectOption<T>, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }

    if (option.disabled) return;

    this.valueChange.emit(option.value);
    this.close();
  }

  handleKeydown(event: KeyboardEvent): void {
    if (this.disabled()) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (this.isOpen()) {
          const highlighted = this.filteredOptions()[this.highlightedIndex()];
          if (highlighted) {
            this.selectOption(highlighted);
          }
        } else {
          this.open();
        }
        break;

      case 'Escape':
        event.preventDefault();
        this.close();
        break;

      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen()) {
          this.open();
        } else {
          this.highlightNext();
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (this.isOpen()) {
          this.highlightPrevious();
        }
        break;

      case 'Tab':
        if (this.isOpen()) {
          this.close();
        }
        break;
    }
  }

  highlightNext(): void {
    const options = this.filteredOptions();
    let nextIndex = this.highlightedIndex() + 1;

    // Skip disabled options
    while (nextIndex < options.length && options[nextIndex].disabled) {
      nextIndex++;
    }

    if (nextIndex < options.length) {
      this.highlightedIndex.set(nextIndex);
      this.scrollToHighlighted();
    }
  }

  highlightPrevious(): void {
    const options = this.filteredOptions();
    let prevIndex = this.highlightedIndex() - 1;

    // Skip disabled options
    while (prevIndex >= 0 && options[prevIndex].disabled) {
      prevIndex--;
    }

    if (prevIndex >= 0) {
      this.highlightedIndex.set(prevIndex);
      this.scrollToHighlighted();
    }
  }

  scrollToHighlighted(): void {
    setTimeout(() => {
      const highlightedElement = document.querySelector('.ds-select__option--highlighted');
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: 'nearest' });
      }
    });
  }

  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const selectElement = this.selectRef()?.nativeElement;

    if (selectElement && !selectElement.contains(target)) {
      this.close();
    }
  }

  handleSearchInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm.set(value);
    this.highlightedIndex.set(-1);
  }

  handleBlur(event: FocusEvent): void {
    this.blurred.emit(event);
  }

  handleFocus(event: FocusEvent): void {
    this.focused.emit(event);
  }
}
