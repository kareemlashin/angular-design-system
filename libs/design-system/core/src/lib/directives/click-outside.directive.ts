import { Directive, ElementRef, inject, output, HostListener, input } from '@angular/core';

/**
 * Directive to detect clicks outside an element
 *
 * Useful for closing dropdowns, modals, and other overlays
 *
 * @example
 * ```html
 * <div dsClickOutside (dsClickedOutside)="closeDropdown()">
 *   <button>Toggle</button>
 *   <div class="dropdown">Content</div>
 * </div>
 * ```
 */
@Directive({
  selector: '[dsClickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  private elementRef = inject(ElementRef);

  /**
   * Whether the directive is enabled
   */
  dsClickOutside = input<boolean>(true);

  /**
   * Event emitted when a click occurs outside the element
   */
  dsClickedOutside = output<MouseEvent>();

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent): void {
    if (!this.dsClickOutside()) {
      return;
    }

    const target = event.target as HTMLElement;
    const clickedInside = this.elementRef.nativeElement.contains(target);

    if (!clickedInside) {
      this.dsClickedOutside.emit(event);
    }
  }
}
