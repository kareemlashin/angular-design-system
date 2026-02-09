import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Container Component
 *
 * Responsive container with max-width constraints
 */
@Component({
  selector: 'ds-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ds-container ds-container--{{size()}}">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    @import '@design-system/tokens';

    .ds-container {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: $spacing-4;
      padding-right: $spacing-4;

      @include respond-to('md') {
        padding-left: $spacing-6;
        padding-right: $spacing-6;
      }
    }

    .ds-container--sm { max-width: $container-sm; }
    .ds-container--md { max-width: $container-md; }
    .ds-container--lg { max-width: $container-lg; }
    .ds-container--xl { max-width: $container-xl; }
    .ds-container--full { max-width: 100%; }
  `]
})
export class ContainerComponent {
  size = input<ContainerSize>('lg');
}

/**
 * Stack Component
 *
 * Flexbox layout with configurable spacing
 */
@Component({
  selector: 'ds-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="ds-stack ds-stack--{{direction()}} ds-stack--gap-{{gap()}}">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    @import '@design-system/tokens';

    .ds-stack {
      display: flex;
    }

    .ds-stack--vertical { flex-direction: column; }
    .ds-stack--horizontal { flex-direction: row; flex-wrap: wrap; }

    .ds-stack--gap-1 { gap: $spacing-1; }
    .ds-stack--gap-2 { gap: $spacing-2; }
    .ds-stack--gap-3 { gap: $spacing-3; }
    .ds-stack--gap-4 { gap: $spacing-4; }
    .ds-stack--gap-6 { gap: $spacing-6; }
    .ds-stack--gap-8 { gap: $spacing-8; }
  `]
})
export class StackComponent {
  direction = input<'vertical' | 'horizontal'>('vertical');
  gap = input<'1' | '2' | '3' | '4' | '6' | '8'>('4');
}
