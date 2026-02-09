import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-analytics',
  imports: [CommonModule],
  templateUrl: './cart-analytics.component.html',
  styleUrl: './cart-analytics.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartAnalyticsComponent {}
