import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';
import { FocusManagerService } from '../services/focus-manager.service';

/**
 * Directive to automatically focus an element when it's initialized
 *
 * @example
 * ```html
 * <input dsAutoFocus />
 * <button dsAutoFocus [dsFocusDelay]="200">Click me</button>
 * ```
 */
@Directive({
  selector: '[dsAutoFocus]',
  standalone: true,
})
export class AutoFocusDirective implements OnInit {
  private elementRef = inject(ElementRef);
  private focusManager = inject(FocusManagerService);

  /**
   * Whether to enable auto focus
   */
  dsAutoFocus = input<boolean>(true);

  /**
   * Delay before focusing (in milliseconds)
   */
  dsFocusDelay = input<number>(0);

  /**
   * Whether to prevent scroll when focusing
   */
  dsPreventScroll = input<boolean>(false);

  ngOnInit(): void {
    if (this.dsAutoFocus()) {
      this.focusManager.focusElement(this.elementRef.nativeElement, {
        delay: this.dsFocusDelay(),
        preventScroll: this.dsPreventScroll(),
      });
    }
  }
}
