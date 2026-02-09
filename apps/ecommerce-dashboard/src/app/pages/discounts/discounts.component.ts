import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-discounts',
  imports: [CommonModule],
  templateUrl: './discounts.component.html',
  styleUrl: './discounts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiscountsComponent {}
