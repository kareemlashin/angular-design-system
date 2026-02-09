import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type HeadingLevel = '1' | '2' | '3' | '4' | '5' | '6';
export type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
export type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type TextColor = 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning';

/**
 * Heading Component (Dumb/Presentational)
 *
 * Semantic heading component with configurable levels.
 *
 * @example
 * ```html
 * <ds-heading level="1">Page Title</ds-heading>
 * <ds-heading level="2">Section Title</ds-heading>
 * ```
 */
@Component({
  selector: 'ds-heading',
  standalone: true,
  imports: [CommonModule],
  template: `
    @switch (level()) {
      @case ('1') {
        <h1 [class]="computedClasses()">
          <ng-content></ng-content>
        </h1>
      }
      @case ('2') {
        <h2 [class]="computedClasses()">
          <ng-content></ng-content>
        </h2>
      }
      @case ('3') {
        <h3 [class]="computedClasses()">
          <ng-content></ng-content>
        </h3>
      }
      @case ('4') {
        <h4 [class]="computedClasses()">
          <ng-content></ng-content>
        </h4>
      }
      @case ('5') {
        <h5 [class]="computedClasses()">
          <ng-content></ng-content>
        </h5>
      }
      @case ('6') {
        <h6 [class]="computedClasses()">
          <ng-content></ng-content>
        </h6>
      }
    }
  `,
  styleUrls: ['./typography.component.scss']
})
export class HeadingComponent {
  level = input<HeadingLevel>('1');
  weight = input<TextWeight>('bold');
  color = input<TextColor>('primary');
  noMargin = input<boolean>(false);

  computedClasses = computed(() => {
    const classes = [
      'ds-heading',
      `ds-heading--${this.level()}`,
      `ds-heading--${this.weight()}`,
      `ds-heading--${this.color()}`
    ];
    if (this.noMargin()) {
      classes.push('ds-heading--no-margin');
    }
    return classes.join(' ');
  });
}

/**
 * Text Component (Dumb/Presentational)
 *
 * Versatile text component with size, weight, and color variants.
 *
 * @example
 * ```html
 * <ds-text size="lg" weight="medium">
 *   This is a large, medium-weight text
 * </ds-text>
 * ```
 */
@Component({
  selector: 'ds-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p [class]="computedClasses()">
      <ng-content></ng-content>
    </p>
  `,
  styleUrls: ['./typography.component.scss']
})
export class TextComponent {
  size = input<TextSize>('base');
  weight = input<TextWeight>('normal');
  color = input<TextColor>('primary');
  noMargin = input<boolean>(false);

  computedClasses = computed(() => {
    const classes = [
      'ds-text',
      `ds-text--${this.size()}`,
      `ds-text--${this.weight()}`,
      `ds-text--${this.color()}`
    ];
    if (this.noMargin()) {
      classes.push('ds-text--no-margin');
    }
    return classes.join(' ');
  });
}
