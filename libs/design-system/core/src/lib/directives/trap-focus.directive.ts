import { Directive, ElementRef, inject, input, OnInit, OnDestroy, HostListener } from '@angular/core';
import { FocusManagerService } from '../services/focus-manager.service';

/**
 * Directive to trap focus within an element (useful for modals and dialogs)
 *
 * Prevents Tab navigation from leaving the element and cycles focus within it
 *
 * @example
 * ```html
 * <div dsTrapFocus [dsAutoFocusFirst]="true">
 *   <button>First</button>
 *   <input />
 *   <button>Last</button>
 * </div>
 * ```
 */
@Directive({
  selector: '[dsTrapFocus]',
  standalone: true,
})
export class TrapFocusDirective implements OnInit, OnDestroy {
  private elementRef = inject(ElementRef);
  private focusManager = inject(FocusManagerService);

  /**
   * Whether to enable focus trapping
   */
  dsTrapFocus = input<boolean>(true);

  /**
   * Whether to automatically focus the first focusable element
   */
  dsAutoFocusFirst = input<boolean>(true);

  /**
   * Whether to restore focus when the directive is destroyed
   */
  dsRestoreFocus = input<boolean>(true);

  ngOnInit(): void {
    if (this.dsTrapFocus()) {
      // Store current focus for restoration
      if (this.dsRestoreFocus()) {
        this.focusManager.storeFocus();
      }

      // Auto focus first element
      if (this.dsAutoFocusFirst()) {
        const firstElement = this.focusManager.getFirstFocusableElement(
          this.elementRef.nativeElement
        );

        if (firstElement) {
          this.focusManager.focusElement(firstElement, { delay: 100 });
        }
      }
    }
  }

  ngOnDestroy(): void {
    if (this.dsTrapFocus() && this.dsRestoreFocus()) {
      this.focusManager.restoreFocus();
    }
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (this.dsTrapFocus()) {
      this.focusManager.trapFocus(this.elementRef.nativeElement, event);
    }
  }
}
