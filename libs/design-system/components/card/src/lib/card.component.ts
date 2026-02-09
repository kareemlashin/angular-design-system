import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Card Component (Dumb/Presentational)
 *
 * A versatile card container using composition pattern.
 *
 * @example
 * ```html
 * <ds-card>
 *   <ds-card-header>
 *     <h2>Card Title</h2>
 *   </ds-card-header>
 *   <ds-card-content>
 *     <p>Card content goes here</p>
 *   </ds-card-content>
 *   <ds-card-footer>
 *     <ds-button>Action</ds-button>
 *   </ds-card-footer>
 * </ds-card>
 * ```
 */
@Component({
  selector: 'ds-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ds-card" [class.ds-card--hoverable]="hoverable()">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    @import '@design-system/tokens';

    .ds-card {
      background-color: $color-surface;
      border: $border-width-thin solid $color-border;
      border-radius: $border-radius-card;
      box-shadow: $shadow-card;
      overflow: hidden;
      transition: $transition-shadow;
    }

    .ds-card--hoverable {
      cursor: pointer;

      @include hover {
        box-shadow: $shadow-card-hover;
      }
    }
  `]
})
export class CardComponent {
  hoverable = input<boolean>(false);
}

@Component({
  selector: 'ds-card-header',
  standalone: true,
  template: `
    <div class="ds-card-header">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    @import '@design-system/tokens';

    .ds-card-header {
      padding: $spacing-6;
      border-bottom: $border-width-thin solid $color-border;
    }
  `]
})
export class CardHeaderComponent {}

@Component({
  selector: 'ds-card-content',
  standalone: true,
  template: `
    <div class="ds-card-content">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    @import '@design-system/tokens';

    .ds-card-content {
      padding: $spacing-6;
    }
  `]
})
export class CardContentComponent {}

@Component({
  selector: 'ds-card-footer',
  standalone: true,
  template: `
    <div class="ds-card-footer">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    @import '@design-system/tokens';

    .ds-card-footer {
      padding: $spacing-6;
      border-top: $border-width-thin solid $color-border;
      background-color: $color-background-secondary;
    }
  `]
})
export class CardFooterComponent {}
